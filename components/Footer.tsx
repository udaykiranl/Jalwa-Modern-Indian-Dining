import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, MapPin, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-jalwa-gold">JALWA</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              A symphony of authentic spices and modern presentation. 
              Experience the evolution of Indian cuisine in the heart of Montclair.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-jalwa-gold hover:text-black transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-jalwa-gold hover:text-black transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-semibold text-white">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-jalwa-gold shrink-0" size={18} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-jalwa-gold shrink-0" size={18} />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-jalwa-gold shrink-0" size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-semibold text-white">Opening Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {CONTACT_INFO.hours.map((hour, idx) => (
                <li key={idx} className="pb-2 border-b border-neutral-800 last:border-0">
                  {hour}
                </li>
              ))}
            </ul>
          </div>

           {/* Links */}
           <div className="space-y-6">
            <h3 className="text-lg font-serif font-semibold text-white">Discover</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/menu" className="hover:text-jalwa-gold transition-colors">Our Menu</Link></li>
              <li><Link to="/catering" className="hover:text-jalwa-gold transition-colors">Catering Services</Link></li>
              <li><Link to="/about" className="hover:text-jalwa-gold transition-colors">Our Story</Link></li>
              <li><Link to="/gallery" className="hover:text-jalwa-gold transition-colors">Gallery</Link></li>
              <li><a href="#" className="hover:text-jalwa-gold transition-colors">Gift Cards</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Jalwa Modern Indian Dining. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;