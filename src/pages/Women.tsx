import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/UI/ProductCard';
import { getProductsByCategory } from '../data/products';

const Women: React.FC = () => {
  const womenProducts = getProductsByCategory('women');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F4] via-[#FDEEE8] to-[#F8F0FA] pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Women's Collection
          </h1>
          <p className="font-garamond text-lg text-gray-600 max-w-2xl mx-auto">
            Discover fragrances that celebrate femininity — floral, elegant, and exquisitely handcrafted.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {womenProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {/* Fallback if no products */}
        {womenProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="font-garamond text-xl text-gray-500 italic">
              No fragrances available in this category at the moment.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Women;
