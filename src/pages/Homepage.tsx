import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import TaglineSection from '../components/Home/TaglineSection';
import ProductSection from '../components/Home/ProductSection';

const Homepage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <TaglineSection />
      <ProductSection />
    </div>
  );
};

export default Homepage;