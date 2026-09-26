import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CartDrawer from './components/CartDrawer';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import './index.css';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Animation du titre de l'onglet pour attirer l'attention
  useEffect(() => {
    const originalTitle = "LazeBeauty";
    let interval;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        interval = setInterval(() => {
          document.title = document.title === originalTitle
            ? "Revenez nous voir ! ✨"
            : originalTitle;
        }, 2000);
      } else {
        clearInterval(interval);
        document.title = originalTitle;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(interval);
    };
  }, []);

  const addToCart = (product, selectedVariant) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.id === product.id && item.size === selectedVariant.size
      );
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.size === selectedVariant.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, ...selectedVariant, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, size, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId, size);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId, size) => {
    setCart(prevCart =>
      prevCart.filter(item => !(item.id === productId && item.size === size))
    );
  };

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <div className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans pb-24 relative overflow-hidden flex flex-col">
        
        {/* Navigation Globale */}
        <Navbar cartCount={cartItemCount} onOpenCart={() => setIsCartOpen(true)} />

        {/* Zone de contenu des pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Shop addToCart={addToCart} />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Floating Cart Button (Global) */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-1/2 translate-x-1/2 md:translate-x-0 md:right-8 z-30 bg-white border border-gray-200 text-black px-6 py-4 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex items-center gap-3 font-sans font-bold text-xs tracking-widest uppercase hover:scale-105 transition-transform"
        >
          MON PANIER
          <span className="bg-gray-100 text-black w-6 h-6 rounded-full flex items-center justify-center font-bold">
            {cartItemCount}
          </span>
        </button>

        {/* Tiroir Panier Global */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />

        <Footer />
      </div>
    </>
  );
}

export default App;
