import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-700 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-[#16a34a] mb-4">
            Baumann Energy
          </h2>
          <p className="text-gray-600">
            Delivering premium solar solutions across Nigeria. From product sales, installations, maintenance, to training, we power your world reliably.
          </p>

          {/* Social Icons */}
          <div className="flex mt-6 space-x-4">
            <a href="#" className="text-gray-600 hover:text-[#16a34a] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#16a34a] transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#16a34a] transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#16a34a] transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Products</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-[#16a34a] transition">Inverters</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#16a34a] transition">Batteries</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#16a34a] transition">Solar Panels</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#16a34a] transition">Accessories</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-[#16a34a] transition">Installation</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#16a34a] transition">Maintenance & Repairs</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#16a34a] transition">Training Programs</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Contact Us</h4>
          <p className="text-gray-600 mb-2">baumannenergysolar@gmail.com</p>
          <p className="text-gray-600 mb-2">+2348139285321</p>
          <p className="text-gray-600">Lagos, Nigeria</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Baumann Energy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;