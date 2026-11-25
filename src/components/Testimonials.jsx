import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

// Справжні відгуки клієнтів з Instagram Direct (@lux_kitchen__, сторіз «Відгуки»).
// Тексти — дослівно, виправлено лише пробіли перед комами. Імен і міст клієнти не вказували — не дописувати.
const testimonials = [
  {
    product: "Кухня",
    text: "Доброго дня, неймовірно вдячні вам за нашу кухню) вона просто неймовірна і я її обожнюю) якість матеріалів та фурнітури просто супер, все продумано до дрібниць) дякую що втілили всі наші побажання 👌",
  },
  {
    product: "Кухня",
    text: "Доброго дня. Дякую Вам за цю якісну кухню 😍 Таких швидких та професійних я давно вже не зустрічала, мені було дуже приємно у вас замовляти! Тепер прийду ще Мебелю до дитячої 😍😍",
  },
  {
    product: "Шафа",
    text: "Доброго дня! Хочу залишити відгук) консультація щодо шафи пройшла на високому рівні; швидко виготовили; встановлення швидке і якісне; дуже задоволена, раджу друзям 😊",
  },
  {
    product: "Кухня за дизайном клієнтки",
    text: "Вітаю!) Замовляла у вас кухню під мій дизайн. Я в захваті, все зробили, як я і хотіла, дуже швидко, дякую!",
  },
  {
    product: "Дитяча кімната",
    text: "Доброго дня 🌸 Щиро дякую Вам за підбір і допомогу дитячої кімната 😍 Вона дуже гарна 🥰",
  },
  {
    product: "Кухня",
    text: "Дякую вам велике за кухню, я в захвати, чуть пізніше скину фото, ну я дійсно дуже задоволена)",
  },
  {
    product: "Шафа-купе",
    text: "Доброго дня ) Вже з чоловіком забрали шкаф, дякую за швидку доставку, зараз будемо збирати ) Оглянули, і якісно зроблено, вже зберемо і надішлю вам фото 😍",
  },
];

const REVIEWS_URL = "https://www.instagram.com/stories/highlights/17926199591011988/";

export default function Testimonials() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / el.clientWidth));
  };

  const go = (idx) => {
    const el = trackRef.current;
    if (!el) return;
    const i = Math.max(0, Math.min(testimonials.length - 1, idx));
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-[#111111] relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">
            Що пишуть <span className="text-[#FFD60A]">наші клієнти</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Справжні повідомлення, які нам надсилають у Direct після встановлення меблів.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((review, idx) => (
              <div key={idx} className="w-full shrink-0 snap-center px-1">
                <div className="h-full bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm flex flex-col">
                  <div className="mb-5 flex gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FFD60A]/15 text-[#8A6D1F] text-xs font-medium">
                      <CheckCircle className="w-3.5 h-3.5" />
                      {review.product}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-6 italic leading-relaxed text-base md:text-lg whitespace-normal break-words">
                    «{review.text}»
                  </p>

                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-[#FFD60A]/15 flex items-center justify-center text-[#B8962E]">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Клієнтка Lux Kitchen</h4>
                      <p className="text-xs text-gray-500">Відгук в Instagram Direct</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button type="button" onClick={() => go(active - 1)} disabled={active === 0} aria-label="Попередній відгук"
              className="w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center disabled:opacity-30 hover:border-[#FFD60A] hover:text-[#FFD60A] transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button key={idx} type="button" onClick={() => go(idx)} aria-label={`Відгук ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${idx === active ? 'w-6 bg-[#FFD60A]' : 'w-2 bg-white/30'}`} />
              ))}
            </div>
            <button type="button" onClick={() => go(active + 1)} disabled={active === testimonials.length - 1} aria-label="Наступний відгук"
              className="w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center disabled:opacity-30 hover:border-[#FFD60A] hover:text-[#FFD60A] transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#FFD60A] hover:text-white font-medium transition-colors">
            Усі відгуки в нашому Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
