import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl font-sans text-gray-800">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 uppercase tracking-wider">Contactez-nous</h1>
        <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Nous sommes à votre écoute</p>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12 text-center">
        <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Service Client</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Pour toute question concernant nos produits, votre commande, ou pour un conseil personnalisé, n'hésitez pas à nous contacter. Notre équipe vous répondra dans les plus brefs délais.
        </p>

        <div className="flex flex-col gap-4">
          <a 
            href="https://wa.me/242068352999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#20bd5a] transition-colors shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 1.944 6.608L.234 23.766l5.35-1.782A11.94 11.94 0 0 0 11.944 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zm.054 22A10 10 0 0 1 3.518 19.34l-.454-.268-3.155 1.05.845-3.076-.295-.47A10 10 0 1 1 12 22zm5.412-7.464c-.296-.15-1.758-.868-2.03-.968-.27-.1-.47-.15-.667.15-.2.298-.768.968-.94 1.168-.173.2-.346.224-.643.074a8.1 8.1 0 0 1-2.413-1.49 8.94 8.94 0 0 1-1.67-2.094c-.174-.3-.018-.462.13-.61.134-.134.298-.348.446-.522.15-.175.2-.3.3-.5.1-.2.05-.374-.025-.524-.075-.15-.668-1.61-.914-2.206-.24-.582-.486-.502-.668-.51-.174-.008-.374-.01-.574-.01a1.09 1.09 0 0 0-.793.37c-.273.3-1.042 1.02-1.042 2.485 0 1.467 1.067 2.885 1.215 3.084.15.2 2.08 3.25 5.093 4.544.717.308 1.277.492 1.713.63.72.228 1.376.195 1.892.118.577-.086 1.758-.72 2.006-1.414.248-.694.248-1.29.174-1.414-.074-.124-.274-.2-.57-.35z"/>
            </svg>
            Contactez-nous sur WhatsApp
          </a>

          <a 
            href="mailto:contact@lazebeauty.com" 
            className="flex items-center justify-center gap-3 bg-gray-100 text-black px-6 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            [Texte par défaut : Envoyer un Email]
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        <div className="p-6 bg-gray-50 rounded-2xl">
          <h3 className="font-bold uppercase tracking-widest text-sm mb-2">Horaires</h3>
          <p className="text-gray-500 text-sm">Lundi - Samedi</p>
          <p className="text-gray-500 text-sm">09:00 - 18:00</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-2xl">
          <h3 className="font-bold uppercase tracking-widest text-sm mb-2">Localisation</h3>
          <p className="text-gray-500 text-sm">[Texte par défaut : Pointe-Noire, Congo]</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
