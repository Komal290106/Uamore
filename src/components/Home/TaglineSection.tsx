import React from 'react';
import { motion } from 'framer-motion';

const TaglineSection: React.FC = () => {
  const taglines = [
    'Fragrance Defined',
    'Scent of Elegance', 
    'Perfume Essence',
    'Aroma Inspiration',
    'Signature Scent'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
            className="flex space-x-16 whitespace-nowrap"
          >
            {[...taglines, ...taglines].map((tagline, index) => (
              <span
                key={index}
                className="font-playfair text-2xl md:text-3xl font-semibold text-gray-400 flex items-center"
              >
                {tagline}
                <span className="mx-8 text-primary-300">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;