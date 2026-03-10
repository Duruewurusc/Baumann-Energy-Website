import React from "react";
import ctaimg from "../assets/cta.jpg"

// Sample stock image URL for green-blue energy vibe
const backgroundImage = ctaimg;

const CTASection = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-20 relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-6xl mx-auto text-center text-white px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Power Your World with Clean Energy
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Discover our high-end solar products, installations, and maintenance services.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="contact"
            className="bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us
          </a>
          <a
            href="products"
            className="px-8 py-4 border border-white hover:bg-white hover:text-black transition font-semibold rounded-full"
          >
            See Our Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;