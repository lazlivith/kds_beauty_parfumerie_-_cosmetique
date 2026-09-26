import React from 'react';
import logo from '../assets/Gemini_Generated_Image_pfhpkfpfhpkfpfhp.png';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl font-sans text-gray-800">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 uppercase tracking-wider">À propos de LazeBeauty</h1>
        <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">L'Élégance à l'état pur</p>
      </div>

      <div className="mb-12 rounded-3xl overflow-hidden shadow-sm relative h-[300px] md:h-[400px] bg-gray-100">
        <img src={logo} alt="LazeBeauty Philosophie" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-8 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Notre Histoire</h2>
          <p className="text-gray-600">
            [Texte par défaut : Décrivez ici les origines de LazeBeauty. Quand la marque a-t-elle été créée ? Quelle était votre vision initiale ? LazeBeauty est née de la passion pour l'excellence et le raffinement...]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Notre Philosophie</h2>
          <p className="text-gray-600">
            [Texte par défaut : Expliquez votre engagement envers la qualité. Nous croyons que la beauté est un art. C'est pourquoi nous sélectionnons avec soin les meilleurs ingrédients pour nos créations et choisissons méticuleusement les marques partenaires...]
          </p>
        </section>

        <section className="bg-gray-50 p-8 rounded-3xl mt-8">
          <h2 className="text-lg font-bold uppercase tracking-widest mb-4 text-center">Nos Valeurs</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-600 max-w-md mx-auto">
            <li>Authenticité des produits</li>
            <li>Excellence du service client</li>
            <li>Sélection premium et rigoureuse</li>
            <li>[Ajouter d'autres valeurs...]</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
