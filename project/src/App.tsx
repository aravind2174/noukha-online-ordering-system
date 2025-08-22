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
  DollarSign
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

  const customerFeatures = [
    {
      icon: <Utensils className="w-8 h-8 text-green-600" />,
      title: "Browse Menu",
      description: "Interactive menu with categories, images, and customization options"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-green-600" />,
      title: "Easy Ordering",
      description: "Simple cart management with real-time order tracking"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      title: "Secure Payment",
      description: "Multiple payment methods with secure checkout process"
    }
  ];

  const adminFeatures = [
    {
      icon: <BarChart3 className="w-6 h-6 text-green-600" />,
      title: "Sales Analytics",
      description: "Track revenue, popular items, and customer trends"
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Customer Management",
      description: "Manage customer profiles and order history"
    },
    {
      icon: <Bell className="w-6 h-6 text-green-600" />,
      title: "Order Notifications",
      description: "Real-time alerts for new orders and updates"
    },
    {
      icon: <Settings className="w-6 h-6 text-green-600" />,
      title: "Menu Management",
      description: "Easy menu updates, pricing, and availability"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      title: "Revenue Tracking",
      description: "Detailed financial reports and insights"
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "Order History",
      description: "Complete order logs and customer data"
    }
  ];

  const restaurantTypes = [
    "Fine Dining", "Fast Food", "Cafes", "Pizza Places", "Asian Cuisine", 
    "Mexican Food", "Italian Restaurant", "Bakery", "Seafood", "Steakhouse",
    "Vegetarian", "Food Trucks", "Breakfast Spot", "Ice Cream Shop", "Sushi Bar"
  ];

  const faqs = [
    {
      question: "How quickly can I set up my restaurant's online ordering system?",
      answer: "You can have your restaurant online in less than 24 hours. Our team will help you set up your menu, customize your storefront, and train your staff."
    },
    {
      question: "What payment methods do you support?",
      answer: "We support all major payment methods including credit/debit cards, PayPal, Apple Pay, Google Pay, and cash on delivery options."
    },
    {
      question: "Do you charge commission on orders?",
      answer: "No hidden fees! We offer transparent pricing with low monthly subscription fees and no commission on your orders, unlike other platforms."
    },
    {
      question: "Can customers track their orders in real-time?",
      answer: "Yes! Customers receive SMS and email notifications with real-time updates on their order status from preparation to delivery."
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.pixabay.com/vimeo/663041464/restaurant-74928.mp4?width=1280&hash=e6b1d5f4b08b6f0c0d6b8c4c8f4d8c4d" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Restaurant with 
              <span className="text-green-400 block mt-2">Smart Online Ordering</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Boost revenue, streamline operations, and delight customers with our all-in-one ordering platform designed specifically for restaurants.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Book a Demo
            </button>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 animate-bounce delay-100">
          <Utensils className="w-8 h-8 text-green-400 opacity-70" />
        </div>
        <div className="absolute top-32 right-16 animate-bounce delay-300">
          <ShoppingCart className="w-8 h-8 text-green-400 opacity-70" />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-500">
          <CreditCard className="w-8 h-8 text-green-400 opacity-70" />
        </div>
      </section>

      {/* Feature Section 1 - Customer Dashboard */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Beautiful Customer Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Give your customers a seamless ordering experience with our intuitive interface
            </p>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Monitor Mockup */}
            <div className="relative flex-1 animate-on-scroll">
              <div className="relative">
                {/* Monitor */}
                <div className="bg-gray-800 rounded-t-2xl p-6 shadow-2xl">
                  <div className="bg-white rounded-lg h-80 md:h-96 p-6 relative overflow-hidden">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Dashboard</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-100 p-4 rounded-lg">
                          <Pizza className="w-8 h-8 text-green-600 mb-2" />
                          <p className="text-sm font-medium">Browse Menu</p>
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg">
                          <ShoppingCart className="w-8 h-8 text-green-600 mb-2" />
                          <p className="text-sm font-medium">Easy Checkout</p>
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg">
                          <Clock className="w-8 h-8 text-green-600 mb-2" />
                          <p className="text-sm font-medium">Order Tracking</p>
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg">
                          <Star className="w-8 h-8 text-green-600 mb-2" />
                          <p className="text-sm font-medium">Reviews</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Monitor Base */}
                <div className="bg-gray-700 h-8 w-full rounded-b-lg"></div>
                <div className="bg-gray-600 h-12 w-32 mx-auto rounded-b-lg"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-float">
                <Utensils className="w-6 h-6 text-green-600 mb-2" />
                <p className="text-sm font-medium">Menu Items</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-float delay-200">
                <TrendingUp className="w-6 h-6 text-green-600 mb-2" />
                <p className="text-sm font-medium">Order Status</p>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative animate-on-scroll delay-200">
              <div className="bg-gray-800 rounded-3xl p-4 shadow-2xl">
                <div className="bg-white rounded-2xl h-80 w-48 p-4 relative overflow-hidden">
                  <div className="text-center">
                    <div className="w-full h-8 bg-green-600 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">OrderEasy</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-100 h-12 rounded-lg flex items-center px-3">
                        <Pizza className="w-5 h-5 text-green-600 mr-2" />
                        <span className="text-xs">Pizza Margherita</span>
                      </div>
                      <div className="bg-gray-100 h-12 rounded-lg flex items-center px-3">
                        <Coffee className="w-5 h-5 text-green-600 mr-2" />
                        <span className="text-xs">Iced Coffee</span>
                      </div>
                      <div className="bg-green-600 h-10 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-medium">Order Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Customer Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Customer Dashboard Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything your customers need for a perfect ordering experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customerFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-on-scroll hover:transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section 3 - Admin Dashboard */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Admin Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete control over your restaurant operations with real-time insights
            </p>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Phone Mockup */}
            <div className="relative animate-on-scroll">
              <div className="bg-gray-800 rounded-3xl p-4 shadow-2xl">
                <div className="bg-white rounded-2xl h-80 w-48 p-4 relative overflow-hidden">
                  <div className="text-center">
                    <div className="w-full h-8 bg-green-600 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Admin Panel</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-100 h-8 rounded-lg flex items-center px-3">
                        <BarChart3 className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-xs">Analytics</span>
                      </div>
                      <div className="bg-gray-100 h-8 rounded-lg flex items-center px-3">
                        <Users className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-xs">Customers</span>
                      </div>
                      <div className="bg-gray-100 h-8 rounded-lg flex items-center px-3">
                        <Settings className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-xs">Settings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitor Mockup */}
            <div className="relative flex-1 animate-on-scroll delay-200">
              <div className="relative">
                {/* Monitor */}
                <div className="bg-gray-800 rounded-t-2xl p-6 shadow-2xl">
                  <div className="bg-white rounded-lg h-80 md:h-96 p-6 relative overflow-hidden">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-600 text-white p-4 rounded-lg">
                          <BarChart3 className="w-8 h-8 mb-2" />
                          <p className="text-sm font-medium">Sales: $2,450</p>
                          <p className="text-xs opacity-80">Today</p>
                        </div>
                        <div className="bg-blue-600 text-white p-4 rounded-lg">
                          <Users className="w-8 h-8 mb-2" />
                          <p className="text-sm font-medium">Orders: 43</p>
                          <p className="text-xs opacity-80">Active</p>
                        </div>
                        <div className="bg-purple-600 text-white p-4 rounded-lg">
                          <Clock className="w-8 h-8 mb-2" />
                          <p className="text-sm font-medium">Avg Time: 25m</p>
                          <p className="text-xs opacity-80">Delivery</p>
                        </div>
                        <div className="bg-orange-600 text-white p-4 rounded-lg">
                          <Star className="w-8 h-8 mb-2" />
                          <p className="text-sm font-medium">Rating: 4.8</p>
                          <p className="text-xs opacity-80">Customer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Monitor Base */}
                <div className="bg-gray-700 h-8 w-full rounded-b-lg"></div>
                <div className="bg-gray-600 h-12 w-32 mx-auto rounded-b-lg"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-float">
                <Bell className="w-6 h-6 text-green-600 mb-2" />
                <p className="text-sm font-medium">New Order</p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-float delay-300">
                <DollarSign className="w-6 h-6 text-green-600 mb-2" />
                <p className="text-sm font-medium">Revenue Up</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 4 - Admin Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Admin Dashboard Features
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools to manage and grow your restaurant business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {adminFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-on-scroll hover:transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Types Scroll */}
      <section className="py-16 bg-green-600 overflow-hidden">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Perfect for Every Restaurant Type
          </h2>
        </div>
        <div className="relative">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...restaurantTypes, ...restaurantTypes].map((type, index) => (
              <div key={index} className="flex items-center mx-8">
                <ChefHat className="w-6 h-6 text-white mr-3" />
                <span className="text-white text-xl font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We have answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-green-600 transition-transform duration-200 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform Your Restaurant?
            </h2>
            <p className="text-xl md:text-2xl text-green-100 mb-10 leading-relaxed">
              Join thousands of restaurants already using our platform to increase revenue and delight customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-green-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300">
                Book a Demo
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center text-green-100">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>No setup fees • 30-day free trial • Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-10 left-10 animate-float">
          <Utensils className="w-8 h-8 text-white opacity-20" />
        </div>
        <div className="absolute top-20 right-20 animate-float delay-200">
          <ShoppingCart className="w-8 h-8 text-white opacity-20" />
        </div>
        <div className="absolute bottom-10 left-20 animate-float delay-400">
          <CreditCard className="w-8 h-8 text-white opacity-20" />
        </div>
      </section>
    </div>
  );
}

export default App;