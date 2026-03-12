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
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-32 pb-16 md:pt-0 md:pb-0">
      {/* Background with overlay */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-sm"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center"
      >
        <motion.div variants={itemVariants} className="inline-block py-1 px-3 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium mb-6 tracking-wide">
          Преміальні меблі на замовлення
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl font-serif">
          Меблі за ціною договору: фіксуємо вартість у гривні до монтажу
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
          Проєкт та детальний кошторис за 30 хвилин. Використовуємо еко-плити класу Е0 та фурнітуру з ресурсом 200 000 циклів відкриття. Ваша ціна не зросте, навіть якщо зміниться курс чи логістика.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link to="/estimate" className="bg-[#D4AF37] hover:bg-[#c19b28] text-[#1A1A1A] font-medium py-4 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)] text-center">
            Отримати розрахунок у 3-х варіантах бюджету
          </Link>
          <Link to="/portfolio" className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium py-4 px-8 rounded-md transition-all duration-300 text-center">
            Переглянути портфоліо
          </Link>
        </motion.div>
        
        {/* Features banner */}
        <motion.div variants={itemVariants} className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl border-t border-white/10 pt-8">
          <div className="flex flex-col items-center text-center group">
            <span className="text-3xl font-bold text-[#D4AF37] mb-2 font-serif group-hover:scale-110 transition-transform">100%</span>
            <span className="text-sm text-gray-400">Фіксована ціна</span>
          </div>
          <div className="flex flex-col items-center text-center group">
            <span className="text-3xl font-bold text-[#D4AF37] mb-2 font-serif group-hover:scale-110 transition-transform">Е0</span>
            <span className="text-sm text-gray-400">Екологічні матеріали</span>
          </div>
          <div className="flex flex-col items-center text-center group">
            <span className="text-3xl font-bold text-[#D4AF37] mb-2 font-serif group-hover:scale-110 transition-transform">200k</span>
            <span className="text-sm text-gray-400">Циклів фурнітури</span>
          </div>
          <div className="flex flex-col items-center text-center group">
            <span className="text-3xl font-bold text-[#D4AF37] mb-2 font-serif group-hover:scale-110 transition-transform">0</span>
            <span className="text-sm text-gray-400">Прихованих платежів</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
