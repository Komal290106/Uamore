import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const gradientBg = "bg-gradient-to-br from-[#FFF9F4] via-[#FDEEE8] to-[#F8F0FA]";

  if (state.items.length === 0) {
    return (
      <div className={`min-h-screen ${gradientBg} pt-24 pb-24`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <ShoppingBag className="w-24 h-24 text-peach-200 mx-auto mb-6" />
            <h1 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
              Your Cart is Empty
            </h1>
            <p className="font-garamond text-lg text-gray-600 mb-8 max-w-md">
              Discover our luxury perfume collection and find your signature scent
            </p>
            <Link
              to="/collection"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-peach-300 to-blush-300 text-white font-semibold shadow hover:from-peach-400 hover:to-blush-400 transition-all duration-300"
            >
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${gradientBg} pt-24 pb-24`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-4xl font-bold text-gray-800 mb-8"
        >
          Your Luxury Selection
        </motion.h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {state.items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-md hover:shadow-lg p-6 border border-peach-100 transition-all"
              >
                <div className="flex items-start space-x-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-2xl"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-playfair text-xl font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <p className="font-garamond text-sm text-gray-500">{item.volume}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3 bg-peach-50 rounded-full px-3 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-gray-600 hover:text-peach-500 transition"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-poppins text-gray-800 min-w-[1.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-gray-600 hover:text-peach-500 transition"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="font-poppins text-lg font-semibold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-6 h-fit border border-peach-100"
          >
            <h2 className="font-playfair text-2xl font-semibold text-gray-800 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between font-garamond">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900">${state.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-garamond">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-900">Free</span>
              </div>
              <div className="flex justify-between font-garamond">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-900">${(state.total * 0.1).toFixed(2)}</span>
              </div>
              <hr className="border-gray-200 my-4" />
              <div className="flex justify-between font-playfair text-xl font-semibold">
                <span className="text-gray-800">Total</span>
                <span className="text-gray-900">${(state.total * 1.1).toFixed(2)}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full px-6 py-3 rounded-full bg-gradient-to-r from-peach-300 to-blush-300 text-white font-semibold text-center hover:from-peach-400 hover:to-blush-400 transition-all duration-300"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/collection"
              className="block w-full mt-4 px-6 py-3 text-center font-medium text-gray-800 hover:text-peach-500 transition"
            >
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
