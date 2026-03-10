import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSun, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

// Sample Nigerian Solar Images (Replace with your real images)
import hero1 from "../assets/hero.jpg";
import hero2 from "../assets/hero-1.jpg";
import hero3 from "../assets/hero-2.jpg";
import blogo from "../assets/b.png"

const slides = [
  {
    image: hero1,
    title: "Power Your Home With Clean Solar Energy",
    subtitle: "Reliable solar solutions built for Nigerian homes & businesses.",
  },
  {
    image: hero2,
    title: "Affordable & Efficient Solar Systems",
    subtitle: "Cut electricity bills and enjoy 24/7 uninterrupted power.",
  },
  {
    image: hero3,
    title: "Trusted Solar Experts in Nigeria",
    subtitle: "Installation, maintenance and premium solar products.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showText, setShowText] = useState(false);

  const nextSlide = useCallback(() => {
    setImageLoaded(false);
    setShowText(false);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setImageLoaded(false);
    setShowText(false);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    // Small delay before showing text for smoother animation
    setTimeout(() => setShowText(true), 100);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  // Preload next image
  useEffect(() => {
    const nextIndex = current === slides.length - 1 ? 0 : current + 1;
    const img = new Image();
    img.src = slides[nextIndex].image;
  }, [current]);

  return (
    <section className="w-full h-screen overflow-hidden ">
      {/* Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt="Solar Energy Nigeria"
            className="w-full h-full object-cover"
            onLoad={handleImageLoad}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <AnimatePresence mode="wait">
          {showText && (
            <motion.div
              key={`text-${current}`}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="max-w-3xl"
            >
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center justify-center gap-2 mb-4"
              >
                <img src={blogo} className="w-12"/>
                <h2 className="text-2xl text-[#16a34a] font-bold tracking-wide uppercase">
                  Baumann <span className="text-white">Energy</span>
                </h2>
              </motion.div>

              <motion.h1 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold leading-tight mb-6"
              >
                {slides[current].title}
              </motion.h1>

              <motion.p 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-200 mb-8"
              >
                {slides[current].subtitle}
              </motion.p>

              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="/products"
                  className="bg-[#16a34a] hover:bg-green-700 transition px-8 py-4 rounded-lg font-semibold text-white shadow-lg"
                >
                  See Our Products
                </a>

                <a
                  href="/contact"
                  className="border-2 border-white hover:bg-white hover:text-[#16a34a] transition px-8 py-4 rounded-lg font-semibold"
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading indicator while image loads */}
        {!showText && imageLoaded && (
          <div className="text-white">Loading content...</div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:flex absolute bottom-10 left-0 right-0 justify-center gap-6 z-20">
        <button
          onClick={prevSlide}
          className="bg-white/10 hover:bg-[#16a34a] p-3 rounded-full backdrop-blur-md transition"
          disabled={!imageLoaded}
        >
          <HiOutlineChevronLeft className="text-white text-2xl" />
        </button>

        <button
          onClick={nextSlide}
          className="bg-white/10 hover:bg-[#16a34a] p-3 rounded-full backdrop-blur-md transition"
          disabled={!imageLoaded}
        >
          <HiOutlineChevronRight className="text-white text-2xl" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setImageLoaded(false);
              setShowText(false);
              setCurrent(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current 
                ? "bg-[#16a34a] w-8" 
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;