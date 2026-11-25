import React from 'react';
import { Link } from 'react-router-dom';
import { Plug, Droplets, Wind } from 'lucide-react';

// «Ремонт ще йде?» — для тих, хто рахує кухню до завершення ремонту.
const points = [
  { icon: Plug, title: 'Розетки й вимикачі', text: 'Під вашу техніку й робочу зону, а не за духовкою чи посудомийкою.' },
  { icon: Droplets, title: 'Вода й каналізація', text: 'Точно під мийку та посудомийку, без переробок шаф.' },
  { icon: Wind, title: 'Витяжка', text: 'Де стоятиме і куди виводити повітря — до того, як закриють стелю.' },
];

export default function RenovationTiming() {
  return (
    <section className="py-16 md:py-24 bg-[#1A1A1A] border-t border-white/5" id="renovation">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <p className="text-xs uppercase tracking-[0.16em] text-[#D4AF37] mb-3">◆ Ремонт ще йде?</p>
        <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-5 leading-tight">
          Плитку ще не поклали? Саме час рахувати кухню
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-3xl">
          Найдорожчі помилки стаються, коли кухню рахують після ремонту: розетка опиняється за духовкою, вивід води — не під мийкою, а витяжку нікуди вивести.
        </p>
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {points.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border border-white/10 rounded-xl p-5 bg-black/30">
              <Icon className="w-7 h-7 text-[#D4AF37] mb-3" />
              <h3 className="text-lg font-serif font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Link to="/estimate" className="text-center bg-[#D4AF37] hover:bg-[#c19b28] text-[#1A1A1A] font-medium py-4 px-8 rounded-md transition-colors">
            Розрахувати кухню, поки йде ремонт
          </Link>
          <p className="text-sm text-gray-400">Порахую вартість і підкажу, що врахувати в ремонті, поки це легко змінити.</p>
        </div>
      </div>
    </section>
  );
}
