const fs = require('fs');  
const content = import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './pages/Home';  
import Estimate from './pages/Estimate';  
import Portfolio from './pages/Portfolio';  
  
function App() {  
  return (  
    <Router>  
      <div className=" min-h-screen bg-[#1A1A1A] text-white flex "flex-col>  
        <Routes>  
          <Route path=/ element={<Home />}> </Route>  
          <Route path=/estimate element={<Estimate />}> </Route>  
          <Route path=/portfolio element={<Portfolio />}> </Route>  
        </Routes>  
  
        {/* Footer */}  
        <footer className=footer" bg-black border-t border-white/10 py-10 "mt-auto>  
          <div className=container" mx-auto px-4 md:px-6 text-center text-gray-500 flex flex-col "items-center>  
              <h2 className=text-2xl" font-serif text-white "mb-4>Люкс Мебл? на замовлення</h2>  
              <p className=text-sm>c 2026. Вс? права захищен?.</p>  
              <p className=text-xs" "mt-2>Київ, Україна</p>  
          </div>  
        </footer>  
      </div>  
    </Router>  
  );  
}  
  
export default App;;  
fs.writeFileSync('src/App.jsx', content);  
