import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <ProductGrid />
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-gray-50 p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Why our canvas prints?</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold">Gallery-quality materials</h3>
              <p className="mt-2 text-sm text-gray-600">Premium cotton canvas and archival inks for rich, lasting color.</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold">Ready to hang</h3>
              <p className="mt-2 text-sm text-gray-600">Solid wood frames and hardware included with every print.</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold">Handcrafted with care</h3>
              <p className="mt-2 text-sm text-gray-600">Made to order by artisans for exceptional quality control.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
