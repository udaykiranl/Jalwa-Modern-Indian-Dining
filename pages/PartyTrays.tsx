import React from 'react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import { PARTY_TRAY_ITEMS } from '../constants';
import { Phone, Download, Info } from 'lucide-react';

const PartyTrays: React.FC = () => {
  return (
    <>
      <div className="bg-neutral-900 pt-32 pb-16 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Party Trays</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Bring the authentic taste of Jalwa to your next event. Our generous party trays are perfect for home gatherings, office lunches, and celebrations.
        </p>
      </div>

      <Section>
        <div className="container mx-auto px-6">
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <Reveal>
              <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700/50 flex flex-col items-center text-center h-full">
                <h3 className="text-2xl font-bold text-jalwa-gold mb-2">Half Tray</h3>
                <p className="text-white text-3xl font-serif font-bold mb-4">Serves 10-12 Guests</p>
                <p className="text-gray-400">Perfect for small family gatherings, intimate dinners, or team lunches.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700/50 flex flex-col items-center text-center h-full">
                <h3 className="text-2xl font-bold text-jalwa-gold mb-2">Full Tray</h3>
                <p className="text-white text-3xl font-serif font-bold mb-4">Serves 20-25 Guests</p>
                <p className="text-gray-400">Ideal for birthday parties, weddings, holiday celebrations, and large events.</p>
              </div>
            </Reveal>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-16 gap-y-16">
            {PARTY_TRAY_ITEMS.map((section, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <div className="mb-4">
                  <h3 className="text-2xl font-serif font-bold text-white mb-6 border-b border-jalwa-gold/30 pb-2 inline-flex items-center gap-3">
                    {section.category}
                  </h3>
                  <div className="space-y-3">
                    {/* Header Row */}
                    <div className="flex justify-between text-xs text-gray-500 uppercase tracking-widest mb-2 px-4">
                      <span>Item Name</span>
                      <div className="flex gap-6 w-40 justify-end">
                        <span className="w-16 text-right">Half</span>
                        <span className="w-16 text-right">Full</span>
                      </div>
                    </div>
                    
                    {/* Items */}
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-center bg-neutral-800/40 p-4 rounded-lg hover:bg-neutral-800 transition-colors border border-transparent hover:border-neutral-700">
                        <span className="font-medium text-gray-200 pr-4">{item.name}</span>
                        <div className="flex gap-6 w-40 justify-end shrink-0">
                          <span className="w-16 text-right text-jalwa-gold font-bold">{item.half}</span>
                          <span className="w-16 text-right text-jalwa-gold font-bold">{item.full}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA / Info Footer */}
          <div className="mt-24 bg-neutral-800/80 rounded-3xl p-8 md:p-12 text-center border border-neutral-700 backdrop-blur-sm">
            <Reveal>
              <div className="flex justify-center mb-6 text-jalwa-gold">
                <Info size={40} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Important Information</h2>
              <div className="max-w-3xl mx-auto text-gray-400 space-y-4 mb-10 text-sm md:text-base leading-relaxed">
                <p>
                  Prices are subject to change without notice. Please place party tray orders at least 24 hours in advance to ensure availability. 
                </p>
                <p>
                  We also provide chafing dishes, sternos, and serving utensils upon request for an additional charge. 
                  Delivery options are available for orders over a certain amount within a 5-mile radius.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button onClick={() => window.location.href='tel:9737444114'} variant="primary" className="flex items-center gap-2">
                  <Phone size={18} /> Call to Order (973) 744-4114
                </Button>
                {/* PDF Download placeholder */}
                <Button variant="outline" className="flex items-center gap-2 cursor-not-allowed opacity-50" title="Coming Soon">
                  <Download size={18} /> Download PDF Menu
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PartyTrays;