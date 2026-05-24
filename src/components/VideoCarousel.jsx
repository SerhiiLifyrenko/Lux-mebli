import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  { id: 1, src: "/1.MP4", title: "Сучасна кухня без ручок", desc: "Інтегрований профіль Gola та кам'яна стільниця" },
  { id: 2, src: "/2.MP4", title: "Кухня з кутовим островом", desc: "Максимально ергономічне планування простору" },
  { id: 3, src: "/3.MP4", title: "Мінімалізм у графітових тонах", desc: "Матові фасади з захистом від відбитків пальців" },
  { id: 4, src: "/4.MP4", title: "Преміум класика з порталом", desc: "Елегантне фрезерування та прихована витяжка" },
  { id: 5, src: "/5.MP4", title: "Кухня-вітальня під стелю", desc: "Приховані шафи для зберігання та розумне підсвічування" },
  { id: 6, src: "/6.MP4", title: "Ергономічна кухня в ЖК", desc: "Фурнітура Blum із дотягувачами та вбудована техніка" },
];

export default function VideoCarousel() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const scrollContainerRef = useRef(null);

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

  return (
    <section className="py-24 bg-[#111111] relative border-t border-white/5 overflow-hidden" id="video-reviews">
      {/* Decorative radial gradients for luxury feel */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative group/slider">
        {/* Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            Живі огляди
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight mb-4">
            Дивіться наші <span className="text-[#D4AF37]">відео готових проектів</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Подивіться, як меблі від Lux Kitchen виглядають у реальних інтер’єрах клієнтів. Ніяких рендерів — тільки живі кадри та бездоганна робота вузлів.
          </p>
        </div>

        {/* Video Slider Container wrapped with floating arrows */}
        <div className="relative">
          {/* Left Floating Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] flex items-center justify-center bg-black/75 hover:bg-black backdrop-blur-sm transition-all duration-300 active:scale-95 cursor-pointer opacity-0 group-hover/slider:opacity-100 hidden md:flex shadow-2xl"
            aria-label="Попередні відео"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Floating Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] flex items-center justify-center bg-black/75 hover:bg-black backdrop-blur-sm transition-all duration-300 active:scale-95 cursor-pointer opacity-0 group-hover/slider:opacity-100 hidden md:flex shadow-2xl"
            aria-label="Наступні відео"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 gap-6 snap-x hide-scrollbar" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          {videos.map((video, idx) => (
            <motion.div 
              key={video.id}
              className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] flex-shrink-0 snap-center group/card cursor-pointer"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => setActiveVideo(video)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Vertical Card Frame mimicking high-end smartphone screen */}
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover/card:border-[#D4AF37]/50 transition-all duration-500">
                {/* Silent Autoplay Video on Hover */}
                <video 
                  src={video.src} 
                  muted 
                  loop 
                  playsInline 
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/card:opacity-90 transition-opacity duration-500"
                  ref={(el) => {
                    if (el) {
                      if (hoveredIdx === idx) {
                        el.play().catch(() => {});
                      } else {
                        el.pause();
                        el.currentTime = 0;
                      }
                    }
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40 mix-blend-multiply"></div>

                {/* Animated Pulsing Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-[#D4AF37] text-[#1A1A1A] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.4)] transform scale-90 group-hover/card:scale-100 group-hover/card:rotate-6 transition-all duration-500">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Floating Tags/Labels */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#D4AF37]/90 text-[#1A1A1A] text-[10px] font-bold py-1 px-2.5 rounded-full uppercase tracking-wider shadow">
                    Проект #{video.id}
                  </span>
                </div>

                {/* Bottom Info Details */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex flex-col justify-end">
                  <h3 className="text-lg font-bold text-white mb-2 font-serif group-hover/card:text-[#D4AF37] transition-colors leading-tight">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-normal opacity-90 line-clamp-2">
                    {video.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

      {/* Premium Fullscreen Lightbox Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            {/* Modal Box */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative aspect-[9/16] w-full max-w-[420px] rounded-3xl overflow-hidden bg-black border border-white/10 shadow-[0_20px_50px_rgba(212,175,55,0.15)] flex flex-col p-1"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Fullscreen HD Video Player */}
              <video 
                src={activeVideo.src} 
                autoPlay 
                controls 
                playsInline 
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Float Close Button */}
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 bg-black/75 hover:bg-black text-white hover:text-[#D4AF37] w-10 h-10 rounded-full flex items-center justify-center text-lg border border-white/10 transition-colors shadow cursor-pointer z-50"
                aria-label="Закрити огляд"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Floating Info Overlay (top-left) */}
              <div className="absolute top-4 left-4 z-40 bg-black/60 backdrop-blur-sm border border-white/5 py-1.5 px-3 rounded-full flex items-center">
                <span className="text-white text-xs font-semibold font-serif">{activeVideo.title}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
