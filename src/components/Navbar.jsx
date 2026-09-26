import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/Gemini_Generated_Image_pfhpkfpfhpkfpfhp.png';

const Navbar = ({ cartCount, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Boutique', path: '/' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-[#FDFBF7]/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-30 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 md:py-5 flex items-center justify-between">
        
        {/* Menu Hamburger (Mobile) */}
        <button 
          className="md:hidden p-2 text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer select-none">
          <img src={logo} alt="LazeBeauty" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `text-xs font-bold uppercase tracking-widest transition-colors ${
                  isActive ? 'text-black border-b-2 border-black pb-1' : 'text-gray-400 hover:text-black'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Bouton Panier */}
        <button
          onClick={onOpenCart}
          className="relative p-2 md:p-3 text-gray-800 hover:text-black hover:bg-gray-100 active:scale-95 rounded-full transition-all duration-200 flex items-center gap-2 group"
          aria-label="Ouvrir le panier"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 group-hover:stroke-2 transition-all">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center min-w-[20px] h-[20px] px-1 text-[10px] md:text-xs font-bold text-white bg-black rounded-full border-2 border-white transform translate-x-1/4 -translate-y-1/4 animate-bounce-short shadow-sm">
              {cartCount > 99 ? '99+' : cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 absolute w-full shadow-lg flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => 
                `block text-sm font-bold uppercase tracking-widest transition-colors py-2 ${
                  isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
