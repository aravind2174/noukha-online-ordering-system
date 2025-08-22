import React from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/faqData';

interface FAQSectionProps {
  openFaq: number | null;
  setOpenFaq: (index: number | null) => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ openFaq, setOpenFaq }) => {
  return (
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
  );
};

export default FAQSection;
