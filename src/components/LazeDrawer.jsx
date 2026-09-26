import React, { useState } from 'react';
import { dualPrice, formatPrices, RATE_MAD_TO_FCFA } from '../utils/currency';

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeFromCart }) => {
    const [step, setStep] = useState(1); // 1 = Cart, 2 = Checkout
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [error, setError] = useState('');

    const totalMad = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const totalFcfa = Math.round(totalMad * RATE_MAD_TO_FCFA);

    // Remise à zéro quand on ferme ou on ouvre
    React.useEffect(() => {
        if (isOpen) {
            setStep(1);
            setError('');
        }
    }, [isOpen]);

    const handleCheckoutSubmit = () => {
        if (!name.trim() || !city.trim()) {
            setError('Veuillez remplir votre nom et votre ville.');
            return;
        }

        if (cart.length === 0) {
            setError('Votre panier est vide.');
            return;
        }

        // Génération d'un numéro de commande unique basé sur la date
        const orderNumber = `LAZE-${Date.now().toString().slice(-6)}`;
        const orderDate = new Date().toLocaleDateString('fr-FR', {
            day: '2-digit', month: 'long', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });

        const separator = "━━━━━━━━━━━━━━━━━━━━━";

        const lines = [
            "*LAZEBEAUTY — COMMANDE*",
            `_Réf : #${orderNumber}_`,
            `_Date : ${orderDate}_`,
            "",
            "*CLIENT*",
            `Nom : *${name.trim()}*`,
            `Ville : *${city.trim()}*`,
            "",
            "*VOTRE SÉLECTION*",
        ];

        const perfumes = cart.filter(i => i.universe === 'parfum');
        const cosmetics = cart.filter(i => i.universe === 'cosmetique');

        if (perfumes.length > 0) {
            lines.push("\n*HAUTE PARFUMERIE*");
            perfumes.forEach(item => {
                lines.push(`*${item.name}*`);
                lines.push(`    ${item.size} x${item.quantity} — *${item.price * item.quantity} MAD*`);
            });
        }

        if (cosmetics.length > 0) {
            const hasSignature = cosmetics.some(c => c.marque_propre);
            lines.push(`\n*SOINS${hasSignature ? ' SIGNATURE' : ''}*`);
            cosmetics.forEach(item => {
                lines.push(`*${item.name}*`);
                lines.push(`    ${item.size || item.contenance || 'Standard'} x${item.quantity} — *${item.price * item.quantity} MAD*`);
            });
        }

        lines.push("");
        lines.push("──────────────────");
        lines.push(`*TOTAL À RÉGLER*`);
        lines.push(`*${totalMad} MAD*`);
        lines.push(`*${totalFcfa.toLocaleString('fr-FR')} FCFA*`);
        lines.push("");
        lines.push(`_NB: Les frais de livraison seront confirmés lors de la validation de votre commande._`);
        lines.push("");
        lines.push("Merci pour votre confiance !");
        lines.push("_Commande via LazeBeauty Web App_");

        const message = lines.join('\n');
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "242068352999"; // WhatsApp Business LazeBeauty (+242 06 835 29 99)
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm transition-opacity"
                    onClick={onClose}
                />
            )}

            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#FDFBF7] z-50 transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header commun */}
                <div className="flex items-center justify-between p-6 bg-white border-b border-gray-100 rounded-b-3xl">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-black flex items-center gap-2">
                        {step === 1 ? 'Mon Panier' : 'Checkout & Send'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-black transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* STEP 1 : LE PANIER */}
                {step === 1 && (
                    <div className="flex-1 flex flex-col overflow-hidden">
                        <div className="flex-1 overflow-y-auto p-6">
                            {/* En-tête du tableau fictif pour coller à la maquette */}
                            <div className="flex justify-between text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-4 px-2">
                                <span>Item</span>
                                <span>Quantité</span>
                            </div>

                            {cart.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-40 text-gray-400 text-sm">
                                    Panier vide
                                </div>
                            ) : (
                                <ul className="space-y-4">
                                    {cart.map((item, index) => (
                                        <li key={`${item.id}-${item.size}-${index}`} className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-50">
                                            <div className="h-16 w-16 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0 p-1">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                            </div>

                                            <div className="flex-1">
                                                <h4 className="font-serif font-bold text-sm text-black uppercase">{item.name}</h4>
                                                <p className="text-[10px] text-gray-500 line-clamp-1">{item.description}</p>
                                                <p className="text-xs font-bold mt-1 text-black">{dualPrice(item.price)}</p>
                                            </div>

                                            {/* Pill Selecteur Quantité */}
                                            <div className="flex items-center gap-2">
                                                <div className="flex items-center border border-gray-200 rounded-full px-2 py-1 bg-gray-50">
                                                    <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)} className="px-2 text-gray-500 hover:text-black text-xs">-</button>
                                                    <span className="text-xs font-bold text-black min-w-[12px] text-center">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)} className="px-2 text-gray-500 hover:text-black text-xs">+</button>
                                                </div>

                                                <button
                                                    onClick={() => removeFromCart(item.id, item.size)}
                                                    className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                                                    title="Supprimer l'article"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="p-6 bg-white border-t border-gray-100 rounded-t-3xl">
                            {/* Total double devise */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Total estimé</span>
                                <div className="text-right">
                                    <p className="text-base font-extrabold text-black">{totalMad} MAD</p>
                                    <p className="text-xs font-semibold text-gray-400">{totalFcfa.toLocaleString('fr-FR')} FCFA</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setStep(2)}
                                disabled={cart.length === 0}
                                className="w-full bg-[#3B82F6] hover:bg-blue-600 disabled:opacity-50 text-white font-sans text-xs font-bold uppercase tracking-widest py-4 rounded-full transition-all shadow-md"
                            >
                                Commander
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 2 : CHECKOUT */}
                {step === 2 && (
                    <div className="flex-1 flex flex-col p-6 overflow-y-auto">
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50 flex flex-col gap-5">
                            {error && <div className="text-red-500 text-xs font-medium text-center">{error}</div>}

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Nom Complet</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="bg-transparent border-b border-gray-200 py-2 text-sm text-black focus:outline-none focus:border-black transition-colors"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Ville de livraison</label>
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="bg-transparent border-b border-gray-200 py-2 text-sm text-black focus:outline-none focus:border-black transition-colors"
                                />
                            </div>

                            <div className="mt-4">
                                <button
                                    onClick={handleCheckoutSubmit}
                                    className="w-full bg-[#3B82F6] hover:bg-blue-600 text-white font-sans text-xs font-bold uppercase tracking-widest py-4 px-4 rounded-full transition-all shadow-md leading-relaxed"
                                >
                                    Confirmer & Envoyer sur WhatsApp
                                </button>
                                <button
                                    onClick={() => setStep(1)}
                                    className="w-full mt-3 text-gray-400 hover:text-black text-[10px] font-bold tracking-widest uppercase transition-colors"
                                >
                                    Retour au panier
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
