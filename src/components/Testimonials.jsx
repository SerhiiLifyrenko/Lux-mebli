import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Справжні відгуки клієнтів з Instagram Direct — скріншоти від Сергія (25.11.2026), з фото замовлення.
// Аватарки клієнтів і підпис старого акаунта розмито. Файли — public/reviews/N.jpg.
const testimonials = [
  { img: "/reviews/1.jpg", alt: "Відгук про кухню: «Дякую вам велике за кухню, я в захваті…» і фото кухні" },
  { img: "/reviews/2.jpg", alt: "Відгук про кухню: «Дякую Вам за цю якісну кухню… Тепер прийду ще Мебелю до дитячої»" },
  { img: "/reviews/3.jpg", alt: "Відгук про дитячу кімнату: «Щиро дякую за підбір і допомогу…» і фото кімнати" },
  { img: "/reviews/4.jpg", alt: "Відгук про кухню за дизайном клієнтки і фото кухні" },
  { img: "/reviews/5.jpg", alt: "Відгук про шафу-купе: «Оглянули, і якісно зроблено…» і фото шафи" },
  { img: "/reviews/6.jpg", alt: "Відгук про стіл: «Не можу висловити, наскільки я вражений якістю та дизайном меблів…»" },
  { img: "/reviews/7.jpg", alt: "Відгук про кухню: «Якість матеріалів та фурнітури просто супер…»" },
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
            Справжні повідомлення в Instagram Direct — з фото меблів, які ми зробили.
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
                <div className="h-[68vh] max-h-[640px] min-h-[380px] bg-white rounded-lg overflow-hidden flex items-center justify-center">
                  <img src={review.img} alt={review.alt} loading="lazy" className="max-h-full max-w-full object-contain" />
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
