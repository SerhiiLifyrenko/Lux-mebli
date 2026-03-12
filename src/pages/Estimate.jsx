import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Estimate() {
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

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-4xl mb-8 flex items-center">
        <Link to="/" className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
           <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
           <span>Повернутися на головну</span>
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="w-full max-w-4xl bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Отримати розрахунок
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Заповніть форму нижче, і наш дизайнер зв'яжеться з вами протягом 30 хвилин, щоб надати детальний кошторис у трьох варіантах бюджету.
            </p>
          </div>

          {formStatus === 'success' ? (
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               className="bg-green-900/20 border border-green-500/30 rounded-xl p-8 text-center"
             >
               <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle2 className="w-8 h-8 text-green-500" />
               </div>
               <h3 className="text-2xl font-serif text-white mb-2">Дякуємо за заявку!</h3>
               <p className="text-gray-300 mb-6">Ваш запит успішно відправлено. Ми вже почали працювати над вашим проєктом.</p>
               <button 
                  onClick={() => setFormStatus('idle')}
                  className="bg-transparent border border-white/20 hover:bg-white/5 text-white py-2 px-6 rounded-md transition-colors"
               >
                 Надіслати ще один запит
               </button>
             </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Ваше ім'я</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    placeholder="Олександр"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Номер телефону</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    placeholder="+38 (000) 000-00-00"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300 mb-3">Що саме вас цікавить?</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Кухня', 'Шафа-купе', 'Гардеробна', 'Вітальня', 'Спальня', 'Дитяча', 'Ванна кімната', 'Комерційні меблі'].map((item) => (
                    <label key={item} className="cursor-pointer relative">
                      <input type="checkbox" className="peer sr-only" name="interest" value={item} />
                      <div className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-center text-sm text-gray-400 peer-checked:bg-[#D4AF37]/10 peer-checked:border-[#D4AF37] peer-checked:text-[#D4AF37] hover:border-white/30 transition-all select-none">
                        {item}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                 <div className="space-y-2">
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300">Орієнтовний бюджет</label>
                    <select 
                      id="budget" 
                      name="budget"
                      defaultValue=""
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all appearance-none"
                    >
                      <option value="" disabled>Оберіть діапазон</option>
                      <option value="standard">До 50 000 грн</option>
                      <option value="premium">50 000 - 150 000 грн</option>
                      <option value="luxury">Від 150 000 грн</option>
                      <option value="unknown">Потрібна консультація</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300">Коли потрібні меблі?</label>
                    <select 
                      id="timeline" 
                      name="timeline"
                      defaultValue=""
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all appearance-none"
                    >
                      <option value="" disabled>Оберіть терміни</option>
                      <option value="asap">Якнайшвидше</option>
                      <option value="1month">До 1 місяця</option>
                      <option value="2-3months">2-3 місяці</option>
                      <option value="planning">Тільки планую (більше 3 місяців)</option>
                    </select>
                 </div>
              </div>

              <div className="space-y-2 pt-4">
                <label htmlFor="comments" className="block text-sm font-medium text-gray-300">Додаткова інформація</label>
                <textarea 
                  id="comments" 
                  name="comments"
                  rows="3"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                  placeholder="Розкажіть коротко про вашу ідею, розміри або прикріпіть посилання на референси..."
                ></textarea>
              </div>

              {formStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-950/30 p-3 rounded-lg border border-red-500/20">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">Помилка відправки. Перевірте підключення до мережі або ACCESS_KEY.</p>
                </div>
              )}

              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-[#D4AF37] hover:bg-[#c19b28] text-[#1A1A1A] font-medium py-4 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center h-[56px]"
                >
                  {formStatus === 'submitting' ? (
                     <div className="w-6 h-6 border-2 border-[#1A1A1A] border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                     'Отримати індивідуальний розрахунок'
                  )}
                </button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  Натискаючи кнопку, ви погоджуєтесь з політикою конфіденційності
                </p>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
