import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">About CanvasCo</h3>
          <p className="mt-3 text-sm text-gray-600">
            We create premium, ready-to-hang canvas prints that transform your space. Printed with archival inks on museum-grade canvas.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Support</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-gray-900">Care Instructions</a></li>
            <li><a href="#" className="hover:text-gray-900">Size Guide</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Get updates</h3>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="Your email" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-gray-300 focus:outline-none" />
            <button type="submit" className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900">Join</button>
          </form>
          <p className="mt-2 text-xs text-gray-500">By subscribing you agree to our Privacy Policy.</p>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} CanvasCo. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
