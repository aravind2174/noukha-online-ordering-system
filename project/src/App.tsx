import React, { useEffect, useState } from 'react';
import { 
  ShoppingCart, 
  Smartphone, 
  Monitor, 
  CreditCard, 
  Users, 
  BarChart3, 
  Clock, 
  MapPin, 
  Star, 
  Utensils, 
  Coffee, 
  Pizza, 
  ChefHat,
  ChevronDown,
  Play,
  CheckCircle,
  TrendingUp,
  Bell,
  Settings,
  DollarSign,
  Zap,
  Shield,
  Heart,
  Globe,
  Truck,
  FileText,
  Calendar,
  MessageSquare,
  Award,
  Target
} from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Customer Features - 6 cards (2 rows x 3 cards)
  const customerFeatures = [
    {
      icon: <Utensils className="w-8 h-8 text-orange-600" />,
      title: "Interactive Menu",
      description: "Beautiful menu display with high-quality images, detailed descriptions, and customization options"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
      title: "Smart Cart System",
      description: "Intelligent cart management with order modifications, special requests, and instant calculations"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      title: "Secure Payments",
      description: "Multiple payment gateways with end-to-end encryption and fraud protection"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "Real-time Tracking",
      description: "Live order status updates from kitchen to doorstep with accurate delivery estimates"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: "Review System",
      description: "Customer feedback and rating system to build trust and improve service quality"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Favorites & History",
      description: "Save favorite dishes and quick reorder from order history for seamless experience"
    }
  ];

  // Admin Features - 6 cards (2 rows x 3 cards)
  const adminFeatures = [
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
      title: "Advanced Analytics",
      description: "Deep insights into sales trends, peak hours, popular items, and revenue forecasting"
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-600" />,
      title: "Customer Intelligence",
      description: "Detailed customer profiles, ordering patterns, and personalized marketing campaigns"
    },
    {
      icon: <Bell className="w-8 h-8 text-orange-600" />,
      title: "Smart Notifications",
      description: "Real-time alerts for orders, inventory, staff scheduling, and business opportunities"
    },
    {
      icon: <Settings className="w-8 h-8 text-gray-600" />,
      title: "Menu Management",
      description: "Easy menu updates, dynamic pricing, availability control, and seasonal promotions"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "Revenue Optimization",
      description: "Profit analysis, cost tracking, tax management, and automated financial reporting"
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Delivery Management",
      description: "Route optimization, driver tracking, delivery zones, and performance monitoring"
    }
  ];

  // Restaurant types with vector-like styling
  const restaurantTypes = [
    { name: "Fine Dining", icon: "🍽️" },
    { name: "Fast Food", icon: "🍔" },
    { name: "Café & Coffee", icon: "☕" },
    { name: "Pizza Place", icon: "🍕" },
    { name: "Asian Cuisine", icon: "🥢" },
    { name: "Mexican Food", icon: "🌮" },
    { name: "Italian Restaurant", icon: "🍝" },
    { name: "Bakery", icon: "🥖" },
    { name: "Seafood", icon: "🦐" },
    { name: "Steakhouse", icon: "🥩" },
    { name: "Vegetarian", icon: "🥗" },
    { name: "Food Trucks", icon: "🚚" },
    { name: "Breakfast Spot", icon: "🥞" },
    { name: "Ice Cream", icon: "🍦" },
    { name: "Sushi Bar", icon: "🍣" },
    { name: "BBQ Joint", icon: "🍖" },
    { name: "Sandwich Shop", icon: "🥪" },
    { name: "Dessert Shop", icon: "🧁" }
  ];

  const faqs = [
    {
      question: "How quickly can I set up my restaurant's online ordering system?",
      answer: "You can have your restaurant online in less than 24 hours. Our team provides complete setup including menu digitization, payment integration, staff training, and customer onboarding support."
    },
    {
      question: "What payment methods do you support?",
      answer: "We support all major payment methods including credit/debit cards, digital wallets (PayPal, Apple Pay, Google Pay), bank transfers, and cash on delivery options with secure PCI-compliant processing."
    },
    {
      question: "Do you charge commission on orders?",
      answer: "No hidden fees! We offer transparent monthly subscription pricing with no commission on orders. You keep 100% of your revenue, unlike third-party delivery platforms that charge 15-30% commission."
    },
    {
      question: "Can customers track their orders in real-time?",
      answer: "Yes! Customers receive instant SMS and email notifications with live tracking from order confirmation through preparation, cooking, packaging, and delivery with accurate time estimates."
    },
    {
      question: "Do you provide customer support and training?",
      answer: "Absolutely! We offer 24/7 technical support, comprehensive staff training, video tutorials, and dedicated account managers to ensure your success with our platform."
    },
    {
      question: "Is the platform mobile-responsive for all devices?",
      answer: "Yes, our platform is fully responsive and optimized for all devices including smartphones, tablets, and desktops, ensuring a seamless experience for your customers everywhere."
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover scale-105"
            poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMUYyOTM3Ii8+CjxwYXRoIGQ9Ik05NjAgNTQwQzEwNjAuNDYgNTQwIDExNDAuNDYgNDYwIDExNDAuNDYgMzYwQzExNDAuNDYgMjYwIDEwNjAuNDYgMTgwIDk2MCAxODBDODU5LjU0MiAxODAgNzc5LjU0MiAyNjAgNzc5LjU0MiAzNjBDNzc5LjU0MiA0NjAgODU5LjU0MiA1NDAgOTYwIDU0MFoiIGZpbGw9IiMzNzNENTMiLz4KPC9zdmc+"
          >
            <source src="/api/placeholder/video/restaurant-delivery.mp4" type="video/mp4" />
            {/* Fallback for demo */}
          </video>
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

      {/* Customer Experience Section with Realistic Mockups */}
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

      {/* Customer Features - 6 Cards */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-block bg-orange-100 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Customer Features
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Everything Customers Love
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to create exceptional customer experiences and drive repeat orders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customerFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-on-scroll hover:transform hover:-translate-y-4 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 p-4 bg-gray-50 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                <div className="mt-6 flex items-center text-blue-600 group-hover:text-blue-700">
                  <span className="font-semibold">Learn more</span>
                  <ChevronDown className="w-5 h-5 ml-2 rotate-[-90deg] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Dashboard Section */}
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

      {/* Admin Features - 6 Cards */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-block bg-indigo-100 text-indigo-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Admin Features
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Complete Business Control
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced tools and insights to manage, optimize, and grow your restaurant business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {adminFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-on-scroll hover:transform hover:-translate-y-4 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 p-4 bg-gray-50 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                <div className="mt-6 flex items-center text-indigo-600 group-hover:text-indigo-700">
                  <span className="font-semibold">Explore feature</span>
                  <ChevronDown className="w-5 h-5 ml-2 rotate-[-90deg] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Types Infinite Scroll */}
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

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-block bg-green-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              FAQ
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about getting started
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg animate-on-scroll overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  className="w-full p-8 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-xl font-bold text-gray-900 pr-8">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-8 h-8 text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-8">
                    <div className="border-t pt-6">
                      <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
    </div>
  );
}

export default App;
