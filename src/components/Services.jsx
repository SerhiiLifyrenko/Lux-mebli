import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Maximize2, ShieldCheck, Droplets, MonitorSpeaker, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: <Ruler className="w-8 h-8 text-[#D4AF37]" />,
    title: "Кухні для тих, хто цінує точність",
    pain: "Боїтеся, що техніка не влізе або залишаться щілини?",
    result: "Інтегруємо прилади з точністю до 1 мм. Враховуємо теплові зазори, щоб ваші фасади не розсохлися від духовки через рік."
  },
  {
    icon: <Maximize2 className="w-8 h-8 text-[#D4AF37]" />,
    title: "Гардеробні з розумним зонуванням",
    pain: "Речі не вміщаються, а полиці незручні?",
    result: "Проєктуємо систему зберігання, що збільшує корисний об’єм на 40%. Кожна сукня та пара взуття має своє місце з урахуванням вашого зросту."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />,
    title: "Дитячі меблі без ризиків",
    pain: "Хвилюєтеся за екологічність та гострі кути?",
    result: "Використовуємо виключно сертифікований МДФ та фурнітуру з дотягувачами, що виключають травмування пальців дитини."
  },
  {
    icon: <Droplets className="w-8 h-8 text-[#D4AF37]" />,
    title: "Меблі для ванних (Waterproof)",
    pain: "Боїтеся, що меблі розбухнуть від вологи через пів року?",
    result: "Застосовуємо PUR-поклейку кромки, що створює герметичний шов. Меблі витримують прямий контакт з водою та 90% вологість."
  },
  {
    icon: <MonitorSpeaker className="w-8 h-8 text-[#D4AF37]" />,
    title: "ТВ-зони та вітальні як на рендерах",
    pain: "Картинка дизайнера не збігається з реальним виглядом меблів?",
    result: "Ви бачите зразки матеріалів при вашому освітленні ще до замовлення. Результат на 100% відповідає затвердженій візуалізації."
  }
];

export default function Services() {
  const scrollContainerRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

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
            Меблі, які вирішують <span className="text-[#D4AF37]">ваші задачі</span>, а не створюють нові проблеми
          </h2>
          <p className="text-gray-400 text-lg">
            Кожне рішення проєктується під вашу специфіку приміщення, усуваючи типові страхи перед ремонтом.
          </p>
        </motion.div>

        <div className="relative group/slider">
          {/* Left Floating Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] flex items-center justify-center bg-black/75 hover:bg-black backdrop-blur-sm transition-all duration-300 active:scale-95 cursor-pointer opacity-80 md:opacity-0 md:group-hover/slider:opacity-100 flex shadow-2xl"
            aria-label="Попередні послуги"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Floating Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] flex items-center justify-center bg-black/75 hover:bg-black backdrop-blur-sm transition-all duration-300 active:scale-95 cursor-pointer opacity-80 md:opacity-0 md:group-hover/slider:opacity-100 flex shadow-2xl"
            aria-label="Наступні послуги"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel scroll container */}
          <motion.div 
            ref={scrollContainerRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex overflow-x-auto pb-6 gap-6 snap-x hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, idx) => (
              <motion.div 
                variants={itemVariants}
                key={idx} 
                className="w-[calc(100vw-32px)] sm:w-[350px] md:w-[380px] min-w-[calc(100vw-32px)] sm:min-w-[350px] md:min-w-[380px] flex-shrink-0 snap-center bg-[#1A1A1A] rounded-xl p-8 border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6 p-4 bg-white/5 rounded-full inline-block group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 font-serif">{service.title}</h3>
                  
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-red-400 mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Біль
                    </p>
                    <p className="text-gray-400 text-sm">{service.pain}</p>
                  </div>
                </div>
                
                <div className="relative pl-4 border-l-2 border-[#D4AF37] mt-auto">
                  <p className="text-sm font-semibold text-[#D4AF37] mb-1">Результат</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
