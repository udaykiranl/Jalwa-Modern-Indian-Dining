
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
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
import Terms from './pages/Terms';
import ChatWidget from './components/ChatWidget';
import { CartProvider } from './context/CartContext';

// Component to handle routing side-effects
const AppRouteHandler = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Force redirect to Home on initial app load/refresh
  // This ensures the app always starts at the landing page, ignoring previous URL hashes
  useEffect(() => {
    navigate('/', { replace: true });
  }, []); // Empty dependency array ensures this runs only once when the app mounts

  return null;
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <HashRouter>
        <AppRouteHandler />
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
              <Route path="/terms" element={<Terms />} />
              {/* Catch-all route to redirect to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
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
