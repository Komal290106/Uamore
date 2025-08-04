// src/pages/AboutUs.tsx
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white text-gray-800 min-h-screen py-24 px-6 sm:px-10 md:px-20 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-playfair text-5xl font-semibold text-center text-gray-900 mb-10">
          About Us
        </h1>

        <p className="font-garamond text-lg leading-relaxed mb-8">
          A premium scent means much more than just a fragrance – it is an experience,
          an emotion, and sophistication woven into the air. At <strong>Uamore</strong>,
          we create high-end perfumes that last through endless time, capturing that
          perfect harmony between style and sentiment. Every ingredient is an act of love,
          a homage to the classics, and a testament of a new definition of luxury.
        </p>

        <p className="font-garamond text-lg leading-relaxed mb-8">
          For the connoisseurs of perfume, <strong>Uamore</strong> is not just a scent,
          it is an experience, a signature, a story yet to be told.
        </p>

        <p className="font-garamond italic text-xl text-peach-600 text-center mb-12">
          Uamore — where scent becomes a soul-stirring masterpiece.
        </p>

        <h2 className="font-playfair text-3xl font-medium text-gray-800 mb-4">Our Values</h2>

        <p className="font-garamond text-lg leading-relaxed mb-6">
          At <strong>Uamore</strong>, we believe that a high-end fragrance is an unspoken language —
          a luxurious, timeless whisper of love, art, and sophistication. Rooted in the
          principles of premium perfumery, each scent is crafted with masterful artistry,
          harmonizing heritage with evocative modernity to unfold like a sonnet upon the skin.
        </p>

        <p className="font-garamond text-lg leading-relaxed">
          The luxury we pursue isn’t defined by material wealth, but by meaning,
          connection, and emotional depth. We believe true beauty is ageless,
          and class is often found in silence. <strong>Uamore</strong> is more than a fragrance —
          it's a timeless experience, a quiet yet powerful signature that lingers long after the moment passes.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUs;
