import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiSun, FiBattery, FiZap, FiCpu } from "react-icons/fi";

import inverterImg from "../assets/inverter.jpg";
import batteryImg from "../assets/battery.jpg";
import panelImg from "../assets/solar-panel.jpg";
import controllerImg from "../assets/controller.jpg";
import generatorImg from "../assets/solar-generator.jpg";
import inverterAcImg from "../assets/inverter-ac.jpg";

const products = [
  {
    title: "Hybrid Inverters",
    description:
      "High-performance smart inverters designed for seamless power switching with advanced grid management.",
    image: inverterImg,
    icon: FiZap,
      color: "from-emerald-500 to-green-500",
  },
  {
    title: "Lithium Batteries",
    description:
      "Long-lasting lithium battery systems for reliable energy storage with extended cycle life.",
    image: batteryImg,
    icon: FiBattery,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Solar Panels",
    description:
      "High-efficiency solar panels engineered for maximum output even in low-light conditions.",
    image: panelImg,
    icon: FiSun,
  color: "from-emerald-500 to-green-500",
  },
  {
    title: "Charge Controllers",
    description:
      "Advanced MPPT controllers for optimized battery charging and system protection.",
    image: controllerImg,
    icon: FiCpu,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Solar Generators",
    description:
      "Portable solar generator systems for reliable backup power at home or on the move.",
    image: generatorImg,
    icon: FiBox,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Inverter AC",
    description:
      "Energy-efficient inverter air conditioners designed to reduce power consumption significantly.",
    image: inverterAcImg,
    icon: FiWind,
    color: "from-emerald-500 to-green-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const FeaturedProducts = () => {
  return (
    <section className="w-full bg-linear-to-b from-gray-50 to-white py-15 px-4 md:px-8 lg:px-16 xl:px-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        {/* <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold tracking-wide mb-4">
          Premium Solutions
        </span> */}
        {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-600">Products</span>
        </h2> */}
        <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Featured{' '}
          <span className="relative">
            <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-600">
              Products
            </span>
            <svg 
              className="absolute -bottom-2 left-0 w-full" 
              height="12" 
              viewBox="0 0 200 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M2 10C50 3 150 3 198 10" 
                stroke="#16a34a" 
                strokeWidth="4" 
                strokeLinecap="round"
                strokeDasharray="8 8"
              />
            </svg>
          </span>
        </h2>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed pt-7">
          Discover our cutting-edge solar technology — engineered for exceptional performance, 
          unmatched durability, and complete energy independence.
        </p>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {products.map((product, index) => {
          const Icon = product.icon;
          
          return (
            <motion.article
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden aspect-4/3">
                <div className={`absolute inset-0 bg-linear-to-t ${product.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Icon Badge */}
              
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Interactive Link */}
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-green-600 font-semibold text-sm group/link"
                  onClick={(e) => e.preventDefault()} // Replace with actual navigation
                >
                  <span className="relative">
                    Discover More
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover/link:w-full transition-all duration-300" />
                  </span>
                  <FiArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-linear-to-tl from-green-500/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.article>
          );
        })}
      </motion.div>

      {/* View All Products Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-16"
      >
        <motion.a
          href="/products"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span>Explore All Products</span>
          <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.a>
        
        {/* Optional: Secondary CTA */}
        <p className="text-gray-500 text-sm mt-4">
          30+ products available • Free consultation included
        </p>
      </motion.div>
    </section>
  );
};

export default FeaturedProducts;