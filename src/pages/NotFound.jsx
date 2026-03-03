import React from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiTool } from "react-icons/fi";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero.jpg";

const NotFound = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            hero1,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-6 max-w-2xl"
      >
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-6">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-green-500 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-300 mb-8">
          The page you’re looking for doesn’t exist or is currently under
          construction. We’re working hard to power up this section.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-semibold transition duration-300"
          >
            <FiArrowLeft />
            Back to Home
          </Link>

          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 border border-green-500 text-green-400 hover:bg-green-600 hover:text-white px-6 py-3 font-semibold transition duration-300"
          >
            <FiTool />
            Contact Support
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;