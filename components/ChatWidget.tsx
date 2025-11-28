import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2, Mic, MicOff } from 'lucide-react';
import { MENU_ITEMS, CONTACT_INFO } from '../constants';

// Interface for Web Speech API
interface IWindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Namaste! I'm the Jalwa AI Assistant. How can I help you today? (Ask me about our menu, hours, dietary options, or catering!)",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const processMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const responseText = generateResponse(userMsg.text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  const handleSendClick = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    processMessage(inputValue);
    setInputValue('');
  };

  const handleVoiceInput = () => {
    const { webkitSpeechRecognition, SpeechRecognition } = window as unknown as IWindow;
    const SpeechRecognitionAPI = SpeechRecognition || webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
      alert("Your browser does not support voice input. Please try Chrome or Edge.");
      return;
    }

    const recognition = new SpeechRecognitionAPI();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      if (transcript) {
        setInputValue(transcript); // Show what was heard
        processMessage(transcript); // Send immediately
        setInputValue(''); // Clear after sending
      }
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };

    recognition.start();
  };

  const generateResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    // 1. GREETINGS
    if (lowerInput.match(/hello|hi|hey|namaste|morning|evening/)) {
      return "Hello! Welcome to Jalwa. How can I assist you with your dining plans today?";
    }

    // 2. BASIC INFO (Hours, Location, Contact)
    if (lowerInput.match(/hours|open|close|time|when/)) {
      return `We are open:\n${CONTACT_INFO.hours.join('\n')}`;
    }

    if (lowerInput.match(/address|location|where|directions/)) {
      return `We are located at ${CONTACT_INFO.address}.`;
    }

    if (lowerInput.match(/phone|call|number|contact/)) {
      return `You can reach us at ${CONTACT_INFO.phone}.`;
    }

    if (lowerInput.match(/parking|park/)) {
      return "There is street parking available on Glenridge Ave and municipal lots nearby.";
    }

    if (lowerInput.match(/wifi|internet/)) {
      return "Yes, we offer complimentary Wi-Fi for our dining guests.";
    }
    
    if (lowerInput.match(/halal/)) {
      return "Yes, all of our meats are Halal certified.";
    }

    if (lowerInput.match(/dine.*in|seating|table/)) {
      return "Yes, we offer comfortable dine-in service with a modern ambiance. We recommend booking a table for weekends.";
    }

    // 3. RESERVATIONS
    if (lowerInput.match(/book|reserve|reservation/)) {
      return `For reservations, please call us at ${CONTACT_INFO.phone}. We recommend booking in advance for weekends!`;
    }

    // 4. CATERING & PARTIES
    if (lowerInput.match(/catering|party|event|tray/)) {
      return "We offer exceptional catering for all occasions! You can view our Party Trays menu or submit an inquiry on our Catering page. We handle corporate events, weddings, and private parties.";
    }

    // 5. DIETARY (Vegan, Gluten Free, Allergies, Spice)
    if (lowerInput.match(/vegan|vegetarian|veg\b/)) {
      const vegItems = MENU_ITEMS.filter(i => i.isVegan || i.isVegetarian).slice(0, 4).map(i => i.name).join(', ');
      return `We have excellent vegetarian and vegan options! Some favorites include: ${vegItems}.`;
    }

    if (lowerInput.match(/gluten|gf|wheat/)) {
       const gfItems = MENU_ITEMS.filter(i => i.isGlutenFree).slice(0, 3).map(i => i.name).join(', ');
       return `Many of our curries and tandoor items are Gluten-Free, such as: ${gfItems}. Please inform your server of any allergies.`;
    }

    if (lowerInput.match(/allergy|nut|dairy/)) {
        return "Please let the restaurant staff know your allergies when you place the order so they can confirm and take extra care. We take allergies very seriously.";
    }

    if (lowerInput.match(/spicy|hot|mild/)) {
        return "Our dishes can be customized to your preference! Whether you like it mild, medium, or Indian hot, just let us know when ordering.";
    }

    // 6. CHEF
    if (lowerInput.match(/chef|cook/)) {
        return "Our Head Chef is Mayur Naik, who brings years of experience from prestigious establishments to create our modern Indian cuisine.";
    }

    // 7. MENU SEARCH (Flexible Matching)
    // Remove punctuation for cleaner matching
    const cleanInput = lowerInput.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
    const inputWords = cleanInput.split(/\s+/).filter(w => w.length > 2 && !['have', 'you', 'the', 'menu', 'for', 'with', 'and', 'are', 'what', 'does'].includes(w));
    
    // Find items where the name or description contains the input tokens
    const matchedItems = MENU_ITEMS.filter(item => {
        const nameWords = item.name.toLowerCase().split(/\s+/);
        // Check if ANY significant word from input matches the item name
        
        // Direct substring check
        if (item.name.toLowerCase().includes(cleanInput)) return true;

        // Token intersection check
        const intersection = inputWords.filter(word => nameWords.some(nw => nw.includes(word)));
        
        // Match heuristic
        if (inputWords.length > 0) {
           return intersection.length >= Math.ceil(inputWords.length * 0.5); 
        }
        return false;
    });

    if (matchedItems.length > 0) {
        // Return top match
        const bestMatch = matchedItems[0];
        return `Yes! We have ${bestMatch.name} ($${bestMatch.price}). ${bestMatch.description}`;
    }

    // 8. DEFAULT FALLBACK
    return `I'm not 100% sure about that specific detail. Please call the restaurant directly at ${CONTACT_INFO.phone} so our team can help you!`;
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 group ${
          isOpen ? 'bg-neutral-800 text-white rotate-90' : 'bg-jalwa-gold text-black hover:scale-110'
        }`}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} fill="currentColor" />}
        {!isOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-[85vw] md:w-96 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-50 transition-all duration-300 origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-neutral-800 p-4 flex items-center gap-3 border-b border-neutral-700">
          <div className="w-10 h-10 rounded-full bg-jalwa-gold flex items-center justify-center text-black">
            <Bot size={20} />
          </div>
          <div>
            <h3 className="font-serif font-bold text-white">Jalwa Assistant</h3>
            <p className="text-xs text-jalwa-gold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Online
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-black/40 custom-scrollbar">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-jalwa-gold text-black rounded-tr-none'
                    : 'bg-neutral-800 text-gray-200 rounded-tl-none border border-neutral-700'
                }`}
              >
                {msg.text.split('\n').map((line, i) => (
                  <p key={i} className={i > 0 ? 'mt-1' : ''}>{line}</p>
                ))}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-neutral-800 p-3 rounded-2xl rounded-tl-none border border-neutral-700">
                <Loader2 size={16} className="animate-spin text-jalwa-gold" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-neutral-800 border-t border-neutral-700">
          <form
            onSubmit={handleSendClick}
            className="flex gap-2 items-center"
          >
             <button
              type="button"
              onClick={handleVoiceInput}
              className={`p-2 rounded-full transition-all ${
                isListening 
                  ? 'bg-red-500 text-white animate-pulse shadow-lg shadow-red-500/50' 
                  : 'text-gray-400 hover:text-white hover:bg-neutral-700'
              }`}
              title="Speak"
            >
              {isListening ? <MicOff size={18} /> : <Mic size={18} />}
            </button>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={isListening ? "Listening..." : "Ask about menu, catering..."}
              className="flex-grow bg-neutral-900 border border-neutral-700 text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:border-jalwa-gold transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() && !isListening}
              className="bg-jalwa-gold text-black p-2 rounded-full hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;