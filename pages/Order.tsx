
import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import { MENU_ITEMS, MENU_CATEGORIES } from '../constants';
import MenuItemCard from '../components/Order/MenuItemCard';
import CartSidebar from '../components/Order/CartSidebar';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

const Order: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { toggleCart, items, total } = useCart();

  const categories = MENU_CATEGORIES.filter(c => c !== 'All'); // 'All' handled separately or visually

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  // Scroll to category if we implement scrollspy later, for now just filtering
  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    window.scrollTo({ top: 400, behavior: 'smooth' }); // approximate offset
  };

  return (
    <>
      <div className="bg-neutral-900 pt-32 pb-12 text-center px-6 border-b border-neutral-800">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Order Online</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Enjoy the finest modern Indian cuisine in the comfort of your home. 
          Pickup and delivery available.
        </p>
      </div>

      <Section className="min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 relative">
            
            {/* Main Content */}
            <div className="flex-grow">
              
              {/* Category Nav - Sticky on Mobile */}
              <div className="sticky top-20 z-30 bg-jalwa-black/95 backdrop-blur-md py-4 mb-8 -mx-4 px-4 md:mx-0 md:px-0 border-b md:border-b-0 border-neutral-800 overflow-x-auto">
                <div className="flex md:flex-wrap gap-3 min-w-max md:min-w-0 pb-2 md:pb-0">
                  <button
                    onClick={() => setActiveCategory('All')}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      activeCategory === 'All'
                        ? 'bg-jalwa-gold text-black'
                        : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                    }`}
                  >
                    All Items
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryClick(cat)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                        activeCategory === cat
                          ? 'bg-jalwa-gold text-black'
                          : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Menu Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 pb-24 lg:pb-0">
                {filteredItems.map((item, idx) => (
                  <MenuItemCard key={item.id} item={item} index={idx} />
                ))}
              </div>
              
              {filteredItems.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                  No items found in this category.
                </div>
              )}
            </div>

            {/* Desktop Sidebar */}
            <CartSidebar />
          </div>
        </div>
      </Section>

      {/* Mobile Cart Floating Button */}
      {items.length > 0 && (
        <div className="fixed bottom-6 left-6 right-6 lg:hidden z-40">
          <button 
            onClick={toggleCart}
            className="w-full bg-jalwa-gold text-black font-bold py-3 px-6 rounded-xl shadow-2xl flex justify-between items-center animate-fade-in-up"
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

      {/* Mobile Cart Drawer */}
      <CartSidebar isMobileDrawer />
    </>
  );
};

export default Order;
