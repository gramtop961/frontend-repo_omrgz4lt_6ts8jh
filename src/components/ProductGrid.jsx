import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Abstract Sunrise',
    price: 79,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Botanical Serenity',
    price: 89,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Coastal Breeze',
    price: 99,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Monochrome Geometry',
    price: 74,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Golden Dunes',
    price: 109,
    rating: 5.0,
    image:
      'https://images.unsplash.com/photo-1535905496755-26ae35d0ae54?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Minimal Lines',
    price: 69,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop',
  },
];

const ProductCard = ({ item }) => {
  return (
    <div className="group rounded-xl border border-gray-100 bg-white p-3 shadow-sm hover:shadow-md transition">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={item.image}
          alt={item.title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-gray-900">{item.title}</h3>
          <div className="mt-1 flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill={i < Math.round(item.rating) ? 'currentColor' : 'none'} />
            ))}
            <span className="ml-1 text-xs text-gray-500">{item.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold">${item.price}</p>
          <p className="text-xs text-gray-500">from</p>
        </div>
      </div>
      <button className="mt-4 w-full rounded-lg bg-black py-2 text-sm font-semibold text-white hover:bg-gray-900">
        Add to cart
      </button>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Bestselling Canvas Prints</h2>
          <p className="mt-1 text-gray-600">Curated designs loved by interior enthusiasts.</p>
        </div>
        <a href="#" className="hidden sm:inline-block text-sm font-semibold text-gray-900 underline-offset-4 hover:underline">View all</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} item={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
