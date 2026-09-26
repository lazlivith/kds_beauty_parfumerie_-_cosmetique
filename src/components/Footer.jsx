import React from 'react';
import logo from '../assets/Gemini_Generated_Image_pfhpkfpfhpkfpfhp.png';

const Footer = () => {
    const brands = [
        { name: "Yves Rocher", logo: null }, // Remplacez null par le chemin : "/brands/yves-rocher.png"
        { name: "Dior", logo: null },
        { name: "Chanel", logo: null },
        { name: "Guerlain", logo: null },
        { name: "Lancôme", logo: null },
        { name: "Estée Lauder", logo: null },
        { name: "Clarins", logo: null },
        { name: "L'Oréal", logo: null },
        { name: "LazeBeauty", logo: logo }
    ];

    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            {/* Section Logos des Marques */}
            <div className="container mx-auto px-4 mb-16">
                <h3 className="text-center font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-10">
                    Nos Marques Partenaires
                </h3>

                <div className="relative overflow-hidden group">
                    {/* Overlay dégradé pour l'effet de fondu sur les côtés */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

                    <div className="flex animate-scroll whitespace-nowrap gap-12 items-center hover:[animation-play-state:paused]">
                        {/* On double la liste pour un défilement infini fluide */}
                        {[...brands, ...brands].map((brand, index) => (
                            brand.logo ? (
                                <img
                                    key={index}
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="h-8 md:h-12 w-auto grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500 px-4 object-contain cursor-pointer"
                                />
                            ) : (
                                <span key={index} className="text-gray-300 hover:text-black transition-colors duration-500 font-serif text-xl md:text-2xl italic tracking-tighter inline-block cursor-default px-4">
                                    {brand.name}
                                </span>
                            )
                        ))}
                    </div>
                </div>
            </div>

            {/* Section Bas de page */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center border-t border-gray-50 pt-12">
                    <img src={logo} alt="LazeBeauty" className="h-12 w-auto mb-6 opacity-80" />

                    {/* Icônes de Réseaux Sociaux */}
                    <div className="flex gap-6 mb-8">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-colors duration-300" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors duration-300" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                            </svg>
                        </a>
                    </div>

                    <div className="flex gap-8 mb-8 text-[10px] font-bold tracking-widest uppercase text-gray-500">
                        <a href="#" className="hover:text-black transition-colors">À propos</a>
                        <a href="#" className="hover:text-black transition-colors">Livraison</a>
                        <a href="https://wa.me/242068352999" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Contact WhatsApp</a>
                    </div>

                    <div className="text-center space-y-2">
                        <p className="text-[10px] text-gray-400 tracking-widest uppercase">
                            © {new Date().getFullYear()} LazeBeauty — Essence de Soi
                        </p>
                        <p className="text-[9px] text-gray-300 italic">
                            Plateforme de commande sécurisée via WhatsApp
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;