import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Layout/Navbar';
import Homepage from './pages/Homepage';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Men from './pages/Men';
import Women from './pages/Women';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/ScrollToTop'; // ✅ path assumed
import AboutUs from './pages/AboutUs'; 

// 🧠 Wrap children with layout visibility logic
function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const hideLayout = ['/login', '/signup'].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

// 🌐 Main App
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop /> {/* 🔥 Always scrolls to top on route change */}
          <LayoutWrapper>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </LayoutWrapper>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
