import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-[#0b0b0b] via-[#121212] to-black text-gray-300">
      
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-gray-700">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif text-white mb-4">
            Get Latest Updates & Offers
          </h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter and never miss exclusive deals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full sm:w-96 px-4 py-3 bg-transparent border border-gray-600 rounded-md
                         focus:outline-none focus:border-amber-500"
            />
            <button
              className="px-8 py-3 bg-amber-600 text-black font-semibold rounded-md
                         hover:bg-amber-500 transition"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-serif text-white mb-4">
            EMERALD BISTRO
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            A modern dining experience blending classic flavors with
            contemporary cuisine.
          </p>
          <div className="flex gap-5 text-gray-400">
            <FaFacebook className="hover:text-amber-500 cursor-pointer transition" />
            <FaInstagram className="hover:text-amber-500 cursor-pointer transition" />
            <FaYoutube className="hover:text-amber-500 cursor-pointer transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li
              onClick={() => scrollTo("home")}
              className="hover:text-amber-500 cursor-pointer transition"
            >
              Home
            </li>
            <li
              onClick={() => scrollTo("menu")}
              className="hover:text-amber-500 cursor-pointer transition"
            >
              Menu
            </li>
            <li
              onClick={() => scrollTo("reservation")}
              className="hover:text-amber-500 cursor-pointer transition"
            >
              Reservation
            </li>
            <li
              onClick={() => scrollTo("reservation")}
              className="hover:text-amber-500 cursor-pointer transition"
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4">
            Legal
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-amber-500 cursor-pointer transition">
              Privacy Policy
            </li>
            <li className="hover:text-amber-500 cursor-pointer transition">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4">
            Opening Hours
          </h3>
          <p className="text-gray-400">Mon – Fri: 12 PM – 10 PM</p>
          <p className="text-gray-400">Sat – Sun: 11 AM – 11 PM</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Emerald Bistro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
