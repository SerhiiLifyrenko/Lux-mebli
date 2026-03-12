import React, { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    formData.append("access_key", "86f06ba2-b236-4f25-b5ae-80a495fad8e6"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setFormStatus('success');
        e.target.reset(); // Очищаємо форму після успішної відправки
      } else {
        console.error("Помилка відправки", data);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Мережева помилка:", error);
      setFormStatus('error');
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  };

  return (
    <section className="py-24 bg-[#1A1A1A] relative border-t border-white/5" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-[#111111] rounded-2xl border border-white/5 overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Form Side */}
          <motion.div 
            className="w-full md:w-1/2 p-10 lg:p-14"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold font-serif text-white mb-2">
              Отримати розрахунок
            </h2>
            <p className="text-gray-400 mb-8 max-w-sm">
              Ми підготуємо <span className="text-[#D4AF37]">3 варіанти бюджету</span> за 30 хвилин. Ваша ціна буде зафіксована у договорі.
            </p>
            
            {formStatus === 'success' ? (
              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">Дякуємо!</h3>
                <p className="text-gray-300 mb-6">Ми отримали вашу заявку і незабаром зателефонуємо вам.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="bg-transparent border border-white/20 hover:bg-white/5 text-white py-2 px-6 rounded-md transition-colors w-full"
                >
                  Надіслати ще один запит
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Ім'я</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-white transition-all"
                    placeholder="Ваше ім'я"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-white transition-all"
                    placeholder="+380 (__) ___ __ __"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-2">Що плануєте замовити?</label>
                  <select 
                    id="type" 
                    name="type"
                    className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-gray-300 transition-all appearance-none"
                  >
                    <option value="kitchen">Кухня</option>
                    <option value="wardrobe">Гардеробна</option>
                    <option value="kids">Дитяча кімната</option>
                    <option value="bathroom">Ванна кімната</option>
                    <option value="living">Вітальня / ТВ-зона</option>
                    <option value="multip">Комплексне меблювання</option>
                  </select>
                </div>
                
                {formStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-950/30 p-3 rounded-lg border border-red-500/20">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">Помилка відправки. Перевірте підключення до мережі або ACCESS_KEY.</p>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-[#D4AF37] hover:bg-[#c19b28] text-[#1A1A1A] font-bold py-4 px-6 rounded-md transition-all duration-300 mt-4 shadow-[0_0_15px_rgba(212,175,55,0.2)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center h-[56px]"
                >
                  {formStatus === 'submitting' ? (
                     <div className="w-6 h-6 border-2 border-[#1A1A1A] border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                     'Отримати 3 варіанти розрахунку'
                  )}
                </button>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Відправляючи форму, ви погоджуєтеся з політикою конфіденційності. Жодного спаму.
                </p>
              </form>
            )}
          </motion.div>
          
          {/* Image/Benefits Side */}
          <motion.div 
            className="w-full md:w-1/2 bg-[#1A1A1A] relative hidden md:block border-l border-white/5"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                alt="Кухня на замовлення" 
                className="w-full h-full object-cover opacity-30 mix-blend-overlay"
              />
            </div>
            
            <div className="relative h-full flex flex-col justify-between p-10 lg:p-14">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 font-serif">Що ви отримаєте після заявки:</h3>
                
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-white">Точний розрахунок</h4>
                      <p className="text-sm text-gray-400 mt-1">Три варіанти бюджету: базовий, оптимальний та преміум.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-white">Відповіді технолога</h4>
                      <p className="text-sm text-gray-400 mt-1">Оцінка ваших креслень та рекомендації щодо матеріалів.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-white">Фіксація умов</h4>
                      <p className="text-sm text-gray-400 mt-1">Бронювання поточної ціни та термінів монтажу.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <p className="italic text-gray-300 mb-4 text-sm">
                  «Ми не просто продаємо меблі, ми допомагаємо вам раціонально розподілити бюджет, щоб результат перевершив очікування.»
                </p>
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop" alt="Сергій" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h5 className="font-medium text-white text-sm">Сергій</h5>
                    <p className="text-xs text-[#D4AF37]">Засновник</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
