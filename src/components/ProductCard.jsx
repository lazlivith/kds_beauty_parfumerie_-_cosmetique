import React from 'react';
import { dualPrice } from '../utils/currency';

const ProductCard = ({ product, onAdd, onClick }) => {
  // Ligne 1 (gras) : prix en MAD par taille
  const madString = product.variants.map(v => `${v.size}: ${v.price} MAD`).join('  |  ');
  // Ligne 2 (gris) : prix en FCFA par taille
  const fcfaString = product.variants.map(v => `${v.size}: ${Math.round(v.price * 65.5).toLocaleString('fr-FR')} FCFA`).join('  |  ');

  return (
    <div className="bg-white rounded-[24px] overflow-hidden flex flex-col p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#f0eee9]">

      {/* Zone cliquable pour ouvrir les détails */}
      <div
        className="cursor-pointer group flex-1 flex flex-col"
        onClick={() => onClick(product)}
      >
        {/* Container Image - Fond très clair */}
        <div className={`relative h-64 w-full bg-[#fcfbfa] rounded-xl overflow-hidden mb-5 ${!product.inStock ? 'grayscale opacity-60' : ''}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-black/70 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-sm">
                Épuisé
              </span>
            </div>
          )}
        </div>

        {/* Textes */}
        <div className="flex flex-col items-center text-center flex-1 px-2">
          <h3 className="font-serif text-xl font-bold text-black uppercase tracking-wide mb-1">
            {product.name}
          </h3>
          <p className="font-sans text-sm text-gray-500 mb-4 line-clamp-1">
            {product.description}
          </p>

          <div className="mt-auto mb-5 bg-[#fdfbf7] px-4 py-3 rounded-2xl border border-[#f0eee9] w-full text-center">
            <span className="font-sans text-xs font-semibold text-black tracking-widest block">
              {madString}
            </span>
            <span className="font-sans text-[10px] text-gray-400 mt-1 block">
              {fcfaString}
            </span>
          </div>
        </div>
      </div>

      {/* Bouton Ajouter au Panier - Noir en forme de pilule */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (product.inStock) onAdd(product.variants[0]);
        }}
        disabled={!product.inStock}
        className={`w-full font-sans text-xs font-bold uppercase tracking-[0.2em] py-4 rounded-full transition-all shadow-md ${!product.inStock
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-[#1A1A1A] hover:bg-black text-white active:scale-[0.98]"
          }`}
      >
        {product.inStock ? "Ajouter au panier" : "Indisponible"}
      </button>
    </div>
  );
};

export default ProductCard;
