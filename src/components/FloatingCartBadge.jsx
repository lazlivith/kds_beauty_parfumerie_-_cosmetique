import React from 'react';

const FloatingCartBadge = ({ count, onClick }) => {
    if (count === 0) return null;

    return (
        <button
            onClick={onClick}
            className="fixed bottom-6 right-6 z-40 bg-black text-white p-4 rounded-full shadow-2xl active:scale-90 transition-all md:hidden flex items-center justify-center group"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>

            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white">
                {count}
            </span>
        </button>
    );
};

export default FloatingCartBadge;