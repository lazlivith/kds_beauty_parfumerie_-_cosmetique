import React from 'react';

const Faq = () => {
  const faqs = [
    {
      question: "Quels sont les délais de livraison ?",
      answer: "[Texte par défaut : Nos livraisons s'effectuent généralement entre 24h et 48h ouvrées selon votre ville de résidence. Un coursier vous contactera pour confirmer l'horaire de passage.]"
    },
    {
      question: "Quels sont les frais de livraison ?",
      answer: "[Texte par défaut : Les frais de livraison sont calculés en fonction de votre zone géographique. Le tarif exact vous sera communiqué lors de la validation de votre commande sur WhatsApp.]"
    },
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "[Texte par défaut : Nous acceptons principalement le paiement à la livraison (Cash on Delivery). Vous pouvez régler votre commande en espèces directement auprès de notre livreur.]"
    },
    {
      question: "Les parfums et cosmétiques sont-ils authentiques ?",
      answer: "[Texte par défaut : Absolument. LazeBeauty s'engage à ne proposer que des produits 100% authentiques. Nos marques propres sont formulées avec soin, et nos marques importées proviennent de distributeurs officiels.]"
    },
    {
      question: "Puis-je retourner ou échanger un produit ?",
      answer: "[Texte par défaut : Pour des raisons d'hygiène, les produits cosmétiques et les parfums ouverts ne peuvent être ni repris ni échangés. Si un produit arrive endommagé, veuillez nous contacter immédiatement à la réception.]"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl font-sans text-gray-800">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 uppercase tracking-wider">FAQ & Livraison</h1>
        <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Tout ce que vous devez savoir</p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-base font-bold uppercase tracking-widest mb-3 text-black">
              {faq.question}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center bg-gray-50 p-8 rounded-3xl">
        <h3 className="text-lg font-bold uppercase tracking-widest mb-2">Une autre question ?</h3>
        <p className="text-gray-500 mb-6 text-sm">Notre équipe est là pour vous répondre directement via WhatsApp.</p>
        <a 
          href="/contact" 
          className="inline-block bg-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
        >
          Nous contacter
        </a>
      </div>
    </div>
  );
};

export default Faq;
