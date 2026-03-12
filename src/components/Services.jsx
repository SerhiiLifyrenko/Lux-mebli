import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Maximize2, ShieldCheck, Droplets, MonitorSpeaker } from 'lucide-react';

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

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div 
              variants={itemVariants}
              key={idx} 
              className="bg-[#1A1A1A] rounded-xl p-8 border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-full inline-block group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-serif">{service.title}</h3>
              
              <div className="mb-4">
                <p className="text-sm font-semibold text-red-400 mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Біль
                </p>
                <p className="text-gray-400 text-sm">{service.pain}</p>
              </div>
              
              <div className="relative pl-4 border-l-2 border-[#D4AF37]">
                <p className="text-sm font-semibold text-[#D4AF37] mb-1">Результат</p>
                <p className="text-gray-300 text-sm leading-relaxed">{service.result}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
