import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Images, Construction, Receipt } from 'lucide-react';

// «Знайомо?» — три болі й відповідь на кожну. Лише підтверджені факти (див. «Факти бізнесу»).
const pains = [
  {
    icon: Images,
    title: 'На Pinterest — ідеально. У вашій кухні — не влазить',
    pain: 'Збережено сотні фото, але як це вмістити у ваші метри з трубою в куті — незрозуміло.',
    answer: 'Підберу рішення під ваші розміри й стиль: з улюблених фото візьмемо те, що справді працюватиме у вашому приміщенні.',
  },
  {
    icon: Construction,
    title: 'Будівельні «сюрпризи»',
    pain: 'Криві стіни, труби, розетка за духовкою — і кухня вже стає не так, як на картинці.',
    answer: 'Після погодження бюджету — безкоштовний виїзд: заміряю на місці й врахую стіни, комунікації та вашу техніку ще до виготовлення.',
  },
  {
    icon: Receipt,
    title: 'Шок-ціна після підписання',
    pain: 'Назвали одну суму, а потім з’явилися доплати й нові терміни.',
    answer: 'Ціна фіксується в договорі від ФОП — без доплат після підписання. Дата монтажу теж у договорі: 6–8 тижнів.',
  },
];

export default function PainPoints() {
  return (
    <section className="py-16 md:py-24 bg-[#111111] border-t border-white/5" id="pains">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <p className="text-xs uppercase tracking-[0.16em] text-[#FFD60A] mb-3">◆ Знайомо?</p>
        <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-10 md:mb-14 max-w-3xl leading-tight">
          Три речі, які псують нерви під час замовлення кухні
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {pains.map(({ icon: Icon, title, pain, answer }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex flex-col"
            >
              <Icon className="w-8 h-8 text-[#FFD60A] mb-4" />
              <h3 className="text-xl font-serif font-bold text-white mb-3 leading-snug">{title}</h3>
              <p className="text-gray-400 mb-5">{pain}</p>
              <p className="mt-auto text-gray-100 border-t border-white/10 pt-4">
                <span className="text-[#FFD60A] font-medium">Як у мене: </span>{answer}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/estimate" className="inline-block bg-[#FFD60A] hover:bg-[#E6C000] text-[#1A1A1A] font-medium py-4 px-8 rounded-md transition-colors">
            Розрахувати вартість моєї кухні
          </Link>
        </div>
      </div>
    </section>
  );
}
