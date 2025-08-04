import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import logo from '../logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { state: cartState } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'For Him', path: '/men' },
    { name: 'For Her', path: '/women' },
    // { name: 'Bespoke', path: '/bespoke' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Uamore Luxury Perfumes"
              className="h-16 w-auto transition-all duration-300 hover:opacity-90"
            />
            <span className="ml-3 font-serif text-2xl font-light tracking-widest text-gray-900 hidden md:block">
              UAMORE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-serif text-lg tracking-wide transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-peach-600 font-medium'
                    : 'text-gray-900 hover:text-peach-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-900 hover:text-peach-500 transition-colors duration-300"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              to="/cart"
              className="p-2 text-gray-900 hover:text-peach-500 transition-colors duration-300 relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartState.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-peach-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartState.items.length}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <button
                onClick={logout}
                className="font-serif text-gray-900 hover:text-peach-500 transition-colors duration-300 px-3 py-1 border border-transparent hover:border-peach-200 rounded-lg"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="p-2 text-gray-900 hover:text-peach-500 transition-colors duration-300"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-900 hover:text-peach-500 transition-colors duration-300"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 px-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search our collection..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-peach-300 focus:border-transparent font-serif"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-lg font-serif transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-peach-600 font-medium bg-peach-50 rounded-lg'
                    : 'text-gray-800 hover:text-peach-500 hover:bg-gray-50 rounded-lg'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <Link
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 text-gray-800 hover:text-peach-500"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Your Cart ({cartState.items.length})</span>
              </Link>
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-gray-800 hover:text-peach-500"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-800 hover:text-peach-500"
                >
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
