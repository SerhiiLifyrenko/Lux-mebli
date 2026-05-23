import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    author: "Олексій В.",
    location: "ЖК 'Варшавський'",
    text: "Головне — ціна в гривні не змінилася, хоча курс стрибав. Змонтували за день, сміття вивезли. Рекомендую за чесність.",
    rating: 5,
    tag: "Чесна ціна",
    images: ["/kitchen_after_1773313216737.png", "/living_after_1773313288536.png", "/bedroom_after_1773313324184.png"]
  },
  {
    author: "Марина Сокол",
    location: "Київ",
    text: "Дуже переживала через запах, бо вдома немовля. Меблі привезли — жодного аромату ДСП. Все ідеально підігнано під криву стіну, щілин немає взагалі.",
    rating: 5,
    tag: "Екологічність",
    images: ["/wardrobe_after_1773313249031.png"]
  },
  {
    author: "Дмитро",
    location: "Ірпінь",
    text: "Зробили гардеробну за 3 тижні. Дизайнер Олена переконала додати висувні ящики замість полиць — тепер реально все влізло. Якість фурнітури на висоті.",
    rating: 5,
    tag: "Ергономіка",
    images: ["/wardrobe_after_1773313249031.png", "/bedroom_after_1773313324184.png"]
  },
  {
    author: "Анна П.",
    location: "Буча",
    text: "Була затримка монтажу на 2 дні через логістику. Компанія сама виплатила пеню за договором без жодних нагадувань з мого боку. Це і є преміальний сервіс.",
    rating: 5,
    tag: "Відповідальність",
    images: ["/living_after_1773313288536.png", "/bathroom_after_1773313361376.png"]
  },
  {
    author: "Віктор Іванович",
    location: "ЖК 'Новопечерські Липки'",
    text: "Вже третій об'єкт роблю з ними. Технолог Сергій — майстер. Робить вузли, про які інші навіть не чули. Меблі стоять як моноліт, нічого не скрипить.",
    rating: 5,
    tag: "Експертність",
    images: ["/commercial_after_1773313396641.png", "/bathroom_after_1773313361376.png"]
  }
];

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <section className="py-24 bg-[#111111] relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">
            Відгуки, які <span className="text-[#D4AF37]">спростовують страхи</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Наші клієнти теж сумнівалися, поки не переконалися в якості на власному досвіді.
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
            <div key={idx} className="min-w-[320px] md:min-w-[400px] flex-shrink-0 snap-center bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Rating and Tag Header */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex gap-0.5 text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-medium uppercase tracking-wider">
                  <CheckCircle className="w-3 h-3" />
                  {review.tag}
                </span>
              </div>

              {/* Installed Furniture Images (Proof) */}
              {review.images && review.images.length > 0 && (
                <div className="flex gap-2 mb-4 overflow-hidden rounded-md">
                  {review.images.map((img, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedImage(img)}
                      className="relative flex-1 aspect-[4/3] overflow-hidden cursor-pointer group/img bg-gray-100 border border-gray-100 hover:border-[#D4AF37] rounded transition-all duration-300"
                    >
                      <img 
                        src={img} 
                        alt="Змонтовані меблі" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-[10px] text-white bg-black/60 px-1.5 py-0.5 rounded">🔍</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <p className="text-gray-700 mb-6 italic leading-relaxed text-sm md:text-base">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{review.author}</h4>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
                <div className="ml-auto flex items-center gap-1 text-gray-400">
                   <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                   </svg>
                   <span className="text-xs font-medium">Google Maps</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Premium Lightbox Modal for Gallery */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-pointer animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-lg bg-black border border-white/10 p-1 cursor-default" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Встановлені меблі зблизька" 
              className="max-w-full max-h-[80vh] object-contain rounded"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/75 hover:bg-black text-white hover:text-[#D4AF37] w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold border border-white/10 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
