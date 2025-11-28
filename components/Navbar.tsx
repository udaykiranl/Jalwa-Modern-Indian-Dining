
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu as MenuIcon, X, ShoppingBag } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { items, toggleCart } = useCart();

  const cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled || isOpen
            ? 'bg-jalwa-black/95 backdrop-blur-md border-jalwa-charcoal py-3'
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="z-50 group shrink-0">
            <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wider text-jalwa-gold group-hover:text-white transition-colors">
              JALWA
              <span className="block text-[10px] font-sans tracking-[0.3em] text-white uppercase mt-1 group-hover:text-jalwa-gold transition-colors">
                Modern Indian
              </span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-widest transition-colors hover:text-jalwa-gold ${
                  location.pathname === link.path ? 'text-jalwa-gold' : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Order Button / Cart Indicator */}
            <Link
               to="/order"
               className="flex items-center gap-2 px-5 py-2 bg-jalwa-gold text-black font-semibold rounded-full hover:bg-white transition-colors text-sm relative"
            >
              <ShoppingBag size={16} />
              <span>Order Online</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-jalwa-black">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Toggle & Mini Cart */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <Link to="/order" className="relative text-jalwa-gold">
              <ShoppingBag size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>

            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/70 z-30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Nav Drawer - 70% width */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] sm:w-[320px] bg-jalwa-black z-40 transition-transform duration-300 ease-in-out border-l border-neutral-800 shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-start pt-32 pb-10 px-6 overflow-y-auto">
          <div className="flex flex-col space-y-4 text-center w-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-xl font-serif font-light text-white hover:text-jalwa-gold transition-colors block"
              >
                {link.label}
              </Link>
            ))}
            <Link
               to="/order"
               onClick={() => setIsOpen(false)}
               className="mt-6 px-6 py-2 bg-jalwa-gold text-black font-bold rounded-full text-base block w-full shadow-lg shadow-jalwa-gold/20"
            >
              Order Online
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
