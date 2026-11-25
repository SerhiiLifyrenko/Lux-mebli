import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, AlertCircle, Phone, Send, MessageCircle } from 'lucide-react';
import { track } from '../lib/pixel';
import { contacts } from '../data/contacts';

// Квіз розрахунку. Кроки й варіанти відповідей — тут.
const STEPS = [
  {
    key: 'object',
    title: 'Що плануєте зробити?',
    options: ['Кухня', 'Шафа або гардеробна', 'Дитяча', 'Вітальня', 'Інші меблі'],
  },
  {
    key: 'shape',
    title: 'Яка форма кухні?',
    hint: 'Не впевнені — оберіть «Не знаю, порадьте», підберемо разом.',
    onlyIf: (a) => !a.object || a.object === 'Кухня',
    options: ['Пряма', 'Кутова', 'П-подібна', 'З островом', 'Не знаю, порадьте'],
  },
  {
    key: 'stage',
    title: 'На якому етапі приміщення?',
    hint: 'Якщо ремонт ще йде — це навіть краще: встигнемо врахувати розетки, воду й витяжку.',
    options: ['Новобудова, ремонт ще йде', 'Ремонт закінчено', 'Міняю стару кухню / меблі', 'Є проєкт дизайнера', 'Поки рахую бюджет'],
  },
  {
    key: 'budget',
    title: 'На який бюджет орієнтуєтесь?',
    hint: 'Це не зобов\'язання. Бюджет потрібен, щоб я одразу запропонував, де можна оптимізувати.',
    options: ['До 50 000 грн', '50 000 – 150 000 грн', 'Від 150 000 грн', 'Ще не визначився'],
  },
  {
    key: 'timeline',
    title: 'Коли хочете мати меблі?',
    hint: 'Від договору до монтажу — 6–8 тижнів, дата монтажу фіксується в договорі.',
    options: ['Якнайшвидше', 'Через 1–3 місяці', 'Через 3–6 місяців', 'Поки планую'],
  },
];

const CHANNELS = [
  { value: 'Viber', icon: MessageCircle },
  { value: 'Telegram', icon: Send },
  { value: 'Подзвоніть', icon: Phone },
];

export default function Estimate() {
  const [answers, setAnswers] = useState({});
  const [stepIndex, setStepIndex] = useState(0);
  const [channel, setChannel] = useState('Viber');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  // ViewContent — відкрив квіз
  useEffect(() => {
    track('ViewContent', { content_name: 'estimate_quiz' });
  }, []);

  const visibleSteps = STEPS.filter((s) => !s.onlyIf || s.onlyIf(answers));
  const totalSteps = visibleSteps.length + 1; // + крок контактів
  const isContactStep = stepIndex >= visibleSteps.length;
  const step = visibleSteps[stepIndex];
  const progress = Math.round(((stepIndex + 1) / totalSteps) * 100);

  const choose = (value) => {
    const next = { ...answers, [step.key]: value };
    // якщо змінили «що робимо» з кухні на інше — прибрати відповідь про форму кухні
    if (step.key === 'object' && value !== 'Кухня') delete next.shape;
    setAnswers(next);
    setStepIndex((i) => i + 1);
  };

  const back = () => setStepIndex((i) => Math.max(0, i - 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const form = new FormData(e.target);

    const payload = new FormData();
    payload.append('access_key', '86f06ba2-b236-4f25-b5ae-80a495fad8e6');
    payload.append('subject', `Нова заявка з квізу — ${answers.object || 'меблі'} — Lux Kitchen`);
    payload.append('from_name', 'Сайт Lux Kitchen');
    payload.append("Ім'я", form.get('name'));
    payload.append('Телефон', form.get('phone'));
    payload.append('Куди писати', channel);
    payload.append('Що робимо', answers.object || '—');
    if (answers.shape) payload.append('Форма кухні', answers.shape);
    payload.append('Етап', answers.stage || '—');
    payload.append('Бюджет', answers.budget || '—');
    payload.append('Коли', answers.timeline || '—');
    payload.append('Розміри / коментар', form.get('comments') || '—');

    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: payload });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        track('Lead', { content_name: 'estimate_quiz' });
      } else {
        console.error('Помилка відправки', data);
        setStatus('error');
      }
    } catch (error) {
      console.error('Мережева помилка:', error);
      setStatus('error');
    }
  };

  const optionBtn = 'w-full text-left bg-black/40 border border-white/10 hover:border-[#D4AF37] hover:text-white rounded-lg px-5 py-4 text-gray-200 transition-colors';

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-2xl mb-6 flex items-center">
        <Link to="/" className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>На головну</span>
        </Link>
      </div>

      <div className="w-full max-w-2xl bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl">
        {status === 'success' ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-2xl md:text-3xl font-serif text-white mb-3">Дякую, заявку отримав!</h1>
            <p className="text-gray-300 mb-6">
              {channel === 'Подзвоніть'
                ? 'Я подзвоню, щоб уточнити розміри, і підготую розрахунок вартості з варіантами, як вкластися у ваш бюджет.'
                : `Напишу вам у ${channel}, уточню розміри й надішлю розрахунок вартості з варіантами, як вкластися у ваш бюджет.`}
            </p>
            <a href={contacts.instagramHref} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
              Поки чекаєте — наші роботи в Instagram {contacts.instagramHandle}
            </a>
          </motion.div>
        ) : (
          <>
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.15em] text-[#D4AF37] mb-2">Розрахунок вартості · крок {stepIndex + 1} / {totalSteps}</p>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div className="h-full bg-[#D4AF37]" animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!isContactStep ? (
                <motion.div key={step.key} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                  <h1 className="text-2xl md:text-3xl font-serif text-white mb-2">{step.title}</h1>
                  {step.hint && <p className="text-sm text-gray-400 mb-6">{step.hint}</p>}
                  <div className={`grid gap-3 ${step.hint ? '' : 'mt-6'}`}>
                    {step.options.map((opt) => (
                      <button key={opt} type="button" onClick={() => choose(opt)}
                        className={`${optionBtn} ${answers[step.key] === opt ? 'border-[#D4AF37] text-white' : ''}`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.form key="contact" onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }} className="space-y-5">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-serif text-white mb-2">Куди надіслати розрахунок?</h1>
                    <p className="text-sm text-gray-400">Порахую вартість і запропоную, як оптимізувати під ваш бюджет.</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {CHANNELS.map(({ value, icon: Icon }) => (
                      <button key={value} type="button" onClick={() => setChannel(value)}
                        className={`flex flex-col items-center gap-1 rounded-lg border px-2 py-3 text-sm transition-colors ${channel === value ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10' : 'border-white/10 text-gray-300 bg-black/40'}`}>
                        <Icon className="w-5 h-5" />{value}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm text-gray-300">Ваше ім'я</label>
                    <input id="name" name="name" type="text" required autoComplete="name"
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm text-gray-300">Номер телефону {channel !== 'Подзвоніть' && `(для ${channel})`}</label>
                    <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="0__ ___ __ __"
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="comments" className="block text-sm text-gray-300">Розміри або коментар <span className="text-gray-500">(можна пізніше в месенджері)</span></label>
                    <textarea id="comments" name="comments" rows="3" placeholder="Напр.: стіна 3,2 м, кут 2,4 м, висота стелі 2,7 м"
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] resize-none" />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-start gap-3 text-red-300 bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <p className="text-sm">Не вдалося надіслати. Спробуйте ще раз або напишіть мені напряму: {contacts.phoneDisplay} (Viber, Telegram).</p>
                    </div>
                  )}

                  <button type="submit" disabled={status === 'submitting'}
                    className="w-full h-14 bg-[#D4AF37] hover:bg-[#c19b28] text-[#1A1A1A] font-medium rounded-lg transition-colors disabled:opacity-70 flex items-center justify-center">
                    {status === 'submitting'
                      ? <span className="w-6 h-6 border-2 border-[#1A1A1A] border-t-transparent rounded-full animate-spin" />
                      : 'Отримати розрахунок'}
                  </button>
                  <p className="text-center text-xs text-gray-500">Без спаму. Номер потрібен лише для розрахунку.</p>
                </motion.form>
              )}
            </AnimatePresence>

            {stepIndex > 0 && (
              <button type="button" onClick={back} className="mt-6 text-sm text-gray-400 hover:text-[#D4AF37] flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" /> Назад
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
