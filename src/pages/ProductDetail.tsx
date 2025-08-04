import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, ShoppingBag, Heart } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/UI/Button';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const product = getProductById(id || '');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-ivory-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-primary-500 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-poppins">Back to Collection</span>
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-peach rounded-3xl p-8 shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            
            {product.isOrganic && (
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                100% Organic
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-poppins text-gray-600">{(product.popularity / 10).toFixed(1)}</span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="font-poppins text-gray-600 capitalize">{product.category}</span>
                <span className="text-gray-300">•</span>
                <span className="font-poppins text-gray-600">{product.volume}</span>
              </div>
              <p className="font-poppins text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="font-poppins text-4xl font-bold text-primary-600">
                ${product.price}
              </span>
              <span className="text-gray-500 line-through text-xl">
                ${Math.round(product.price * 1.3)}
              </span>
            </div>

            {/* Scent Notes */}
            <div className="space-y-4">
              <h3 className="font-playfair text-2xl font-semibold text-gray-800">Scent Notes</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <h4 className="font-poppins font-semibold text-gray-700 mb-2">Top Notes</h4>
                  <p className="text-sm text-gray-600">{product.scentNotes.top.join(', ')}</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <h4 className="font-poppins font-semibold text-gray-700 mb-2">Heart Notes</h4>
                  <p className="text-sm text-gray-600">{product.scentNotes.middle.join(', ')}</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <h4 className="font-poppins font-semibold text-gray-700 mb-2">Base Notes</h4>
                  <p className="text-sm text-gray-600">{product.scentNotes.base.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="flex-1 flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Cart</span>
              </Button>
              
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  isWishlisted
                    ? 'border-red-300 bg-red-50 text-red-600'
                    : 'border-gray-300 text-gray-600 hover:border-red-300 hover:text-red-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-600' : ''}`} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;