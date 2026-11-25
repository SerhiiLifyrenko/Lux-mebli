import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { contacts } from '../data/contacts';

// Відповіді — лише підтверджені факти (див. «Факти бізнесу»). Оплату й строк гарантії поки не пишемо.
const faq = [
  { q: 'Скільки чекати на кухню?', a: 'Від підписання договору до монтажу — 6–8 тижнів. Точна дата монтажу прописується в договорі.' },
  { q: 'Чи може ціна зрости після підписання?', a: 'Ні. Ціна фіксується в договорі — доплат після підписання немає.' },
  { q: 'Як оформлюється замовлення?', a: 'Офіційним договором від ФОП. У ньому фіксуються ціна й дата монтажу.' },
  { q: 'Яка фурнітура?', a: 'Blum на всьому: ящики, петлі, підйомники.' },
  { q: 'Чи входить техніка в ціну?', a: 'Ні, техніку ви купуєте окремо, а ми врізаємо її в кухню. Краще визначитися з моделями до проєкту — тоді все стане точно.' },
  { q: 'Виїзд і замір — платні?', a: 'Виїзд безкоштовний — після того, як ми погодимо орієнтовний бюджет.' },
  { q: 'Ремонт ще не закінчено — не зарано?', a: 'Навпаки, саме час: встигнемо врахувати розетки, воду й витяжку, поки їх легко перенести.' },
  { q: 'Робите лише кухні?', a: 'Ні: також шафи, гардеробні, дитячі, вітальні та спальні.' },
  { q: 'Де працюєте?', a: 'Тернопіль і область.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-16 md:py-24 bg-[#111111] border-t border-white/5" id="faq">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.16em] text-[#D4AF37] mb-3">◆ Питання</p>
        <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-10">Часті питання</h2>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faq.map(({ q, a }, i) => (
            <div key={q}>
              <button type="button" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}
                className="w-full flex items-center justify-between gap-4 py-5 text-left text-lg text-white hover:text-[#D4AF37] transition-colors">
                {q}
                <ChevronDown className={`w-5 h-5 shrink-0 text-[#D4AF37] transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && <p className="pb-5 text-gray-300 leading-relaxed">{a}</p>}
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center">
          <Link to="/estimate" className="text-center bg-[#D4AF37] hover:bg-[#c19b28] text-[#1A1A1A] font-medium py-4 px-8 rounded-md transition-colors">
            Розрахувати вартість
          </Link>
          <p className="text-sm text-gray-400">
            Не знайшли відповідь? Напишіть у <a href={contacts.viberHref} className="text-[#D4AF37] hover:underline">Viber</a> або{' '}
            <a href={contacts.telegramHref} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">Telegram</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
