
import React from 'react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { ChefHat, Leaf, Heart, Users, UtensilsCrossed, Star, ShoppingBag, MapPin, Globe, Award, Landmark, Anchor } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center parallax"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517244683847-745431d57ede?q=80&w=2000&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-jalwa-black/60 via-jalwa-black/80 to-jalwa-black" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <Reveal>
            <span className="block text-jalwa-gold uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-medium">
              215 Glenridge Ave, Montclair
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
              Tradition Meets <span className="text-jalwa-gold">Innovation</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
              Bringing a new kind of Indian food experience to Montclair.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Story Section: How Jalwa Began */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <Reveal>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
                  <img 
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop" 
                    alt="Chef cooking" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-jalwa-gold/20 rounded-2xl -z-0 hidden md:block"></div>
              </Reveal>
            </div>
            
            <div className="w-full lg:w-1/2">
              <Reveal delay={200}>
                <h2 className="text-sm font-bold text-jalwa-gold tracking-widest uppercase mb-3">Our Origins</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">How Jalwa Began</h3>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                  <p>
                    Jalwa: Modern Indian Dining was started to bring a new kind of Indian food experience to Montclair. Located at 215 Glenridge Ave, the idea was to mix traditional Indian recipes with a modern way of cooking and serving. The goal was simple—share great Indian food in a cozy space where everyone feels welcome.
                  </p>
                  <h4 className="text-xl font-serif font-bold text-white pt-2">Inspired by Indian Roots</h4>
                  <p>
                    Jalwa is rooted in Indian culture, especially from the northern regions. The food reflects recipes passed down through generations, but with updated cooking styles. Every dish shows respect for the original flavors while keeping things simple and fresh. It’s Indian food, made for today.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-neutral-800 flex items-center gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=100" 
                    alt="Signature" 
                    className="h-12 w-auto opacity-50 invert"
                  />
                  <div>
                    <p className="text-white font-serif text-lg">Jalwa Team</p>
                    <p className="text-jalwa-gold text-xs uppercase tracking-widest">Montclair, NJ</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy / Differentiation: What Makes Jalwa Different */}
      <Section darker className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-4xl font-serif font-bold text-white mb-4">What Makes Jalwa Different</h2>
              <p className="text-gray-400 text-lg">
                This restaurant is not just about the food—it’s about the full experience. It’s food that fits many needs.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <Reveal delay={100} className="h-full">
               <div className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-800 hover:border-jalwa-gold/30 transition-colors h-full text-center group">
                 <div className="w-16 h-16 bg-jalwa-black rounded-full flex items-center justify-center mx-auto mb-6 text-jalwa-gold group-hover:scale-110 transition-transform shadow-lg shadow-jalwa-gold/10">
                   <ShoppingBag size={28} />
                 </div>
                 <h3 className="text-xl font-serif font-bold text-white mb-4">Complete Service</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">
                   Jalwa offers dine-in, takeout, curbside pickup, delivery, and catering. We are ready to serve you however you prefer to dine.
                 </p>
               </div>
             </Reveal>

             <Reveal delay={200} className="h-full">
               <div className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-800 hover:border-jalwa-gold/30 transition-colors h-full text-center group">
                 <div className="w-16 h-16 bg-jalwa-black rounded-full flex items-center justify-center mx-auto mb-6 text-jalwa-gold group-hover:scale-110 transition-transform shadow-lg shadow-jalwa-gold/10">
                   <Leaf size={28} />
                 </div>
                 <h3 className="text-xl font-serif font-bold text-white mb-4">Inclusive Menu</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">
                   The menu includes biryani, chicken tikka, and vegetable samosas, with plenty of options for vegetarians and gluten-free eaters.
                 </p>
               </div>
             </Reveal>

             <Reveal delay={300} className="h-full">
               <div className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-800 hover:border-jalwa-gold/30 transition-colors h-full text-center group">
                 <div className="w-16 h-16 bg-jalwa-black rounded-full flex items-center justify-center mx-auto mb-6 text-jalwa-gold group-hover:scale-110 transition-transform shadow-lg shadow-jalwa-gold/10">
                   <Heart size={28} />
                 </div>
                 <h3 className="text-xl font-serif font-bold text-white mb-4">Real Atmosphere</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">
                   Customers come back because the service is smooth, the food is real, and the atmosphere feels just right for everyday moments.
                 </p>
               </div>
             </Reveal>
          </div>
        </div>
      </Section>

      {/* Chef Section 1: Mayur Naik */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <Reveal>
                <h2 className="text-sm font-bold text-jalwa-gold tracking-widest uppercase mb-3">Meet The Maestro</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Chef Mayur Naik</h3>
                <p className="text-gray-400 font-medium italic mb-8 border-l-2 border-jalwa-gold pl-4">Head Chef, Jalwa: Modern Indian Dining</p>
                
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                  <p>
                    Meet Chef Mayur Naik, a culinary virtuoso whose journey began in the lively kitchen of his family’s catering business in Mumbai. Surrounded by the aromas of fresh spices, sizzling pans, and the joyful rhythm of celebration meals, Mayur discovered his passion for cooking at an early age. What began as childhood curiosity soon blossomed into a lifelong devotion to the culinary arts.
                  </p>
                  <p>
                    Determined to transform his passion into mastery, Mayur pursued formal training in hotel management and refined his craft at some of India’s most prestigious hospitality destinations. His time at <span className="text-white font-medium">The Sahara Star</span>, under the mentorship of celebrated chefs, played a pivotal role in shaping his distinct style—where tradition meets innovation with precise balance and artistic flair.
                  </p>
                  <p>
                    Mayur’s culinary journey also took him to the <span className="text-white font-medium">Hyatt Regency Mumbai</span>, where he deepened his expertise in luxury dining and global flavors. His commitment to excellence led him beyond India’s borders as well, working with the <span className="text-white font-medium">Carnival Cruise Line</span>, where he mastered large-scale international service while maintaining uncompromising quality and creativity.
                  </p>
                  <p>
                    With an insatiable appetite for experimentation, Chef Mayur brings life to Jalwa’s kitchen night after night. His dishes are more than meals—they are immersive experiences, thoughtfully crafted, visually stunning, and infused with bold, modern Indian flavors. Each plate reflects his heritage, discipline, and relentless pursuit of perfection.
                  </p>
                   <p>
                    Today, as the Head Chef of Jalwa: Modern Indian Dining, Mayur leads the culinary team with passion, purpose, and a vision that has earned admiration from guests and critics alike. Under his leadership, Jalwa continues to elevate Indian cuisine—offering a dining experience where every dish tells a story of artistry, innovation, and heart.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-jalwa-black p-3 rounded-full text-jalwa-gold border border-neutral-800">
                      <Anchor size={20} />
                    </div>
                    <div>
                      <span className="block text-white font-bold text-sm">Global Standards</span>
                      <span className="text-gray-500 text-xs">Carnival Cruise Line</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-jalwa-black p-3 rounded-full text-jalwa-gold border border-neutral-800">
                      <Star size={20} />
                    </div>
                    <div>
                      <span className="block text-white font-bold text-sm">Elite Hospitality</span>
                      <span className="text-gray-500 text-xs">Hyatt & Sahara Star</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <Reveal delay={200}>
                 <div className="relative">
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 aspect-[3/4]">
                      {/* Chef Mayur Naik Image */}
                      <img 
                        src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop" 
                        alt="Chef Mayur Naik" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    {/* Decorative Element */}
                    <div className="absolute -top-6 -left-6 w-2/3 h-2/3 border-2 border-jalwa-gold/20 rounded-2xl -z-0 hidden md:block"></div>
                 </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Chef Section 2: Tushar Naik */}
      <Section darker>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             {/* Image Left */}
            <div className="w-full lg:w-1/2">
              <Reveal>
                 <div className="relative">
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 aspect-[3/4]">
                      {/* Chef Tushar Naik Image - Replaced Placeholder */}
                      <img 
                        src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop" 
                        alt="Chef Tushar Naik" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    {/* Decorative Element */}
                    <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-jalwa-gold/20 rounded-2xl -z-0 hidden md:block"></div>
                 </div>
              </Reveal>
            </div>

            {/* Text Right */}
            <div className="w-full lg:w-1/2">
              <Reveal delay={200}>
                <h2 className="text-sm font-bold text-jalwa-gold tracking-widest uppercase mb-3">The Culinary Craftsman</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Chef Tushar Naik</h3>
                <p className="text-gray-400 font-medium italic mb-8 border-l-2 border-jalwa-gold pl-4">Culinary Architect, Jalwa: Modern Indian Dining</p>
                
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                  <p>
                    Meet Chef Tushar Naik, the creative force and culinary architect at Jalwa. With mastery across diverse cuisines and a career shaped by some of the world’s most renowned kitchens, Chef Tushar brings a rare blend of precision, passion, and global experience to every plate he creates.
                  </p>
                  <p>
                    Tushar’s journey began in the vibrant food culture of Mumbai, where his early fascination with flavors grew into a lifelong dedication to the culinary arts. His pursuit of excellence led him into prestigious hospitality environments, including <span className="text-white font-medium">Le Royal Méridien</span> and <span className="text-white font-medium">Holiday Inn Mumbai</span>—each refining his technique and discipline.
                  </p>
                  <p>
                    His career expanded globally, taking him aboard the <span className="text-white font-medium">MSC and Carnival Cruise Lines</span>, where he mastered high-volume gourmet production for international guests. Returning to India, he continued to elevate his craft at iconic destinations like <span className="text-white font-medium">Social Khar</span>, known for bold flavor pairings.
                  </p>
                  <p>
                     Today, Chef Tushar brings this wealth of experience to Jalwa, blending tradition with modern flair. Whether reimagining classic favorites or introducing globally inspired creations, Chef Tushar’s cuisine tells a story—one rooted in passion, shaped by experience, and perfected with heart.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-jalwa-black p-3 rounded-full text-jalwa-gold border border-neutral-800">
                      <Globe size={20} />
                    </div>
                    <div>
                      <span className="block text-white font-bold text-sm">Global Experience</span>
                      <span className="text-gray-500 text-xs">Cruise Lines & Intl. Hotels</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-jalwa-black p-3 rounded-full text-jalwa-gold border border-neutral-800">
                      <Award size={20} />
                    </div>
                    <div>
                      <span className="block text-white font-bold text-sm">Culinary Excellence</span>
                      <span className="text-gray-500 text-xs">Precision & Passion</span>
                    </div>
                  </div>
                </div>

              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Chef Section 3: Kunal Patil */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <Reveal>
                <h2 className="text-sm font-bold text-jalwa-gold tracking-widest uppercase mb-3">Global Technique, Indian Soul</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Chef Kunal Patil</h3>
                <p className="text-gray-400 font-medium italic mb-8 border-l-2 border-jalwa-gold pl-4">Culinary Talent, Jalwa: Modern Indian Dining</p>
                
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                  <p>
                    Meet Chef Kunal Patil, one of the brilliant culinary talents shaping the experience at Jalwa. With roots in India and refinement in the global culinary scene, Kunal brings a rare combination of authenticity, innovation, and world-class technique to every dish he creates.
                  </p>
                  <p>
                    Kunal’s culinary journey began in Mumbai, where his passion for food was nurtured by the city’s rich diversity of flavors. His talent and dedication soon took him overseas to <span className="text-white font-medium">Dishoom, London</span>—one of the UK’s most celebrated restaurants, renowned for its modern interpretation of Bombay cuisine. There, Kunal sharpened his skills in high-precision cooking, refined plating, and mastering bold yet balanced flavors that resonate with global audiences.
                  </p>
                  <p>
                    Returning to India, he continued his journey at the prestigious <span className="text-white font-medium">Hilton Mumbai</span>, further deepening his expertise in luxury hospitality, fine dining standards, and the art of crafting memorable guest experiences.
                  </p>
                  <p>
                    Today at Jalwa, Chef Kunal blends his international exposure with his deep understanding of Indian culinary traditions. His dishes reflect a harmony of technique and heart—rooted in nostalgia, elevated with contemporary touches, and executed with meticulous attention to detail.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-jalwa-black p-3 rounded-full text-jalwa-gold border border-neutral-800">
                      <Landmark size={20} />
                    </div>
                    <div>
                      <span className="block text-white font-bold text-sm">London Expertise</span>
                      <span className="text-gray-500 text-xs">Dishoom Alumni</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-jalwa-black p-3 rounded-full text-jalwa-gold border border-neutral-800">
                      <Star size={20} />
                    </div>
                    <div>
                      <span className="block text-white font-bold text-sm">Luxury Dining</span>
                      <span className="text-gray-500 text-xs">Hilton Standards</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <Reveal delay={200}>
                 <div className="relative">
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 aspect-[3/4]">
                      {/* Chef Kunal Patil Image - Replaced Placeholder */}
                      <img 
                        src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=800&auto=format&fit=crop" 
                        alt="Chef Kunal Patil" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    {/* Decorative Element */}
                    <div className="absolute -top-6 -left-6 w-2/3 h-2/3 border-2 border-jalwa-gold/20 rounded-2xl -z-0 hidden md:block"></div>
                 </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience / Visit Section: Why Visit Jalwa */}
      <Section darker> {/* Added 'darker' prop to alternate background color after Chef Kunal */}
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <Reveal>
                <div className="grid grid-cols-2 gap-4">
                   <img 
                     src="https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=600&auto=format&fit=crop" 
                     alt="Interior Detail" 
                     className="rounded-2xl w-full h-64 object-cover mt-12 shadow-xl"
                   />
                   <img 
                     src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=600&auto=format&fit=crop" 
                     alt="Dining Area" 
                     className="rounded-2xl w-full h-64 object-cover shadow-xl"
                   />
                </div>
              </Reveal>
            </div>
            
            <div className="w-full lg:w-1/2">
              <Reveal delay={200}>
                <h2 className="text-sm font-bold text-jalwa-gold tracking-widest uppercase mb-3">Your Destination</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Why Visit Jalwa</h3>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                  <p>
                    Located in the heart of Montclair at <span className="text-white font-medium">215 Glenridge Ave</span>, Jalwa is easy to reach and ready to serve. From quick lunch takeout to dinner with friends, it’s a place built for everyday moments.
                  </p>
                  <p>
                    Customers come back because the service is smooth, the food is real, and the atmosphere feels just right. Whether you are enjoying a quick business lunch, a romantic dinner, or hosting a private celebration, the atmosphere at Jalwa sets the perfect stage.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 mt-10">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-jalwa-gold mt-1" />
                    <div>
                      <h4 className="text-white font-bold">Prime Location</h4>
                      <p className="text-sm text-gray-500">215 Glenridge Ave</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="text-jalwa-gold mt-1" />
                    <div>
                      <h4 className="text-white font-bold">Top Rated</h4>
                      <p className="text-sm text-gray-500">Service & Taste</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
