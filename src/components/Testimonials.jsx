import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle } from 'lucide-react';

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
  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-[#111111] relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">
            Що пишуть <span className="text-[#D4AF37]">наші клієнти</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Справжні повідомлення, які нам надсилають у Direct після встановлення меблів.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex overflow-x-auto pb-8 gap-6 snap-x hide-scrollbar" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((review, idx) => (
            <div key={idx} className="min-w-[320px] md:min-w-[400px] flex-shrink-0 snap-center bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              
              <div className="mb-6 flex gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#D4AF37]/15 text-[#8A6D1F] text-xs font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {review.product}
                </span>
              </div>
              
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                «{review.text}»
              </p>
              
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#B8962E]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Клієнтка Lux Kitchen</h4>
                  <p className="text-xs text-gray-500">Відгук в Instagram Direct</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-2">
          <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white font-medium transition-colors">
            Усі відгуки в нашому Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
