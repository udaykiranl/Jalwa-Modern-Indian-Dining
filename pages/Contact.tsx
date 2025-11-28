import React from 'react';
import Section from '../components/Section';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <>
      <div className="bg-neutral-900 pt-32 pb-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Visit Us</h1>
        <p className="text-gray-400">We look forward to serving you.</p>
      </div>

      <Section>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                  <MapPin className="text-jalwa-gold" /> Location
                </h3>
                <p className="text-gray-400 text-lg mb-4">{CONTACT_INFO.address}</p>
                <div className="text-gray-500 text-sm">
                  <p>Located near the heart of Montclair.</p>
                  <p>Street parking and municipal lots available nearby.</p>
                </div>
                <div className="mt-6">
                    <Button variant="outline" onClick={() => window.open(`https://maps.google.com/?q=${CONTACT_INFO.address}`, '_blank')}>
                        Get Directions
                    </Button>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                  <Clock className="text-jalwa-gold" /> Hours
                </h3>
                <ul className="space-y-3 text-gray-400">
                  {CONTACT_INFO.hours.map((h, i) => (
                    <li key={i} className="flex justify-between border-b border-neutral-800 pb-2 max-w-md">
                      <span>{h.split(':')[0]}</span>
                      <span className="text-white">{h.split(':')[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                  <Phone className="text-jalwa-gold" /> Contact
                </h3>
                <p className="text-gray-400 text-lg mb-2">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
                </p>
                <p className="text-gray-400 text-lg">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-full min-h-[400px] rounded-2xl overflow-hidden grayscale invert filter relative border border-neutral-800">
                <iframe 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy" 
                    allowFullScreen 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.585593881476!2d-74.2155!3d40.8175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ5JzAzLjAiTiA3NMKwMTInNTUuOCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus">
                </iframe>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;