import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Send, MessageCircle } from 'lucide-react';
import { contacts } from '../data/contacts';
import { track } from '../lib/pixel';

const contact = (channel) => () => track('Contact', { content_name: channel });

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#1A1A1A]/85 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="font-serif text-xl md:text-2xl text-white tracking-wide">
          Lux <span className="text-[#D4AF37]">Kitchen</span>
        </Link>

        <nav className="flex items-center gap-3 md:gap-6">
          <Link to="/portfolio" className="hidden md:inline text-sm text-gray-300 hover:text-[#D4AF37] transition-colors">
            Портфоліо
          </Link>
          <a
            href={contacts.phoneHref}
            onClick={contact('phone')}
            className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors text-sm md:text-base font-medium whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            {contacts.phoneDisplay}
          </a>
          <a href={contacts.viberHref} onClick={contact('viber')} aria-label="Написати у Viber"
            className="hidden md:flex w-9 h-9 items-center justify-center rounded-full border border-white/20 text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
            <MessageCircle className="w-4 h-4" />
          </a>
          <a href={contacts.telegramHref} onClick={contact('telegram')} target="_blank" rel="noopener noreferrer" aria-label="Написати в Telegram"
            className="hidden md:flex w-9 h-9 items-center justify-center rounded-full border border-white/20 text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
            <Send className="w-4 h-4" />
          </a>
          <Link to="/estimate" className="hidden md:inline-block bg-[#D4AF37] hover:bg-[#c19b28] text-[#1A1A1A] text-sm font-medium py-2 px-5 rounded-md transition-colors">
            Прорахунок
          </Link>
        </nav>
      </div>
    </header>
  );
}
