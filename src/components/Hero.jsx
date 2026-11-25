import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-24 md:pb-12">
      {/* Background with overlay */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/luxury_kitchen_hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/90 via-[#1A1A1A]/65 to-[#1A1A1A]/90 backdrop-blur-[1px]"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center"
      >
        <motion.div variants={itemVariants} className="inline-block py-1 px-3 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium mb-6 tracking-wide">
          Тернопіль і область · меблі на замовлення
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight font-serif max-w-5xl leading-tight">
          Кухня під ваш бюджет — <span className="text-[#D4AF37]">з ціною, яка не зростає</span> після підписання
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl font-sans leading-relaxed">
          Порахую вартість вашої кухні й покажу, де можна заощадити, не жертвуючи тим, чим ви користуєтеся щодня. Ціна й дата монтажу — в договорі.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link to="/estimate" className="bg-[#D4AF37] hover:bg-[#c19b28] text-[#1A1A1A] font-medium py-4 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)] text-center">
            Розрахувати вартість моєї кухні
          </Link>
          <Link to="/portfolio" className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium py-4 px-8 rounded-md transition-all duration-300 text-center">
            Подивитися роботи
          </Link>
        </motion.div>
        <motion.p variants={itemVariants} className="mt-4 text-sm text-gray-400">
          2 хвилини · відповідь у месенджер · бонус «Топ-30 помилок при виборі кухні»
        </motion.p>

        {/* Аргументи — лише підтверджені факти (див. «Факти бізнесу») */}
        <motion.div variants={itemVariants} className="mt-10 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl border-t border-white/10 pt-8">
          {[
            ['0 грн', 'доплат після підписання — ціна фіксована в договорі'],
            ['6–8 тижнів', 'від договору до монтажу, дата — в договорі'],
            ['Blum', 'уся фурнітура: ящики, петлі, підйомники'],
            ['ФОП', 'офіційний договір і оплата на рахунок'],
          ].map(([value, label]) => (
            <div key={value} className="flex flex-col items-center text-center">
              <span className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-2 font-serif">{value}</span>
              <span className="text-sm text-gray-400 max-w-[14rem]">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
