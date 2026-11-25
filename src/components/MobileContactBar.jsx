import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Send, MessageCircle } from 'lucide-react';
import { contacts } from '../data/contacts';
import { track } from '../lib/pixel';

const contact = (channel) => () => track('Contact', { content_name: channel });

const iconBtn = 'flex flex-col items-center justify-center gap-0.5 text-gray-300 active:text-[#D4AF37] text-[11px] min-w-[56px] h-full';

// Липка панель зв'язку внизу екрана — тільки на телефоні
export default function MobileContactBar() {
  const { pathname } = useLocation();
  const onEstimate = pathname === '/estimate';

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#111111]/95 backdrop-blur-md border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
      <div className="h-16 px-2 flex items-center gap-1">
        <a href={contacts.phoneHref} onClick={contact('phone')} className={iconBtn}>
          <Phone className="w-5 h-5" />Дзвінок
        </a>
        <a href={contacts.viberHref} onClick={contact('viber')} className={iconBtn}>
          <MessageCircle className="w-5 h-5" />Viber
        </a>
        <a href={contacts.telegramHref} onClick={contact('telegram')} target="_blank" rel="noopener noreferrer" className={iconBtn}>
          <Send className="w-5 h-5" />Telegram
        </a>
        {!onEstimate && (
          <Link to="/estimate" className="flex-1 ml-1 h-11 flex items-center justify-center rounded-md bg-[#D4AF37] text-[#1A1A1A] font-medium text-sm">
            Прорахунок
          </Link>
        )}
      </div>
    </div>
  );
}
