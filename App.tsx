
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Catering from './pages/Catering';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import PartyTrays from './pages/PartyTrays';
import Order from './pages/Order';
import Checkout from './pages/Checkout';
import ChatWidget from './components/ChatWidget';
import { CartProvider } from './context/CartContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-jalwa-black text-jalwa-cream font-sans overflow-x-hidden selection:bg-jalwa-gold selection:text-black">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/party-trays" element={<PartyTrays />} />
              <Route path="/catering" element={<Catering />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/order" element={<Order />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </HashRouter>
    </CartProvider>
  );
};

export default App;
