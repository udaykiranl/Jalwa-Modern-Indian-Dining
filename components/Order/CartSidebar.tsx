import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../Button';

interface CartSidebarProps {
  isMobileDrawer?: boolean;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isMobileDrawer = false }) => {
  const { items, subtotal, updateQuantity, removeFromCart, toggleCart, isCartOpen } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    toggleCart();
    navigate('/checkout');
  };

  // Content rendering logic
  const renderContent = () => (
    <div className="flex flex-col h-full bg-neutral-900 border-l border-neutral-800">
      {/* Header */}
      <div className="p-5 border-b border-neutral-800 flex justify-between items-center bg-neutral-900/95 backdrop-blur-sm sticky top-0 z-10">
        <h2 className="font-serif font-bold text-xl text-white flex items-center gap-2">
          <ShoppingBag className="text-jalwa-gold" size={20} /> Your Order
        </h2>
        {isMobileDrawer && (
          <button onClick={toggleCart} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        )}
      </div>

      {/* Items */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 custom-scrollbar">
        {items.length === 0 ? (
          <div className="text-center text-gray-500 py-10 flex flex-col items-center">
            <ShoppingBag size={48} className="mb-4 opacity-20" />
            <p>Your cart is empty.</p>
            <p className="text-sm">Add some delicious items from the menu!</p>
          </div>
        ) : (
          items.map(item => (
            <div key={item.cartId} className="flex gap-4">
              {/* Qty Controls */}
              <div className="flex flex-col items-center justify-start bg-neutral-800 rounded-lg h-min">
                <button 
                  onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                  className="p-1 text-gray-400 hover:text-green-400"
                >
                  <Plus size={14} />
                </button>
                <span className="text-xs font-bold text-white py-1">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                  className="p-1 text-gray-400 hover:text-red-400"
                >
                  <Minus size={14} />
                </button>
              </div>

              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-white text-sm pr-2">{item.name}</h4>
                  <span className="text-jalwa-gold font-medium text-sm">
                    ${(item.parsedPrice * item.quantity).toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-2 truncate max-w-[150px]">{item.description}</p>
                <button 
                  onClick={() => removeFromCart(item.cartId)}
                  className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1"
                >
                  <Trash2 size={12} /> Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {items.length > 0 && (
        <div className="p-5 border-t border-neutral-800 bg-neutral-900">
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Estimated Tax</span>
              <span>${(subtotal * 0.06625).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-neutral-800">
              <span>Total</span>
              <span>${(subtotal * 1.06625).toFixed(2)}</span>
            </div>
          </div>
          <Button fullWidth onClick={handleCheckout}>
            Proceed to Checkout
          </Button>
        </div>
      )}
    </div>
  );

  if (isMobileDrawer) {
    return (
      <>
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-300 ${
            isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleCart}
        />
        {/* Drawer */}
        <div 
          className={`fixed top-0 right-0 h-full w-full max-w-sm bg-neutral-900 z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {renderContent()}
        </div>
      </>
    );
  }

  // Desktop Sticky Sidebar
  return (
    <div className="hidden lg:block w-96 shrink-0 sticky top-24 h-[calc(100vh-8rem)] rounded-2xl overflow-hidden border border-neutral-800 shadow-xl">
      {renderContent()}
    </div>
  );
};

export default CartSidebar;
