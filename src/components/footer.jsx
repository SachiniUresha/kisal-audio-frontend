import React from 'react';

export default function Footer() {


  return (
    <footer className="bg-[#0d111c] text-[#cfd6e1] py-10">
      <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between md:space-x-8">
        {/* Company Info */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h2 className="text-500 text-yellow-400 font-bold text-2xl font-bold mb-4">Kisal Audio</h2>
          <p>
            Kisal Audio is your trusted partner for high-quality sound and lighting solutions. We bring life to your events with professional-grade equipment and expert service tailored to your needs.         
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/items" className="hover:underline">Our Products</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/3">
          <h3 className="text-white text-xl font-semibold mb-4">Contact Info</h3>
          <p className="mb-2">📍 No. 18, Galle Road, Colombo, Sri Lanka</p>
          <p className="mb-2">📞 +94 11 200 300, +94 11 200 400</p>
          <p className="mb-2">✉️ info@kisalaudio.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-[#2c303a] pt-4 text-center text-sm">
        © 2025 Kisal Audio. All rights reserved.
      </div>
    </footer>
  );
}


