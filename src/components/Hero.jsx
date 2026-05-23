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
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 pb-24 md:pt-0 md:pb-0">
      {/* Background with overlay */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/luxury_kitchen_hero.png')" }}
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
          Преміальні меблі на замовлення
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 tracking-tight font-serif">
          Lux Kitchen
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl md:text-2xl lg:text-3xl text-[#D4AF37] font-serif font-semibold mb-6 max-w-5xl leading-relaxed">
          Європейська якість матеріалів, австрійська фурнітура, німецька точність, українська майстерність.
        </motion.p>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl font-sans tracking-wide font-light">
          Кухня на все життя. Без компромісів.
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
        <motion.div variants={itemVariants} className="mt-8 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl border-t border-white/10 pt-8">
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
