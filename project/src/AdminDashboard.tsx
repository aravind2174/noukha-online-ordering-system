import React from 'react';
import { 
  BarChart3, 
  Users, 
  Clock, 
  Star, 
  Bell, 
  TrendingUp 
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-block bg-purple-100 text-purple-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Admin Dashboard
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Powerful Restaurant Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete control over your restaurant operations with real-time insights, automated processes, and growth analytics
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Mobile Mockup First */}
          <div className="relative animate-on-scroll order-2 lg:order-1">
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
                
                {/* Admin App Header */}
                <div className="text-center mb-6">
                  <div className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-white text-lg font-bold">Admin Panel</span>
                  </div>
                </div>
                
                {/* Admin Mobile Content */}
                <div className="space-y-3">
                  <div className="bg-green-50 rounded-xl p-4 flex items-center border-l-4 border-green-500">
                    <BarChart3 className="w-8 h-8 text-green-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Today's Sales</p>
                      <p className="text-lg font-bold text-green-600">$2,847</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-4 flex items-center border-l-4 border-blue-500">
                    <Users className="w-8 h-8 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Active Orders</p>
                      <p className="text-lg font-bold text-blue-600">24</p>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 rounded-xl p-4 flex items-center border-l-4 border-orange-500">
                    <Clock className="w-8 h-8 text-orange-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Avg Delivery</p>
                      <p className="text-lg font-bold text-orange-600">23 min</p>
                    </div>
                  </div>
                  
                  <div className="bg-purple-600 text-white rounded-xl p-4">
                    <p className="font-semibold mb-2">Quick Actions</p>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="bg-white/20 rounded-lg p-2 text-sm">Add Item</button>
                      <button className="bg-white/20 rounded-lg p-2 text-sm">View Orders</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Large Monitor - Admin Dashboard */}
          <div className="relative animate-on-scroll order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Monitor Frame */}
              <div className="bg-gray-900 rounded-t-3xl p-6 shadow-2xl">
                <div className="bg-white rounded-xl h-96 w-[700px] p-8 relative overflow-hidden">
                  {/* Browser Bar */}
                  <div className="flex items-center mb-6 pb-4 border-b">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 mx-6 bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-500">
                      admin.ordereasy.com/dashboard
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-3xl font-bold text-gray-900">Restaurant Dashboard</h3>
                      <div className="flex items-center bg-green-100 px-4 py-2 rounded-full">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-green-800 font-semibold">Live</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-6">
                      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl">
                        <BarChart3 className="w-10 h-10 mb-3 opacity-90" />
                        <p className="text-sm opacity-90">Revenue Today</p>
                        <p className="text-2xl font-bold">$2,847</p>
                        <p className="text-xs opacity-75">+12% from yesterday</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                        <Users className="w-10 h-10 mb-3 opacity-90" />
                        <p className="text-sm opacity-90">Orders</p>
                        <p className="text-2xl font-bold">89</p>
                        <p className="text-xs opacity-75">24 active now</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl">
                        <Clock className="w-10 h-10 mb-3 opacity-90" />
                        <p className="text-sm opacity-90">Avg Time</p>
                        <p className="text-2xl font-bold">23m</p>
                        <p className="text-xs opacity-75">Delivery time</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl">
                        <Star className="w-10 h-10 mb-3 opacity-90" />
                        <p className="text-sm opacity-90">Rating</p>
                        <p className="text-2xl font-bold">4.9</p>
                        <p className="text-xs opacity-75">Customer rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Monitor Base */}
              <div className="bg-gray-800 h-12 rounded-b-2xl shadow-lg"></div>
              <div className="bg-gray-700 h-16 w-52 mx-auto rounded-b-xl"></div>
            </div>

            {/* Floating Notification Card - Top Left */}
            <div className="absolute -top-8 -left-8 bg-white p-6 rounded-2xl shadow-xl animate-float border-l-4 border-red-500">
              <Bell className="w-8 h-8 text-red-600 mb-3" />
              <p className="font-bold text-gray-900">New Order!</p>
              <p className="text-sm text-gray-600">Pizza Margherita x2</p>
            </div>

            {/* Floating Analytics Card - Bottom Right */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl animate-float border-l-4 border-purple-500" style={{ animationDelay: '1s' }}>
              <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
              <p className="font-bold text-gray-900">Sales Up 25%</p>
              <p className="text-sm text-gray-600">This week vs last</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
