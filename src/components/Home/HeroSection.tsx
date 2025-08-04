import React from 'react';
import { motion } from 'framer-motion';
import SparkleAnimation from '../UI/SparkleAnimation';
import perfumeImage from '../perfume.jpg';
import flowerImage from '../flower.jpeg';
import orangeImage from '../orange.jpeg';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-tr from-[#FFF9F4] via-[#F3E2D4] to-[#EAD6EE]">
      <SparkleAnimation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="font-heading tracking-wide text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Timeless Scents<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-peach-400">
                Curated
              </span><br />
              For Discerning Tastes
            </motion.h1>

            <motion.p
              className="font-garamond text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our exclusive collection of handcrafted fragrances, where each bottle tells a story of luxury and artistry.
            </motion.p>

            {/* New Button with Link and Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <Link
  to="/collection"
  className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-peach-300 to-blush-300 text-white text-lg font-semibold shadow-md hover:from-peach-400 hover:to-blush-400 transition-all duration-300"
>
  Explore Collection
</Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-garamond text-2xl text-gray-700 italic"
            >
              "Redefining Luxury, One Timeless Scent at a Time"
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-peach-100 to-blush-50 rounded-full p-8 shadow-lg">
                <img
               src={perfumeImage}
               alt="Uamore Signature Perfume"
               className="w-full h-full object-cover rounded-full mix-blend-multiply"
/>

              </div>

              {/* Organic Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -top-6 -right-6 bg-white rounded-full p-3 shadow-md border border-peach-100 backdrop-blur-md"
              >
                <div className="text-center w-24">
                  <div className="rounded-full mb-2 overflow-hidden">
                    <img 
                     src={orangeImage}
                      alt="Organic ingredients"
                      className="w-full h-auto rounded-full"
                    />
                  </div>
                  <div className="text-xs font-garamond text-gray-700">
                    Certified<br />Organic<br />Ingredients
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Clean vertical stack for secondary product images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -right-32 top-1/3 space-y-6 hidden lg:flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-white rounded-full p-2 shadow-md border border-peach-100 backdrop-blur-sm">
                <img
                 src={flowerImage}
                  alt="Organic"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="w-24 h-24 bg-white rounded-full p-2 shadow-md border border-peach-100 backdrop-blur-sm">
                <img
                  src="https://images.pexels.com/photos/1961799/pexels-photo-1961799.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Uamore Rose"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
