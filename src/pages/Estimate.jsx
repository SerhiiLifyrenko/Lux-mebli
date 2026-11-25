import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Phone, Send, MessageCircle, Gift, Check } from 'lucide-react';
import { track } from '../lib/pixel';
import { contacts } from '../data/contacts';

// Квіз розрахунку (за зразком квізу Сергія в adsquiz).
// image — шлях до картинки в public/quiz/; якщо файлу ще немає (null), варіант показується текстом.
// multi — можна обрати кілька; onlyIf — крок показується лише за умови; imageFit: 'contain' — схема без обрізання.
const isKitchen = (a) => !a.object || a.object.includes('Кухня');

const STEPS = [
  {
    key: 'object',
    title: 'Що плануєте замовити?',
    hint: 'Можна обрати кілька.',
    multi: true,
    options: [
      { label: 'Кухня', image: '/quiz/obj-kukhnia.jpg' },
      { label: 'Шафа', image: '/quiz/obj-shafa.jpg' },
      { label: 'Гардеробна', image: '/quiz/obj-garderob.jpg' },
      { label: 'Вітальня', image: '/quiz/obj-vitalnia.jpg' },
      { label: 'Спальня', image: '/quiz/obj-spalnia.jpg' },
      { label: 'Дитяча', image: '/quiz/obj-dytiacha.jpg' },
      { label: 'Комплексне меблювання', image: '/quiz/obj-kompleks.jpg' },
    ],
  },
  {
    key: 'style',
    title: 'Який стиль вам більше подобається?',
    options: [
      { label: 'Класична', image: '/quiz/style-1.jpg' },
      { label: 'Сучасна, мінімалізм, хай-тек', image: '/quiz/style-2.jpg' },
      { label: 'Лофт', image: '/quiz/style-3.jpg' },
      { label: 'Скандинавський', image: '/quiz/style-4.jpg' },
      { label: 'Джапанді', image: '/quiz/style-5.jpg' },
      { label: 'Не визначились', image: '/quiz/style-6.jpg' },
    ],
  },
  {
    key: 'shape',
    title: 'Оберіть форму кухні',
    imageFit: 'contain',
    onlyIf: isKitchen,
    options: [
      { label: 'Лінійна', image: '/quiz/shape-1.jpg' },
      { label: 'Кутова', image: '/quiz/shape-2.jpg' },
      { label: 'П-подібна', image: '/quiz/shape-3.jpg' },
      { label: 'З островом', image: '/quiz/shape-4.jpg' },
      { label: 'Паралельна', image: '/quiz/shape-5.jpg' },
      { label: 'Напівострівна', image: '/quiz/shape-6.jpg' },
    ],
  },
  {
    key: 'length',
    title: 'Яка довжина кухні по стінах?',
    hint: 'Приблизно, сумарно по всіх стінах з меблями.',
    onlyIf: isKitchen,
    options: ['До 2 м', '3 м', '4 м', '5 м', '6 м і більше', 'Не знаю — потрібен замір'].map((label) => ({ label })),
  },
  {
    key: 'important',
    title: 'Що для вас найважливіше в новій кухні?',
    hint: 'Можна обрати кілька.',
    multi: true,
    onlyIf: isKitchen,
    options: ['Легко доглядати', 'Багато місця для зберігання', 'Щоб служила 10+ років', 'Дизайн не як у всіх'].map((label) => ({ label })),
  },
  {
    key: 'budget',
    title: 'Який бюджет кухні для вас оптимальний?',
    hint: 'Це не зобов\'язання. Бюджет потрібен, щоб я одразу запропонував, де можна оптимізувати.',
    onlyIf: isKitchen,
    options: ['100–200 тис. грн', '201–250 тис. грн', '251–300 тис. грн', '301–400 тис. грн', 'Потрібна консультація'].map((label) => ({ label })),
  },
  {
    key: 'timeline',
    title: 'Коли плануєте отримати меблі?',
    hint: 'Від договору до монтажу — 6–8 тижнів, дата монтажу фіксується в договорі.',
    options: ['Якнайшвидше', 'Протягом 1–2 місяців', 'Протягом 3–4 місяців', 'Через 6+ місяців'].map((label) => ({ label })),
  },
];

const CHANNELS = [
  { value: 'Viber', icon: MessageCircle },
  { value: 'Telegram', icon: Send },
  { value: 'WhatsApp', icon: MessageCircle },
  { value: 'Подзвоніть', icon: Phone },
];

const BONUS_PDF = '/top30errors.pdf';

export default function Estimate() {
  const [answers, setAnswers] = useState({});
  const [stepIndex, setStepIndex] = useState(0);
  const [channel, setChannel] = useState('Viber');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  // підвантажити картинки квізу заздалегідь, щоб наступні кроки відкривались миттєво
  useEffect(() => {
    STEPS.forEach((st) => st.options.forEach((o) => { if (o.image) new Image().src = o.image; }));
  }, []);

  // ViewContent — відкрив квіз
  useEffect(() => {
    track('ViewContent', { content_name: 'estimate_quiz' });
  }, []);

  // при переході між кроками — на початок сторінки (важливо на телефоні)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stepIndex]);

  const visibleSteps = STEPS.filter((s) => !s.onlyIf || s.onlyIf(answers));
  const totalSteps = visibleSteps.length + 1; // + крок контактів
  const isContactStep = stepIndex >= visibleSteps.length;
  const step = visibleSteps[stepIndex];
  const progress = Math.round(((stepIndex + 1) / totalSteps) * 100);

  const choose = (value) => {
    if (step.multi) {
      const current = answers[step.key] || [];
      const nextVals = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
      setAnswers({ ...answers, [step.key]: nextVals });
      return;
    }
    setAnswers({ ...answers, [step.key]: value });
    setStepIndex((i) => i + 1);
  };

  const isChosen = (value) => (step?.multi ? (answers[step.key] || []).includes(value) : answers[step?.key] === value);
  const canGoNext = step?.multi ? (answers[step.key] || []).length > 0 : Boolean(answers[step?.key]);
  const next = () => canGoNext && setStepIndex((i) => i + 1);
  const hasImages = step?.options.some((o) => o.image);
  const fmt = (v) => (Array.isArray(v) ? v.join(', ') : v);

  const back = () => setStepIndex((i) => Math.max(0, i - 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const form = new FormData(e.target);

    const payload = new FormData();
    payload.append('access_key', '86f06ba2-b236-4f25-b5ae-80a495fad8e6');
    const objects = fmt(answers.object) || 'меблі';
    payload.append('subject', `Нова заявка з квізу — ${objects} — Lux Kitchen`);
    payload.append('from_name', 'Сайт Lux Kitchen');
    payload.append("Ім'я", form.get('name'));
    payload.append('Телефон', form.get('phone'));
    payload.append('Куди писати', channel);
    payload.append('Що замовляють', objects);
    for (const st of visibleSteps.slice(1)) {
      if (answers[st.key]) payload.append(st.title, fmt(answers[st.key]));
    }
    payload.append('Коментар', form.get('comments') || '—');

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


  return (
    <div className="min-h-screen pt-24 pb-16 px-4 flex flex-col items-center">
      <div className={`w-full ${hasImages && !isContactStep ? 'max-w-3xl' : 'max-w-2xl'} mb-6 flex items-center`}>
        <Link to="/" className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>На головну</span>
        </Link>
      </div>

      <div className={`w-full ${hasImages && !isContactStep ? 'max-w-3xl' : 'max-w-2xl'} bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl`}>
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
            <a href={BONUS_PDF} target="_blank" rel="noopener noreferrer" onClick={() => track('ViewContent', { content_name: 'bonus_top30' })}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#D4AF37] hover:bg-[#c19b28] text-[#1A1A1A] font-medium py-4 px-8 rounded-lg mb-6">
              <Gift className="w-5 h-5" /> Завантажити бонус: Топ-30 помилок
            </a>
            <div>
              <a href={contacts.instagramHref} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                Поки чекаєте — наші роботи в Instagram {contacts.instagramHandle}
              </a>
            </div>
          </motion.div>
        ) : (
          <>
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.15em] text-[#D4AF37] mb-2">Розрахунок вартості · крок {stepIndex + 1} / {totalSteps}</p>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div className="h-full bg-[#D4AF37]" animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
              </div>
              {stepIndex === 0 && (
                <p className="mt-4 flex items-center gap-2 text-sm text-gray-300">
                  <Gift className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  Після відповідей — бонус: «Топ-30 помилок при виборі кухні» (PDF)
                </p>
              )}
            </div>

            <AnimatePresence mode="wait">
              {!isContactStep ? (
                <motion.div key={step.key} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                  <h1 className="text-2xl md:text-3xl font-serif text-white mb-2">{step.title}</h1>
                  {step.hint && <p className="text-sm text-gray-400 mb-6">{step.hint}</p>}
                  <div className={`grid gap-3 ${step.hint ? '' : 'mt-6'} ${hasImages ? 'grid-cols-2 md:grid-cols-3' : ''}`}>
                    {step.options.map(({ label, image }) => (
                      <button key={label} type="button" onClick={() => choose(label)}
                        className={`relative text-left rounded-lg border overflow-hidden transition-colors ${isChosen(label) ? 'border-[#D4AF37] text-white bg-[#D4AF37]/10' : 'border-white/10 text-gray-200 bg-black/40 hover:border-[#D4AF37]'}`}>
                        {image && <img src={image} alt="" className={step.imageFit === 'contain' ? 'w-full aspect-square object-contain bg-white' : 'w-full aspect-[4/3] object-cover'} />}
                        <span className={`flex items-center gap-3 ${image ? 'px-3 py-2 text-sm' : 'px-5 py-4'}`}>
                          {step.multi && (
                            <span className={`w-5 h-5 shrink-0 rounded border flex items-center justify-center ${isChosen(label) ? 'bg-[#D4AF37] border-[#D4AF37] text-[#1A1A1A]' : 'border-white/30'}`}>
                              {isChosen(label) && <Check className="w-3.5 h-3.5" />}
                            </span>
                          )}
                          {label}
                        </span>
                      </button>
                    ))}
                  </div>
                  {step.multi && (
                    <button type="button" onClick={next} disabled={!canGoNext}
                      className="mt-6 w-full h-12 rounded-lg bg-[#D4AF37] text-[#1A1A1A] font-medium flex items-center justify-center gap-2 disabled:opacity-40">
                      Далі <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </motion.div>
              ) : (
                <motion.form key="contact" onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }} className="space-y-5">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-serif text-white mb-2">Куди надіслати розрахунок?</h1>
                    <p className="text-sm text-gray-400">Порахую вартість і запропоную, як оптимізувати під ваш бюджет.</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
                    <label htmlFor="comments" className="block text-sm text-gray-300">Коментар <span className="text-gray-500">(розміри, проєкт чи фото — можна пізніше в месенджері)</span></label>
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
