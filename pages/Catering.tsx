import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import { Calendar, Users, Utensils, CheckCircle, ArrowRight } from 'lucide-react';

const Catering: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    alert('Thank you for your inquiry. We will contact you shortly!');
    setFormData({ name: '', email: '', phone: '', date: '', guests: '', message: '' });
  };

  return (
    <>
      <div className="relative pt-32 pb-20 bg-neutral-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-jalwa-gold/5 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Exceptional Catering</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Elevate your event with Jalwa's exquisite flavors and professional service. 
            From intimate gatherings to grand weddings, we make every occasion memorable.
          </p>
        </div>
      </div>

      <Section>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Card 1 */}
            <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700/50 hover:border-jalwa-gold/50 transition-all group">
              <div className="w-14 h-14 bg-jalwa-black rounded-full flex items-center justify-center text-jalwa-gold mb-6 group-hover:scale-110 transition-transform">
                <Utensils size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Live Stations</h3>
              <p className="text-gray-400">
                Add flair to your event with our live Chaat, Dosa, and Tandoor stations. 
                Freshly prepared right in front of your guests.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700/50 hover:border-jalwa-gold/50 transition-all group">
              <div className="w-14 h-14 bg-jalwa-black rounded-full flex items-center justify-center text-jalwa-gold mb-6 group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Corporate & Social</h3>
              <p className="text-gray-400">
                Perfect for office lunches, pharmaceutical meetings, birthday parties, 
                and sweet sixteens. We offer customized packages.
              </p>
            </div>

            {/* Card 3 - Party Trays Link */}
            <Link to="/party-trays" className="block">
              <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700/50 hover:border-jalwa-gold transition-all group h-full cursor-pointer relative overflow-hidden">
                 <div className="absolute top-4 right-4 text-jalwa-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={24} />
                 </div>
                <div className="w-14 h-14 bg-jalwa-black rounded-full flex items-center justify-center text-jalwa-gold mb-6 group-hover:scale-110 transition-transform">
                  <Calendar size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Party Trays</h3>
                <p className="text-gray-400 mb-4">
                  Hosting at home? Our generous party trays bring restaurant-quality 
                  food directly to your dining table.
                </p>
                <span className="text-jalwa-gold text-sm font-bold uppercase tracking-wider group-hover:underline">View Menu & Pricing</span>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             {/* Why Jalwa Text */}
             <div>
               <h2 className="text-3xl font-serif font-bold text-white mb-6">Why Choose Jalwa?</h2>
               <div className="space-y-4 mb-8">
                 <div className="flex gap-4">
                   <CheckCircle className="text-jalwa-gold shrink-0 mt-1" />
                   <p className="text-gray-400">Customizable menus tailored to your palate and budget.</p>
                 </div>
                 <div className="flex gap-4">
                   <CheckCircle className="text-jalwa-gold shrink-0 mt-1" />
                   <p className="text-gray-400">Professional staff and setup assistance available.</p>
                 </div>
                 <div className="flex gap-4">
                   <CheckCircle className="text-jalwa-gold shrink-0 mt-1" />
                   <p className="text-gray-400">Accommodations for dietary restrictions (Vegan, GF, Jain).</p>
                 </div>
                 <div className="flex gap-4">
                   <CheckCircle className="text-jalwa-gold shrink-0 mt-1" />
                   <p className="text-gray-400">Consistent quality and reliable timing.</p>
                 </div>
               </div>
               <img 
                 src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop" 
                 alt="Catering Setup" 
                 className="rounded-2xl shadow-2xl opacity-80"
               />
             </div>

             {/* Form */}
             <div className="bg-neutral-800 p-8 md:p-10 rounded-2xl shadow-xl">
               <h3 className="text-2xl font-serif font-bold text-white mb-6">Request a Quote</h3>
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                     <input 
                       type="text" 
                       name="name" 
                       value={formData.name} 
                       onChange={handleChange}
                       className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-jalwa-gold focus:ring-1 focus:ring-jalwa-gold outline-none transition-all"
                       required
                     />
                   </div>
                   <div>
                     <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                     <input 
                       type="tel" 
                       name="phone" 
                       value={formData.phone} 
                       onChange={handleChange}
                       className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-jalwa-gold focus:ring-1 focus:ring-jalwa-gold outline-none transition-all"
                       required
                     />
                   </div>
                 </div>
                 <div>
                   <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                   <input 
                     type="email" 
                     name="email" 
                     value={formData.email} 
                     onChange={handleChange}
                     className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-jalwa-gold focus:ring-1 focus:ring-jalwa-gold outline-none transition-all"
                     required
                   />
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Event Date</label>
                     <input 
                       type="date" 
                       name="date" 
                       value={formData.date} 
                       onChange={handleChange}
                       className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-jalwa-gold focus:ring-1 focus:ring-jalwa-gold outline-none transition-all"
                     />
                   </div>
                   <div>
                     <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Guest Count (Est.)</label>
                     <input 
                       type="number" 
                       name="guests" 
                       value={formData.guests} 
                       onChange={handleChange}
                       className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-jalwa-gold focus:ring-1 focus:ring-jalwa-gold outline-none transition-all"
                     />
                   </div>
                 </div>
                 <div>
                   <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Event Details / Message</label>
                   <textarea 
                     name="message" 
                     value={formData.message} 
                     onChange={handleChange}
                     rows={4}
                     className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-jalwa-gold focus:ring-1 focus:ring-jalwa-gold outline-none transition-all"
                   ></textarea>
                 </div>
                 <Button type="submit" fullWidth variant="primary">Send Inquiry</Button>
               </form>
             </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Catering;