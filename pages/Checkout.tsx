import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, ShoppingBag, MapPin, Clock } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const { items, subtotal, tax, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [tipPercent, setTipPercent] = useState(15);
  const [isLoading, setIsLoading] = useState(false);

  // Tip calculation
  const tipAmount = (subtotal * tipPercent) / 100;
  const finalTotal = total + tipAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      clearCart();
      alert('Order Placed Successfully! You will receive a confirmation email.');
      navigate('/');
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-jalwa-black flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-3xl font-serif text-white mb-4">Your cart is empty</h2>
        <p className="text-gray-400 mb-8">Looks like you haven't added any delicious items yet.</p>
        <Button to="/order">Return to Menu</Button>
      </div>
    );
  }

  return (
    <>
      <div className="bg-neutral-900 pt-28 pb-10 border-b border-neutral-800">
        <div className="container mx-auto px-6">
          <button 
            onClick={() => navigate('/order')} 
            className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" /> Back to Menu
          </button>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white">Checkout</h1>
        </div>
      </div>

      <Section>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Order Type Toggle */}
              <div className="bg-neutral-800 p-1 rounded-lg inline-flex w-full md:w-auto">
                <button 
                  onClick={() => setOrderType('pickup')}
                  className={`flex-1 md:flex-none px-8 py-3 rounded-md font-medium transition-all ${orderType === 'pickup' ? 'bg-jalwa-gold text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                >
                  Pickup
                </button>
                <button 
                  onClick={() => setOrderType('delivery')}
                  className={`flex-1 md:flex-none px-8 py-3 rounded-md font-medium transition-all ${orderType === 'delivery' ? 'bg-jalwa-gold text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                >
                  Delivery
                </button>
              </div>

              <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Info */}
                <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="bg-jalwa-gold text-black w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-500">First Name</label>
                      <input type="text" required className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white focus:border-jalwa-gold outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-500">Last Name</label>
                      <input type="text" required className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white focus:border-jalwa-gold outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                      <input type="email" required className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white focus:border-jalwa-gold outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-500">Phone</label>
                      <input type="tel" required className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white focus:border-jalwa-gold outline-none" />
                    </div>
                  </div>
                </div>

                {/* Delivery Info (Conditional) */}
                {orderType === 'delivery' && (
                  <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl animate-fade-in-up">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <span className="bg-jalwa-gold text-black w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                      Delivery Address
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Street Address</label>
                        <input type="text" required className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white focus:border-jalwa-gold outline-none" />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-xs uppercase tracking-widest text-gray-500">City</label>
                           <input type="text" defaultValue="Montclair" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white focus:border-jalwa-gold outline-none" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs uppercase tracking-widest text-gray-500">Zip Code</label>
                           <input type="text" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white focus:border-jalwa-gold outline-none" />
                        </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs uppercase tracking-widest text-gray-500">Delivery Instructions</label>
                         <textarea rows={2} className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white focus:border-jalwa-gold outline-none"></textarea>
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment */}
                <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="bg-jalwa-gold text-black w-6 h-6 rounded-full flex items-center justify-center text-xs">{orderType === 'delivery' ? 3 : 2}</span>
                    Payment Details
                  </h3>
                  <div className="p-4 border border-neutral-700 rounded-lg bg-neutral-800 flex items-center gap-4 mb-4 opacity-70 cursor-not-allowed">
                     <CreditCard className="text-jalwa-gold" />
                     <span className="text-gray-400">Credit Card Payment (Secure Stripe Integration)</span>
                  </div>
                  <div className="space-y-4">
                     <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Card Number</label>
                        <input type="text" placeholder="0000 0000 0000 0000" disabled className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-gray-500 cursor-not-allowed" />
                     </div>
                     <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-xs uppercase tracking-widest text-gray-500">Expiry</label>
                           <input type="text" placeholder="MM/YY" disabled className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-gray-500 cursor-not-allowed" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs uppercase tracking-widest text-gray-500">CVC</label>
                           <input type="text" placeholder="123" disabled className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-gray-500 cursor-not-allowed" />
                        </div>
                     </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">* This is a demo. No actual payment will be processed.</p>
                </div>
              </form>
            </div>

            {/* Right Column: Summary */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sticky top-28 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6 font-serif">Order Summary</h3>
                
                {/* Items List (Condensed) */}
                <div className="max-h-60 overflow-y-auto mb-6 custom-scrollbar pr-2 space-y-3">
                   {items.map(item => (
                     <div key={item.cartId} className="flex justify-between text-sm">
                       <span className="text-gray-300">
                         <span className="text-jalwa-gold font-bold mr-2">{item.quantity}x</span> 
                         {item.name}
                       </span>
                       <span className="text-white">${(item.parsedPrice * item.quantity).toFixed(2)}</span>
                     </div>
                   ))}
                </div>

                {/* Costs */}
                <div className="space-y-3 pt-4 border-t border-neutral-800 mb-6 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax (6.625%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  {/* Tip Selector */}
                  <div className="py-2">
                     <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Tip the Team</span>
                     <div className="grid grid-cols-4 gap-2">
                        {[10, 15, 20, 25].map(pct => (
                           <button 
                             key={pct}
                             type="button"
                             onClick={() => setTipPercent(pct)}
                             className={`py-1 text-xs rounded transition-colors ${tipPercent === pct ? 'bg-jalwa-gold text-black font-bold' : 'bg-neutral-800 text-gray-400 hover:text-white'}`}
                           >
                             {pct}%
                           </button>
                        ))}
                     </div>
                  </div>
                  
                  <div className="flex justify-between text-gray-400">
                    <span>Tip ({tipPercent}%)</span>
                    <span>${tipAmount.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-neutral-800 mb-8">
                  <span className="text-lg font-bold text-white">Total</span>
                  <span className="text-2xl font-serif font-bold text-jalwa-gold">${finalTotal.toFixed(2)}</span>
                </div>

                <Button 
                   fullWidth 
                   onClick={(e) => {
                     // Trigger form submission from outside form
                     const form = document.getElementById('checkout-form') as HTMLFormElement;
                     if (form) form.requestSubmit();
                   }}
                   className={isLoading ? 'opacity-70 cursor-wait' : ''}
                >
                  {isLoading ? 'Processing...' : `Pay $${finalTotal.toFixed(2)}`}
                </Button>
                
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                   <ShoppingBag size={12} /> Secure Checkout
                </div>
              </div>
            </div>

          </div>
        </div>
      </Section>
    </>
  );
};

export default Checkout;
