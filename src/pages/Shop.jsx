import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import UniverseSelector from '../components/UniverseSelector';
import heroBanner from '../assets/hero_banner.png';

const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [universe, setUniverse] = useState(() => localStorage.getItem('sov_universe') || 'parfum');
  const [activeCategory, setActiveCategory] = useState('TOUT');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const localRes = await fetch('/catalogue.json');
        const localData = await localRes.json();

        // Récupération des produits cosmétiques via l'API (on limite à 15 pour la performance)
        const apiRes = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
        const apiData = await apiRes.json();

        const externalCosmetics = apiData.slice(0, 15).map(p => ({
          id: `COSM-API-${p.id}`,
          universe: 'cosmetique',
          name: p.name,
          brand: p.brand,
          marque_propre: false,
          category: 'MAQUILLAGE',
          description: p.description?.replace(/<[^>]*>?/gm, '').slice(0, 100) + '...',
          image: p.api_featured_image,
          inStock: true,
          contenance: "Standard",
          type_peau: "Toutes peaux",
          benefices: ["Éclat", "Beauté"],
          ingredients_cles: ["Formulation API"],
          variants: [{ size: "Standard", price: Math.round(parseFloat(p.price) * 10) || 120 }]
        }));

        setProducts([...localData, ...externalCosmetics]);
      } catch (err) {
        console.error("Erreur chargement:", err);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem('sov_universe', universe);
    setActiveCategory('TOUT');
  }, [universe]);

  useEffect(() => {
    let result = products.filter(p => p.universe === universe);
    if (activeCategory !== 'TOUT') {
      result = result.filter(p => p.category.toUpperCase() === activeCategory.toUpperCase());
    }
    setFilteredProducts(result);
  }, [activeCategory, products, universe]);

  const filters = universe === 'parfum'
    ? ['TOUT', 'HOMME', 'FEMME', 'ÉDITIONS LIMITÉES']
    : ['TOUT', 'MAQUILLAGE', 'SERUM', 'SOINS'];

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        
        {/* Sélecteur d'Univers en tête (très visuel) */}
        <div className="mb-8">
          <UniverseSelector activeUniverse={universe} onChange={setUniverse} />
        </div>

        {/* Hero Image (Nouveau Banner) */}
        <div className="w-full h-[200px] md:h-[350px] rounded-3xl overflow-hidden mb-10 relative bg-gray-100 shadow-sm z-0">
          <img
            src={heroBanner}
            alt="Hero Parfumerie"
            className="w-full h-[120%] object-cover absolute left-0"
            style={{ top: '-10%', transform: `translateY(${scrollY * 0.1}px)` }}
          />
          {/* Overlay subtil */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Filtres de Catégories (Pills style) */}
        <div className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar flex-1 justify-start md:justify-center mb-8 pb-2">
          {filters.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-[10px] md:text-xs font-bold tracking-widest whitespace-nowrap transition-all uppercase rounded-full border ${activeCategory === category
                ? 'bg-black text-white border-black shadow-md'
                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-black'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={(variant) => addToCart(product, variant)}
              onClick={(product) => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
        onAdd={addToCart}
      />
    </>
  );
};

export default Shop;
