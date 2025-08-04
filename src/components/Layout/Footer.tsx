import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand & Contact */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center mb-3 hover:opacity-90 transition-all">
  <img
    src={logo}
    alt="Uamore Luxury Perfumes"
    className="h-14 w-auto"
  />
  <span className="ml-3 font-serif text-3xl font-light text-gray-900 tracking-wide">
    UAMORE
  </span>
</Link>
            <p className="font-garamond italic text-gray-600 text-center md:text-left">
              “Redefining Luxury, One Timeless Scent at a Time.”
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-500" />
                <a href="tel:+919588376534" className="font-garamond text-gray-600 hover:text-peach-500 transition-colors">
                  +91 9588376534
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-500" />
                <a href="mailto:help@uamore.com" className="font-garamond text-gray-600 hover:text-peach-500 transition-colors">
                  help@uamore.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                <p className="font-garamond text-gray-600 text-sm leading-relaxed">
                  Essenceara Luxe Pvt Ltd,<br />
                  House No. 195/2, Goel Kunj,<br />
                  Near Gulati Road, Parao Enclave,<br />
                  Samalkha, Panipat 132101
                </p>
              </div>
            </div>
          </div>

          {/* Discover Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-playfair text-lg font-medium text-gray-800 mb-4">
              Discover
            </h3>
            <ul className="space-y-3 text-center">
              <li><a href="/men" className="font-garamond text-gray-600 hover:text-peach-500 transition-colors">For Him</a></li>
              <li><a href="/women" className="font-garamond text-gray-600 hover:text-peach-500 transition-colors">For Her</a></li>
              <li><a href="/collection" className="font-garamond text-gray-600 hover:text-peach-500 transition-colors">Full Collection</a></li>
              <li><a href="#" className="font-garamond text-gray-600 hover:text-peach-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-5 mb-6">
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-500 hover:text-peach-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-500 hover:text-peach-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-500 hover:text-peach-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="text-center md:text-right w-full max-w-xs">
              <p className="font-garamond text-sm text-gray-500 mb-2">
                Join our fragrance journey
              </p>
              <div className="flex w-full">
                <input
                  type="email"
                  placeholder="Your email"
                  className="font-garamond text-sm px-3 py-2 border border-gray-200 rounded-l-md focus:outline-none focus:ring-1 focus:ring-peach-300 w-full"
                />
                <button className="bg-peach-400 hover:bg-peach-500 text-white font-garamond px-4 py-2 rounded-r-md transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-10"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="font-garamond text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} UAMORE by Essenceara Luxe Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="font-garamond text-sm text-gray-500 hover:text-peach-500 transition">Privacy</a>
            <a href="#" className="font-garamond text-sm text-gray-500 hover:text-peach-500 transition">Terms</a>
            <a href="#" className="font-garamond text-sm text-gray-500 hover:text-peach-500 transition">Wholesale</a>
            <a href="#" className="font-garamond text-sm text-gray-500 hover:text-peach-500 transition">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
