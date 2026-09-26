import React, { useState } from 'react';

const ProductModal = ({ isOpen, onClose, product, onAdd }) => {
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null);

  if (!isOpen || !product) return null;

  const scentNotes = product.notes || ['Note de tête', 'Note de cœur', 'Note de fond'];
  const gallery = product.gallery || [product.image, product.image, product.image];

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-x-0 bottom-0 md:inset-0 md:flex md:items-center md:justify-center z-50 animate-slide-up md:animate-fade-in pointer-events-none">
        <div className="bg-[#FDFBF7] w-full md:w-[480px] rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] pointer-events-auto">

          {/* Header Modale */}
          <div className="flex justify-between items-center p-5 border-b border-gray-100">
            <h3 className="font-sans font-bold text-xs tracking-widest uppercase text-black">
              Product Detail
            </h3>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="overflow-y-auto p-6 flex flex-col gap-8">

            {/* Produit Principal */}
            <div className="flex flex-col items-center text-center">
              <div className={`w-48 h-64 mb-6 rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm p-4 ${!product.inStock ? 'grayscale opacity-50' : ''}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="font-serif text-3xl font-medium text-black mb-2">{product.name}</h2>
              {!product.inStock && (
                <span className="text-red-500 font-sans text-[10px] font-bold uppercase tracking-widest mb-2">
                  Actuellement en rupture de stock
                </span>
              )}
              <p className="font-sans text-sm text-gray-500">{product.description}</p>
            </div>

            {/* Affichage Conditionnel Parfum vs Cosmétique */}
            {product.universe === 'parfum' ? (
              <div>
                <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-gray-400 mb-4 text-center">
                  Scent Notes
                </h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {scentNotes.map((note, idx) => (
                    <span key={idx} className="bg-white border border-gray-200 text-[10px] uppercase tracking-widest font-medium px-4 py-2 rounded-full text-black shadow-sm">
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-2xl border border-gray-100 text-center">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter mb-1">Type de Peau</p>
                    <p className="text-xs font-medium">{product.type_peau}</p>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-gray-100 text-center">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter mb-1">Bénéfices</p>
                    <p className="text-xs font-medium">{product.benefices?.join(', ')}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Ingrédients Clés</h4>
                  <p className="text-xs text-gray-600 italic">{product.ingredients_cles?.join(' • ')}</p>
                </div>
              </div>
            )}

            {/* Variant Selection (Nouveau) */}
            <div>
              <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-gray-400 mb-4 text-center">
                Choisir le format
              </h4>
              <div className="flex justify-center gap-4">
                {product.variants.map((v, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2 rounded-xl border transition-all ${selectedVariant?.size === v.size ? 'border-black bg-black text-white' : 'border-gray-200 bg-white text-black'}`}
                  >
                    {v.size} - {v.price} MAD
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-gray-400 mb-4 text-center">
                Gallery
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {gallery.map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-xl overflow-hidden border border-gray-100 bg-white">
                    <img src={img} alt="gallery" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Actions Button */}
          <div className="p-6 bg-white border-t border-gray-100 mt-auto">
            <button
              onClick={() => {
                onAdd(product, selectedVariant);
                onClose();
              }}
              disabled={!product.inStock}
              className={`w-full font-sans text-xs font-bold uppercase tracking-[0.2em] py-5 rounded-full transition-all shadow-lg ${!product.inStock
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-900 active:scale-[0.98]"
                }`}
            >
              {product.inStock ? `Ajouter au panier — ${selectedVariant?.price} MAD` : "Indisponible"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
