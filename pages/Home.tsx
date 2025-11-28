
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  Leaf, 
  Wifi, 
  ChefHat, 
  UtensilsCrossed, 
  ShoppingBag, 
  Truck, 
  CalendarCheck, 
  Car 
} from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const HERO_PHRASES = [
    { text: "Taste the", highlight: "Jalwa" },
    { text: "Feel the", highlight: "Jalwa" },
    { text: "Where Flavors", highlight: "Spark" },
    { text: "Born in India,", highlight: "Reinvented in Montclair" },
    { text: "Modern. Bold.", highlight: "Indian." },
    { text: "Tradition Meets", highlight: "Innovation" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % HERO_PHRASES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const FEATURES = [
    { icon: Leaf, label: "Serves Vegan Dishes" },
    { icon: Wifi, label: "Has Wi-Fi" },
    { icon: ChefHat, label: "Catering" },
    { icon: UtensilsCrossed, label: "Dine-In" },
    { icon: ShoppingBag, label: "Take-Out" },
    { icon: Truck, label: "Delivery" },
    { icon: CalendarCheck, label: "Reservations" },
    { icon: Car, label: "Curbside Pickup" }
  ];

  const AVATARS = [
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop", // Male
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop", // Female
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"  // Male
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-110" // slightly scaled to ensure full coverage
            poster="https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=2000"
          >
            {/* Chef cooking in wok pan with fire - High quality stock replacement for Storyblocks link */}
            <source src="https://videos.pexels.com/video-files/2620043/2620043-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-jalwa-black via-jalwa-black/70 to-jalwa-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <span className="block text-jalwa-gold uppercase tracking-[0.4em] text-sm mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0ms' }}>
            Montclair, New Jersey
          </span>
          
          <div className="min-h-[160px] md:min-h-[200px] flex items-center justify-center">
            <h1 
              key={currentPhrase}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in-up opacity-0"
            >
              {HERO_PHRASES[currentPhrase].text} <span className="text-jalwa-gold block md:inline">{HERO_PHRASES[currentPhrase].highlight}</span>
            </h1>
          </div>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-10 leading-relaxed font-light animate-fade-in-up opacity-0 delay-200">
            A culinary journey where traditional Indian spices meet modern artistry. 
            Experience fine dining that awakens your senses.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0 delay-300">
            <Button to="/menu" variant="primary">View Menu</Button>
            <Button to="/contact" variant="outline">Book a Table</Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
        </div>
      </div>

      {/* Featuring Section */}
      <div className="bg-neutral-900 border-b border-neutral-800 py-16">
        <div className="container mx-auto px-6">
          <Reveal delay={200}>
            <div className="text-center mb-12">
               <h2 className="text-3xl font-serif text-white font-bold">Featuring</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center">
               {FEATURES.map((feature, idx) => (
                 <div key={idx} className="flex flex-col items-center gap-4 group cursor-default">
                   {/* Gradient Border Circle */}
                   <div className="relative p-[2px] rounded-full bg-gradient-to-br from-neutral-700 via-neutral-600 to-neutral-700 group-hover:from-jalwa-gold group-hover:via-amber-300 group-hover:to-jalwa-copper transition-all duration-500 shadow-lg group-hover:shadow-jalwa-gold/20">
                     <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center relative z-10 group-hover:bg-neutral-800 transition-colors duration-300">
                       <feature.icon className="text-gray-400 group-hover:text-jalwa-gold transition-colors duration-300" size={28} strokeWidth={1.5} />
                     </div>
                   </div>
                   <span className="text-sm md:text-base text-gray-400 group-hover:text-white transition-colors duration-300 font-medium">
                     {feature.label}
                   </span>
                 </div>
               ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Intro Section */}
      <Section className="text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
              Reimagining Indian Cuisine
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-gray-400 text-lg leading-loose mb-12">
              At Jalwa, we believe food is an emotion. Our chefs blend authentic regional recipes 
              with contemporary techniques to create dishes that are as visually stunning as they are delicious. 
              Located in the heart of Montclair, we invite you to a dining experience that celebrates the spirit of India.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=500&auto=format&fit=crop" alt="Indian Spices" className="rounded-2xl object-cover h-40 w-full opacity-80 hover:opacity-100 transition-opacity" />
               <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=500&auto=format&fit=crop" alt="Curry" className="rounded-2xl object-cover h-40 w-full opacity-80 hover:opacity-100 transition-opacity md:mt-8" />
               <img src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=500&auto=format&fit=crop" alt="Tandoor" className="rounded-2xl object-cover h-40 w-full opacity-80 hover:opacity-100 transition-opacity" />
               <img src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=500&auto=format&fit=crop" alt="Interior" className="rounded-2xl object-cover h-40 w-full opacity-80 hover:opacity-100 transition-opacity md:mt-8" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Highlights / Features */}
      <Section darker>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <Reveal>
                <div className="relative">
                  <div className="absolute -inset-4 border border-jalwa-gold/30 rounded-3xl transform rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1517244683847-745431d57ede?q=80&w=1000&auto=format&fit=crop" 
                    alt="Signature Dish" 
                    className="relative rounded-2xl shadow-2xl"
                  />
                </div>
              </Reveal>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <Reveal delay={200}>
                <span className="text-jalwa-gold font-bold tracking-widest uppercase text-sm">Chef's Selection</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2">Signature Flavors</h2>
              </Reveal>
              <div className="space-y-6">
                <Reveal delay={300}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 text-jalwa-gold">
                      <span className="font-bold text-xl">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Clay Oven Perfection</h4>
                      <p className="text-gray-400">Succulent kebabs and fresh naan baked in our traditional charcoal tandoor.</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={400}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 text-jalwa-gold">
                      <span className="font-bold text-xl">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Modern Curries</h4>
                      <p className="text-gray-400">Classic recipes refined with lighter sauces and premium local ingredients.</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={500}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 text-jalwa-gold">
                      <span className="font-bold text-xl">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Vegetarian Delights</h4>
                      <p className="text-gray-400">An extensive selection of plant-based dishes that don't compromise on flavor.</p>
                    </div>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={600}>
                <div className="pt-4">
                  <Link to="/menu" className="group flex items-center gap-2 text-jalwa-gold font-bold tracking-widest hover:text-white transition-colors">
                    EXPLORE FULL MENU <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-[#4a4a4a]"> {/* Matching the grey background style from reference */}
        <div className="container mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl font-serif text-white text-center mb-16">What our guests are saying</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <Reveal key={t.id} delay={idx * 200} className="h-full">
                {/* Gradient Border Wrapper */}
                <div className="group h-full relative p-[1px] bg-gradient-to-br from-neutral-800 via-jalwa-gold/40 to-neutral-800 hover:from-jalwa-gold hover:via-white/30 hover:to-jalwa-gold transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-jalwa-gold/10">
                  
                  {/* Inner Card */}
                  <div className="bg-[#1a1a1a] h-full w-full p-8 flex flex-col items-start text-left relative overflow-hidden">
                    
                    {/* Flash Light / Shimmer Animation Overlay */}
                    <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-10 pointer-events-none" />
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 relative z-20">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-white fill-current" />
                      ))}
                    </div>
                    
                    {/* Text */}
                    <p className="text-sm text-gray-300 mb-6 leading-relaxed flex-grow relative z-20">
                      {t.text}
                    </p>
                    
                    {/* View More */}
                    <button className="text-xs text-white underline underline-offset-4 mb-8 hover:text-jalwa-gold transition-colors relative z-20">
                      View more
                    </button>

                    {/* Author */}
                    <div className="mt-auto flex items-center gap-3 relative z-20">
                      <img 
                        src={AVATARS[idx % AVATARS.length]} 
                        alt={t.author} 
                        className="w-10 h-10 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                      />
                      <span className="text-sm text-white font-medium">{t.author}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-jalwa-gold text-black">
        <div className="container mx-auto px-6 text-center">
           <Reveal>
             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Experience Jalwa?</h2>
             <p className="max-w-xl mx-auto text-lg mb-10 font-medium opacity-80">
               Whether it's a romantic dinner, a family gathering, or a corporate event, we are ready to serve you.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button to="/order" variant="secondary" className="bg-black text-white hover:bg-neutral-800">Order Online</Button>
               <Button to="/catering" variant="outline" className="border-black text-black hover:bg-black hover:text-white">Catering Inquiry</Button>
             </div>
           </Reveal>
        </div>
      </Section>
    </>
  );
};

export default Home;
