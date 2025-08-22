import React from 'react';
import { 
  Utensils, 
  ShoppingCart, 
  CreditCard, 
  Star, 
  Play,
  Zap,
  ChevronDown
} from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src="https://player.vimeo.com/video/1088319346?badge=0&autopause=0&autoplay=1&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0"
          className="w-full h-full scale-110"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '120vw',
            height: '120vh',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover'
          }}
          frameBorder="0" 
          allow="autoplay; fullscreen"
          title="Restaurant Video"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
            Transform Your Restaurant
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 block mt-4">
              Into Digital Success
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Boost revenue by 40%, streamline operations, and create unforgettable customer experiences with our cutting-edge online ordering platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-10 py-5 rounded-full text-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Start Free Trial
            </button>
            <button className="glass-effect text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
              <Play className="w-6 h-6 inline mr-3" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="glass-effect p-4 rounded-full">
          <Utensils className="w-8 h-8 text-orange-400" />
        </div>
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <div className="glass-effect p-4 rounded-full">
          <ShoppingCart className="w-8 h-8 text-green-400" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass-effect p-4 rounded-full">
          <CreditCard className="w-8 h-8 text-blue-400" />
        </div>
      </div>
      <div className="absolute top-1/2 right-8 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="glass-effect p-3 rounded-full">
          <Star className="w-6 h-6 text-yellow-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
