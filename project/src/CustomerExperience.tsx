import React from 'react';
import { 
  Pizza, 
  Coffee, 
  Utensils, 
  CreditCard, 
  Truck 
} from 'lucide-react';

const CustomerExperience: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-block bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Customer Experience
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Beautiful Customer Interface
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Give your customers an exceptional ordering experience with our intuitive, modern interface designed for maximum conversions
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Large Monitor Mockup - Realistic */}
          <div className="relative animate-on-scroll">
            <div className="relative">
              {/* Monitor Frame */}
              <div className="bg-gray-900 rounded-t-3xl p-6 shadow-2xl transform perspective-1000 rotateY-5">
                <div className="bg-white rounded-xl h-96 w-[600px] p-8 relative overflow-hidden">
                  {/* Browser Bar */}
                  <div className="flex items-center mb-6 pb-4 border-b">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 mx-6 bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-500">
                      ordereasy.com/restaurant-name
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-gray-900">Mario's Pizza</h3>
                      <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-green-800 text-sm font-medium">Open Now</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-red-50 p-4 rounded-xl hover:bg-red-100 transition-colors cursor-pointer">
                        <Pizza className="w-8 h-8 text-red-600 mb-2" />
                        <p className="font-semibold text-gray-900">Margherita</p>
                        <p className="text-sm text-gray-600">Classic tomato & mozzarella</p>
                        <p className="text-lg font-bold text-red-600 mt-2">$18.99</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-xl hover:bg-orange-100 transition-colors cursor-pointer">
                        <Coffee className="w-8 h-8 text-orange-600 mb-2" />
                        <p className="font-semibold text-gray-900">Iced Latte</p>
                        <p className="text-sm text-gray-600">Cold brew perfection</p>
                        <p className="text-lg font-bold text-orange-600 mt-2">$4.50</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-xl hover:bg-green-100 transition-colors cursor-pointer">
                        <Utensils className="w-8 h-8 text-green-600 mb-2" />
                        <p className="font-semibold text-gray-900">Caesar Salad</p>
                        <p className="text-sm text-gray-600">Fresh & crispy</p>
                        <p className="text-lg font-bold text-green-600 mt-2">$12.99</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-600 text-white p-4 rounded-xl text-center">
                      <p className="font-semibold">3 items in cart • Total: $36.48</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Monitor Base */}
              <div className="bg-gray-800 h-12 rounded-b-2xl shadow-lg"></div>
              <div className="bg-gray-700 h-16 w-48 mx-auto rounded-b-xl"></div>
            </div>

            {/* Floating Payment Card - Top Left */}
            <div className="absolute -top-8 -left-8 bg-white p-6 rounded-2xl shadow-xl animate-float border-l-4 border-green-500">
              <CreditCard className="w-8 h-8 text-green-600 mb-3" />
              <p className="font-bold text-gray-900">Secure Payment</p>
              <p className="text-sm text-gray-600">256-bit SSL encryption</p>
            </div>

            {/* Floating Delivery Card - Bottom Right */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl animate-float border-l-4 border-blue-500" style={{ animationDelay: '1s' }}>
              <Truck className="w-8 h-8 text-blue-600 mb-3" />
              <p className="font-bold text-gray-900">Fast Delivery</p>
              <p className="text-sm text-gray-600">25-30 minutes</p>
            </div>
          </div>

          {/* Mobile Mockup - Realistic */}
          <div className="relative animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] h-[600px] w-[300px] p-6 relative overflow-hidden">
                {/* Mobile Status Bar */}
                <div className="flex justify-between items-center mb-6 text-xs text-gray-600">
                  <span className="font-medium">9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                    <span>100%</span>
                  </div>
                </div>
                
                {/* App Header */}
                <div className="text-center mb-6">
                  <div className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-white text-lg font-bold">OrderEasy</span>
                  </div>
                  <p className="text-sm text-gray-600">Mario's Pizza • 4.8 ⭐</p>
                </div>
                
                {/* Mobile Content */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 flex items-center">
                    <Pizza className="w-10 h-10 text-red-600 mr-4" />
                    <div className="flex-1">
                      <p className="font-semibold">Margherita Pizza</p>
                      <p className="text-sm text-gray-600">Large • Extra cheese</p>
                    </div>
                    <p className="font-bold text-red-600">$18.99</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 flex items-center">
                    <Coffee className="w-10 h-10 text-orange-600 mr-4" />
                    <div className="flex-1">
                      <p className="font-semibold">Iced Latte</p>
                      <p className="text-sm text-gray-600">Large • Oat milk</p>
                    </div>
                    <p className="font-bold text-orange-600">$4.50</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6 text-center">
                    <p className="text-lg font-bold mb-2">Order Total: $36.48</p>
                    <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl">
                      Place Order
                    </button>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Estimated delivery</span>
                    <span className="font-semibold">25-30 mins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerExperience;
