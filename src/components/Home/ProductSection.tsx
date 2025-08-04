import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../UI/ProductCard';
import { getTopSellingProducts } from '../../data/products';

const ProductSection: React.FC = () => {
  const topProducts = getTopSellingProducts(3);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Top-Selling Perfumes
          </h2>
          <div className="font-playfair text-3xl md:text-4xl text-gray-600 mb-2">
            The Most Popular <span className="italic text-primary-500">and Best</span>
          </div>
          <div className="font-playfair text-3xl md:text-4xl text-gray-600">
            Scents of the Year Collection
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;