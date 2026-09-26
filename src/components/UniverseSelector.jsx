import React from 'react';

const UniverseSelector = ({ activeUniverse, onChange }) => {
    return (
        <div className="flex justify-center mb-10 px-4">
            <div className="bg-white/40 backdrop-blur-xl p-1.5 rounded-full border border-white/50 shadow-lg flex gap-2">
                <button
                    onClick={() => onChange('parfum')}
                    className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 ease-out ${activeUniverse === 'parfum'
                            ? 'bg-black text-white shadow-xl scale-105'
                            : 'text-gray-400 hover:text-black hover:bg-white/50'
                        }`}
                >
                    Haute Parfumerie
                </button>
                <button
                    onClick={() => onChange('cosmetique')}
                    className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 ease-out ${activeUniverse === 'cosmetique'
                            ? 'bg-[#B4936A] text-white shadow-xl scale-105'
                            : 'text-gray-400 hover:text-[#B4936A] hover:bg-white/50'
                        }`}
                >
                    Soins Cosmétiques
                </button>
            </div>
        </div>
    );
};

export default UniverseSelector;