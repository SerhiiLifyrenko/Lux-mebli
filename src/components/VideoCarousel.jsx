import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Рілси з Instagram @lux_kitchen__ (від Сергія 26.11.2026). Назви — лише те, що видно на відео;
// матеріали й фурнітуру не дописувати без підтвердження Сергія.
const videos = [
  { id: 1, src: "/1.MP4", poster: "/posters/1.jpg", title: "Світла кухня з островом" },
  { id: 2, src: "/2.MP4", poster: "/posters/2.jpg", title: "Біла кухня з підсвіткою" },
  { id: 3, src: "/3.MP4", poster: "/posters/3.jpg", title: "Кухня-вітальня з вітриною" },
  { id: 4, src: "/4.MP4", poster: "/posters/4.jpg", title: "Сіра кухня з островом" },
  { id: 5, src: "/5.MP4", poster: "/posters/5.jpg", title: "Кухня в сірих тонах — огляд зсередини" },
  { id: 6, src: "/6.MP4", poster: "/posters/6.jpg", title: "Світла кухня з колоною під техніку" },
];

export default function VideoCarousel() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
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
    const i = Math.max(0, Math.min(videos.length - 1, idx));
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-[#111111] relative border-t border-white/5 overflow-hidden" id="video-reviews">
      {/* Decorative radial gradients for luxury feel */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FFD60A]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#FFD60A]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-[#FFD60A]/10 border border-[#FFD60A]/20 text-[#FFD60A] text-xs font-semibold uppercase tracking-wider mb-4">
            Живі огляди
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight mb-4">
            Дивіться наші <span className="text-[#FFD60A]">відео готових проектів</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Подивіться, як меблі від Lux Kitchen виглядають у реальних інтер’єрах клієнтів. Ніяких рендерів — тільки живі кадри та бездоганна робота вузлів.
          </p>
        </div>

        {/* Слайдер: одне відео на екран, свайп + стрілки й крапки знизу (як у відгуках) */}
        <div className="relative max-w-[400px] mx-auto">
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((video, idx) => (
              <div key={video.id} className="w-full shrink-0 snap-center px-1">
                <div
                  className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer group/card"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => setActiveVideo(video)}
                >
                  <video
                    src={hoveredIdx === idx ? video.src : undefined}
                    poster={video.poster}
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="absolute inset-0 w-full h-full object-cover"
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

                  {/* Затемнення лише внизу — щоб читався підпис */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none"></div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-[#FFD60A] text-[#1A1A1A] flex items-center justify-center shadow-[0_0_25px_rgba(255,214,10,0.5)] transition-transform duration-300 group-hover/card:scale-110">
                      <Play className="w-7 h-7 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#FFD60A] text-[#1A1A1A] text-[11px] font-bold py-1 px-3 rounded-full uppercase tracking-wider shadow">
                      Проект #{video.id}
                    </span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex flex-col justify-end pointer-events-none">
                    <h3 className="text-xl font-bold text-white mb-1.5 font-serif leading-tight drop-shadow">
                      {video.title}
                    </h3>
                    {video.desc && (
                      <p className="text-gray-100 text-sm leading-snug drop-shadow">
                        {video.desc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button type="button" onClick={() => go(active - 1)} disabled={active === 0} aria-label="Попереднє відео"
              className="w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center disabled:opacity-30 hover:border-[#FFD60A] hover:text-[#FFD60A] transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {videos.map((v, idx) => (
                <button key={v.id} type="button" onClick={() => go(idx)} aria-label={`Відео ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${idx === active ? 'w-6 bg-[#FFD60A]' : 'w-2 bg-white/30'}`} />
              ))}
            </div>
            <button type="button" onClick={() => go(active + 1)} disabled={active === videos.length - 1} aria-label="Наступне відео"
              className="w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center disabled:opacity-30 hover:border-[#FFD60A] hover:text-[#FFD60A] transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
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
              className="relative aspect-[9/16] w-full max-w-[420px] rounded-3xl overflow-hidden bg-black border border-white/10 shadow-[0_20px_50px_rgba(255,214,10,0.15)] flex flex-col p-1"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Fullscreen HD Video Player */}
              <video 
                src={activeVideo.src} 
                poster={activeVideo.poster}
                autoPlay 
                controls 
                playsInline 
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Float Close Button */}
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 bg-black/75 hover:bg-black text-white hover:text-[#FFD60A] w-10 h-10 rounded-full flex items-center justify-center text-lg border border-white/10 transition-colors shadow cursor-pointer z-50"
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
