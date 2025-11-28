import React, { useState } from 'react';
import { Leaf, Award, WheatOff, Check, Plus } from 'lucide-react';
import { MenuItem } from '../../types';
import { useCart } from '../../context/CartContext';
import { getCategoryImage } from '../../utils/helpers';

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, index }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  // If description mentions multiple items with slash prices, we simplistically take the first
  const displayPrice = item.price;
  const imageSrc = getCategoryImage(item.category, index);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent any parent clicks
    
    setIsAdding(true);
    addToCart(item, 1);
    
    // Reset after visual feedback
    setTimeout(() => {
      setIsAdding(false);
    }, 1500);
  };

  return (
    <div className={`bg-neutral-900 border border-neutral-800 rounded-xl hover:border-jalwa-gold/30 transition-all flex flex-col group h-full relative ${isAdding ? 'z-20 border-jalwa-gold/30' : 'hover:z-10'}`}>
      {/* Image Area - Moved overflow hidden here to allow tooltip to escape card bounds */}
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img 
          src={imageSrc} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-3 right-3 flex gap-1">
          {item.isVegetarian && <div className="bg-green-900/80 p-1.5 rounded-full backdrop-blur-sm" title="Vegetarian"><Leaf size={14} className="text-green-400" /></div>}
          {item.isGlutenFree && <div className="bg-amber-900/80 p-1.5 rounded-full backdrop-blur-sm" title="Gluten Free"><WheatOff size={14} className="text-amber-400" /></div>}
          {item.isChefSpecial && <div className="bg-jalwa-gold/80 p-1.5 rounded-full backdrop-blur-sm" title="Chef Special"><Award size={14} className="text-black" /></div>}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif font-bold text-lg text-white leading-tight">{item.name}</h3>
          <span className="font-medium text-jalwa-gold whitespace-nowrap ml-3">{displayPrice}</span>
        </div>
        
        <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-2">{item.description}</p>

        {/* Action Row */}
        <div className="mt-auto relative">
           {/* Confirmation Tooltip */}
           <div 
             className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-jalwa-gold text-black text-xs font-bold rounded shadow-lg whitespace-nowrap flex items-center gap-1 transition-all duration-300 transform z-50 ${
               isAdding ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
             }`}
           >
              <Check size={14} strokeWidth={3} /> Added to cart
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-jalwa-gold rotate-45"></div>
           </div>

           <button 
             onClick={handleQuickAdd}
             disabled={isAdding}
             className={`w-full py-2.5 px-4 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
               isAdding 
                 ? 'bg-neutral-800 text-jalwa-gold border border-jalwa-gold' 
                 : 'bg-jalwa-gold text-black hover:bg-white hover:scale-[1.02]'
             }`}
           >
             {isAdding ? (
               <>
                 <Check size={18} /> Added
               </>
             ) : (
               <>
                 <Plus size={18} /> Quick Add
               </>
             )}
           </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;