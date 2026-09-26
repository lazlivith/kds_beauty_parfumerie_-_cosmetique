import React, { useEffect, useState } from 'react';
import logo from '../assets/Gemini_Generated_Image_pfhpkfpfhpkfpfhp.png';

const SplashScreen = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Commence à disparaître après 1.5s
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1500);

    // Supprime complètement le composant après 2s (le temps de l'animation de fondu)
    const removeTimer = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#FDFBF7] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${isFadingOut ? 'opacity-0' : 'opacity-100'
        }`}
    >
      <div className="flex flex-col items-center animate-zoom-in">
        {/* Image du Logo */}
        <div className="mb-8 w-56 h-56 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 overflow-hidden">
          <img src={logo} alt="LazeBeauty Logo" className="w-full h-full object-contain p-3" />
        </div>

        {/* Titre */}
        <h1 className="font-serif text-3xl md:text-4xl text-black tracking-tight mb-2">
          LazeBeauty
        </h1>
        <p className="font-serif italic text-gray-500 text-sm md:text-base">
          - Essence de Soi -
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
