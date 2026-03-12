import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: "Сергій",
    role: "Засновник",
    bio: "За 12 років особисто проконтролював запуск 700+ проєктів. Впровадив систему «подвійного контролю», де кожен виріб перевіряється технологом перед відвантаженням.",
    image: "/media__1773314466275.jpg"
  },
  {
    name: "Олена",
    role: "Головний дизайнер",
    bio: "Автор 300+ преміум-інтер’єрів. Її креслення настільки детальні, що під час монтажу не виникає жодного «підпилювання» чи коректив на місці.",
    image: "/team_elena_1773314509827.png"
  },
  {
    name: "Сергій",
    role: "Головний технолог",
    bio: "Експерт із фурнітури Blum та Hettich. Розробляє конструктивні рішення, які дозволяють важким фасадам працювати плавно протягом 15 років.",
    image: "/team_sergey2_1773314527562.png"
  },
  {
    name: "Іван",
    role: "Майстер монтажу",
    bio: "Має досвід роботи зі шпоном та каменем понад 10 років. Збирає складні об’єкти за 8 годин, залишаючи після себе ідеально чисте приміщення.",
    image: "/team_ivan_1773314544606.png"
  }
];

export default function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-[#1A1A1A] relative" id="team">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 md:px-6"
      >
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">
            Команда, яка несе <span className="text-[#D4AF37]">особисту відповідальність</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Ваші меблі створюють не випадкові найманці, а експерти з багаторічним досвідом та ідеальним рейтингом.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div variants={itemVariants} key={idx} className="group relative overflow-hidden rounded-xl bg-[#111111] border border-white/5 hover:border-[#D4AF37]/50 transition-colors duration-500">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale-0 opacity-100 scale-105 md:grayscale md:opacity-70 md:scale-100 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent flex flex-col justify-end p-6">
                <div className="relative z-10 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-1 font-serif">{member.name}</h3>
                  <p className="text-[#D4AF37] font-medium mb-4 text-sm uppercase tracking-wider">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-100 h-auto md:opacity-0 md:h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 delay-100 pb-4">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
