
import React, { useState } from 'react';
import Section from '../components/Section';
import { MENU_ITEMS, MENU_CATEGORIES } from '../constants';
import MenuItemCard from '../components/Order/MenuItemCard';
import CartSidebar from '../components/Order/CartSidebar';
import { useCart } from '../context/CartContext';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { toggleCart, items, total } = useCart();

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <>
      <div className="bg-neutral-900 pt-32 pb-16 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Menu</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore our diverse menu. You can add items directly to your cart from here.
        </p>
      </div>

      <Section>
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="sticky top-20 z-30 bg-jalwa-black/95 backdrop-blur-md py-4 mb-8 -mx-6 px-6 md:mx-0 md:px-0 border-b md:border-b-0 border-neutral-800 overflow-x-auto">
            <div className="flex md:justify-center gap-3 min-w-max md:min-w-0">
              {MENU_CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    // Optional: scroll slightly to ensure content is visible
                    // window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all whitespace-nowrap ${
                    activeCategory === category 
                      ? 'bg-jalwa-gold text-black shadow-lg shadow-jalwa-gold/20' 
                      : 'bg-neutral-800 text-gray-400 hover:bg-neutral-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => (
              <MenuItemCard key={item.id} item={item} index={idx} />
            ))}
          </div>
          
          {filteredItems.length === 0 && (
             <div className="text-center text-gray-500 py-12">No items found in this category.</div>
          )}
        </div>
      </Section>

      {/* Floating Cart Button (Visible when items in cart) */}
      {items.length > 0 && (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:w-auto z-40">
           <button 
            onClick={toggleCart}
            className="w-full md:w-80 bg-jalwa-gold text-black font-bold py-3 px-6 rounded-xl shadow-2xl flex justify-between items-center animate-fade-in-up hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-3">
              <div className="bg-black text-jalwa-gold w-8 h-8 rounded-full flex items-center justify-center text-sm">
                {items.reduce((acc, i) => acc + i.quantity, 0)}
              </div>
              <span>View Cart</span>
            </div>
            <span>${total.toFixed(2)}</span>
          </button>
        </div>
      )}

      {/* Cart Drawer - Using isMobileDrawer={true} to make it an overlay drawer on all screens for this page */}
      <CartSidebar isMobileDrawer={true} />
    </>
  );
};

export default Menu;
