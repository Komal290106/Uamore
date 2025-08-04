import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import Button from './Button';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link to={`/product/${product.id}`}>
        <div className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden border border-blush-100">
          {/* Image */}
          <div className="relative overflow-hidden bg-gradient-blush rounded-t-3xl">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              whileHover={{ scale: 1.05 }}
            />
            {product.isOrganic && (
              <div className="absolute top-4 right-4">
                <span className="bg-white/90 backdrop-blur-sm text-green-600 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide shadow-sm">
                  100% Organic
                </span>
              </div>
            )}
            <div className="absolute top-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-medium text-gray-700">
                {(product.popularity / 10).toFixed(1)}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="p-6 space-y-4">
            <h3 className="font-playfair text-[20px] font-semibold text-gray-800 group-hover:text-blush-500 transition-colors duration-300 leading-tight">
              {product.name ?? 'Rose Élixir'}
            </h3>

            <ul className="text-[15px] font-garamond text-gray-700 list-disc list-inside leading-relaxed space-y-1">
              <li>Premium ingredients from global origins</li>
              <li>Chemical-free & dermatologically tested</li>
              <li>Hypoallergenic & FDA approved</li>
            </ul>

            <div className="flex items-center justify-between">
              <span className="font-poppins text-lg font-semibold text-blush-500">
                ${product.price}
              </span>
              <span className="text-sm text-gray-500">{product.volume}</span>
            </div>

            <Button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center space-x-2 text-white bg-gradient-to-r from-peach-300 to-blush-300 hover:from-peach-400 hover:to-blush-400 rounded-full transition-all duration-300 shadow-md py-2"
              size="sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="tracking-wide text-[15px]">Add to Cart</span>
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
