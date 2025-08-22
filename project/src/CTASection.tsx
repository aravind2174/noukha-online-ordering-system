import React from 'react';
import { 
  CheckCircle, 
  Shield, 
  Zap, 
  Utensils, 
  ShoppingCart, 
  Star, 
  CreditCard 
} from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-on-scroll">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
            Ready to Get Started?
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transform Your Restaurant
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 block">
              Starting Today
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful restaurants that have increased their revenue by 40% with our platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-6 rounded-full text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Start Free Trial
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <p className="text-white font-semibold">30-Day Free Trial</p>
              <p className="text-gray-300 text-sm">No setup fees or hidden costs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Shield className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <p className="text-white font-semibold">24/7 Support</p>
              <p className="text-gray-300 text-sm">Expert help when you need it</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <p className="text-white font-semibold">Quick Setup</p>
              <p className="text-gray-300 text-sm">Live in less than 24 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-20 animate-float opacity-20">
        <Utensils className="w-16 h-16 text-white" />
      </div>
      <div className="absolute top-32 right-32 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <ShoppingCart className="w-12 h-12 text-white" />
      </div>
      <div className="absolute bottom-32 left-32 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <Star className="w-14 h-14 text-white" />
      </div>
      <div className="absolute bottom-20 right-20 animate-float opacity-20" style={{ animationDelay: '0.5s' }}>
        <CreditCard className="w-10 h-10 text-white" />
      </div>
    </section>
  );
};

export default CTASection;
