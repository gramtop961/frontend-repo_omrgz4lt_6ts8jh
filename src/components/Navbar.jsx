import React from 'react';
import { ShoppingCart, Paintbrush } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white">
            <Paintbrush size={18} />
          </span>
          <span className="text-xl font-semibold tracking-tight">CanvasCo</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#collections" className="hover:text-gray-900 transition">Collections</a>
          <a href="#about" className="hover:text-gray-900 transition">About</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
        </div>
        <button className="relative inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium hover:border-gray-300 hover:bg-gray-50">
          <ShoppingCart size={18} />
          <span>Cart</span>
          <span className="ml-1 rounded-full bg-black px-2 py-0.5 text-xs text-white">0</span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
