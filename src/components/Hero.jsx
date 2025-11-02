import React from 'react';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 mb-6">
            <Star size={14} className="text-amber-500" />
            Trusted by 10,000+ homes
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Elevate your space with premium printed canvas art
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Museum-grade prints, vivid color, and timeless styles. Made to order and ready to hang.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#collections" className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-white font-semibold shadow-sm hover:bg-gray-900">
              Shop bestsellers
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50">
              Learn more
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Handcrafted locally
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Archival inks
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Free returns
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop"
              alt="Canvas 1"
              className="aspect-[4/5] w-full rounded-xl object-cover shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1501959915551-4e8a04a3fd9e?q=80&w=1200&auto=format&fit=crop"
              alt="Canvas 2"
              className="mt-8 aspect-[4/5] w-full rounded-xl object-cover shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop"
              alt="Canvas 3"
              className="-mt-8 aspect-[4/5] w-full rounded-xl object-cover shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1526312426976-593c2d0b1504?q=80&w=1200&auto=format&fit=crop"
              alt="Canvas 4"
              className="aspect-[4/5] w-full rounded-xl object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
