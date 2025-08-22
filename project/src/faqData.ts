import React from 'react';
import { restaurantTypes } from '../data/restaurantTypes';

const RestaurantTypes: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 overflow-hidden">
      <div className="mb-12">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-6">
          Perfect for Every Restaurant
        </h2>
        <p className="text-xl text-center text-white/80 max-w-2xl mx-auto">
          From fine dining to food trucks, our platform adapts to any restaurant type
        </p>
      </div>
      
      <div className="relative">
        {/* First Row - Left to Right */}
        <div className="flex animate-scroll whitespace-nowrap mb-8">
          {[...restaurantTypes.slice(0, 9), ...restaurantTypes.slice(0, 9)].map((type, index) => (
            <div key={index} className="flex items-center mx-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
              <span className="text-3xl mr-4">{type.icon}</span>
              <span className="text-white text-xl font-semibold">{type.name}</span>
            </div>
          ))}
        </div>
        
        {/* Second Row - Right to Left */}
        <div className="flex animate-scroll-reverse whitespace-nowrap">
          {[...restaurantTypes.slice(9), ...restaurantTypes.slice(9)].map((type, index) => (
            <div key={index} className="flex items-center mx-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
              <span className="text-3xl mr-4">{type.icon}</span>
              <span className="text-white text-xl font-semibold">{type.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default RestaurantTypes;
