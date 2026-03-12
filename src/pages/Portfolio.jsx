import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Сучасна кухня в темних тонах',
      category: 'Кухні',
      beforeStr: '/kitchen_before_1773313191683.png',
      afterStr: '/kitchen_after_1773313216737.png'
    },
    {
      id: 2,
      title: 'Мінімалістична гардеробна',
      category: 'Гардеробні',
      beforeStr: '/wardrobe_before_1773313229910.png',
      afterStr: '/wardrobe_after_1773313249031.png'
    },
    {
      id: 3,
      title: 'Преміальна вітальня',
      category: 'Вітальні',
      beforeStr: '/living_before_1773313264620.png',
      afterStr: '/living_after_1773313288536.png'
    },
    {
      id: 4,
      title: 'Затишна спальня',
      category: 'Спальні',
      beforeStr: '/bedroom_before_1773313304777.png',
      afterStr: '/bedroom_after_1773313324184.png'
    },
    {
      id: 5,
      title: 'Функціональна ванна кімната',
      category: 'Ванні кімнати',
      beforeStr: '/bathroom_before_1773313339087.png',
      afterStr: '/bathroom_after_1773313361376.png'
    },
    {
      id: 6,
      title: 'Кабінет керівника',
      category: 'Комерційні меблі',
      beforeStr: '/commercial_before_1773313378075.png',
      afterStr: '/commercial_after_1773313396641.png'
    }
  ];

  const categories = ['Всі роботи', ...new Set(projects.map(p => p.category))];
  const [activeCategory, setActiveCategory] = useState('Всі роботи');

  const filteredProjects = activeCategory === 'Всі роботи' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link to="/" className="inline-flex text-gray-400 hover:text-[#D4AF37] transition-colors items-center gap-2 group mb-8">
             <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
             <span>Повернутися на головну</span>
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Наші <span className="text-[#D4AF37] italic">роботи</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg mb-4">
            Перегляньте приклади реалізованих проєктів <span className="text-white font-medium">до та після</span> встановлення меблів. Потягніть бігунок на фото, щоб порівняти результат.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category 
                  ? 'bg-[#D4AF37] border-[#D4AF37] text-[#1A1A1A] shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
                  : 'bg-transparent border-white/20 text-gray-300 hover:border-white/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                key={project.id} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 shadow-xl"
              >
                <div className="relative w-full h-[300px] bg-black">
                  <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={project.beforeStr} alt="До" style={{ objectFit: 'cover' }} />}
                    itemTwo={<ReactCompareSliderImage src={project.afterStr} alt="Після" style={{ objectFit: 'cover' }} />}
                    className="w-full h-full"
                    boundsPadding={0}
                  />
                  <div className="absolute top-4 left-4 pointer-events-none z-10 px-3 py-1 bg-black/60 backdrop-blur-md rounded backdrop-filter text-white/90 text-xs font-semibold uppercase tracking-wider">
                    До
                  </div>
                  <div className="absolute top-4 right-4 pointer-events-none z-10 px-3 py-1 bg-[#D4AF37]/90 backdrop-blur-md rounded backdrop-filter text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider">
                    Після
                  </div>
                </div>
                <div className="p-6 relative z-10 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A] to-transparent">
                  <span className="text-[#D4AF37] text-xs font-medium tracking-wider uppercase mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-serif text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
