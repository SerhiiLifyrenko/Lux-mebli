import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Estimate from './pages/Estimate';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import MobileContactBar from './components/MobileContactBar';
import { Phone, Send, MessageCircle, Instagram, MapPin } from 'lucide-react';
import { contacts } from './data/contacts';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1A1A1A] text-white flex flex-col pb-16 md:pb-0">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estimate" element={<Estimate />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        {/* Footer */}
        <footer className="footer bg-black border-t border-white/10 py-10 mt-auto">
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center text-gray-400">
              <h2 className="text-2xl font-serif text-white mb-6">Lux Kitchen на замовлення</h2>
              <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-8 text-sm mb-6">
                <a href={contacts.phoneHref} className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors text-base font-medium">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />{contacts.phoneDisplay}
                </a>
                <a href={contacts.viberHref} className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                  <MessageCircle className="w-4 h-4" />Viber
                </a>
                <a href={contacts.telegramHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                  <Send className="w-4 h-4" />Telegram
                </a>
                <a href={contacts.instagramHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                  <Instagram className="w-4 h-4" />{contacts.instagramHandle}
                </a>
              </div>
              <p className="flex items-center gap-2 text-sm mb-2"><MapPin className="w-4 h-4" />{contacts.area}</p>
              <p className="text-xs text-gray-500">© 2026 Lux Kitchen</p>
          </div>
        </footer>
        <MobileContactBar />
      </div>
    </Router>
  );
}

export default App;
