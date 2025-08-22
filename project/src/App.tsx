import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import CustomerExperience from './components/CustomerExperience';
import CustomerFeatures from './components/CustomerFeatures';
import AdminDashboard from './components/AdminDashboard';
import AdminFeatures from './components/AdminFeatures';
import RestaurantTypes from './components/RestaurantTypes';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import './styles/animations.css';

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

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <CustomerExperience />
      <CustomerFeatures />
      <AdminDashboard />
      <AdminFeatures />
      <RestaurantTypes />
      <FAQSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <CTASection />
    </div>
  );
}

export default App;
