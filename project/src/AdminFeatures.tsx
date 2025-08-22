import React from 'react';
import { ChevronDown } from 'lucide-react';
import { adminFeatures } from '../data/adminFeatures';

const AdminFeatures: React.FC = () => {
  return (
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
          {adminFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-on-scroll hover:transform hover:-translate-y-4 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 p-4 bg-gray-50 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                <div className="mt-6 flex items-center text-indigo-600 group-hover:text-indigo-700">
                  <span className="font-semibold">Explore feature</span>
                  <ChevronDown className="w-5 h-5 ml-2 rotate-[-90deg] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdminFeatures;
