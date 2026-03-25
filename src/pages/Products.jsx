import React, { useState, useEffect, use } from "react";
import Navbar from "../components/Navbar";
import productsimg from "../assets/product.jpg"; 
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";
import { productList } from "./ProductsData";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {useNavigate} from "react-router-dom";

import { 
  ShieldCheck, Truck, Leaf, Award, 
  Search, X, Battery, Sun, Wind, 
  Zap, Cpu, Home, Grid, RefreshCw,
  Eye, ChevronLeft, ChevronRight, ArrowDown
} from "lucide-react";



// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

// Category icons mapping
const categoryIcons = {
  "All": Grid,
  "Hybrid Inverter": Zap,
  "Transformer Inverter": Cpu,
  "Charge Controller": RefreshCw,
  "Solar Panel": Sun,
  "Lithium Battery": Battery,
  "Deep Cycle Battery": Battery,
  "Power Station": Home,
  "Inverter AC": Wind,
};

// Get unique categories from productList
const categories = ["All", ...new Set(productList.map((p) => p.category))];

const Products = () => {
  const navigate  = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  // Scroll indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12); // 3x3 grid

  // Filter products based on category and search query
  const filteredProducts = productList.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Use 'smooth' for animated scrolling
    });
  }, [selectedCategory, searchQuery]); // Re-run when product ID changes


  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Get count of products in each category
  const getCategoryCount = (category) => {
    if (category === "All") return productList.length;
    return productList.filter(p => p.category === category).length;
  };

  // Smooth scroll to products section
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#16a34a] z-50 origin-left"
        style={{ scaleX }}
      />

      <div className="bg-gray-50 absolute inset-0">
        {/* ========== HERO SECTION ========== */}
        <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
          {/* Background Image with Parallax */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url(${productsimg})`,
              y: useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Power <span className="text-[#16a34a]">Beyond</span> Grid
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              High-performance inverters, lithium batteries, and solar solutions
              engineered for ultimate reliability and efficiency.
            </motion.p>

            {/* Scroll Indicator */}
            
          </div>
          <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center"
        >
          <p className="text-sm mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
        </section>

        {/* ========== BRAND FEATURES SECTION ========== */}
        {/* <motion.section 
          className="bg-white border-y border-gray-100 py-10 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Award, title: "Premium Quality", desc: "Tier-1 products only" },
              { icon: Truck, title: "Fast Shipping", desc: "2-5 business days" },
              { icon: ShieldCheck, title: "Warranty", desc: "Up to 25 years" },
              { icon: Leaf, title: "Eco Friendly", desc: "Carbon neutral" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 rounded-full bg-[#16a34a]/10 flex items-center justify-center mb-4 group-hover:bg-[#16a34a] transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-[#16a34a] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section> */}

        {/* ========== MAIN CONTENT WITH SIDEBAR ========== */}
        <section id="products-section" className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* ===== FILTER SIDEBAR ===== */}
            <div className="lg:w-80 shrink-0">
              {/* Mobile filter toggle */}
              <motion.button 
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                className="lg:hidden w-full bg-white rounded-xl shadow-sm p-4 mb-4 flex items-center justify-between"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-semibold">Select Product Category</span>
                <Search className="w-5 h-5 text-gray-500" />
              </motion.button>

              {/* Filter sidebar content */}
              <AnimatePresence>
                <motion.div 
                  className={`${isMobileFilterOpen ? 'block' : 'hidden'} lg:block bg-white rounded-2xl shadow-sm p-6 sticky top-24`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Search Bar */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Search</h3>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent"
                      />
                      {searchQuery && (
                        <motion.button
                          onClick={() => setSearchQuery("")}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <X className="w-4 h-4" />
                        </motion.button>
                      )}
                    </div>
                  </div>

                  {/* Categories with Icons */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => {
                        const Icon = categoryIcons[category] || Grid;
                        const isSelected = selectedCategory === category;
                        const count = getCategoryCount(category);
                        
                        return (
                          <motion.button
                            key={category}
                            onClick={() => {
                              setSelectedCategory(category);
                              setSearchParams({ category: category === "All" ? "" : category });
                              setIsMobileFilterOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                              isSelected
                                ? "bg-[#16a34a] text-white shadow-md"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Icon className={`w-5 h-5 ${isSelected ? "text-white" : "text-gray-500"}`} />
                            <span className="text-sm font-medium flex-1 text-left">{category}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              isSelected ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                            }`}>
                              {count}
                            </span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Items per page selector */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Items per page</h4>
                    <div className="flex gap-2">
                      {[6, 9, 12].map((num) => (
                        <motion.button
                          key={num}
                          onClick={() => {
                            setProductsPerPage(num);
                            setCurrentPage(1);
                          }}
                          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                            productsPerPage === num
                              ? "bg-[#16a34a] text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {num}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Active Filters Summary */}
                  <AnimatePresence>
                    {(selectedCategory !== "All" || searchQuery) && (
                      <motion.div 
                        className="mt-8 pt-6 border-t border-gray-100"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Active Filters</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCategory !== "All" && (
                            <motion.span 
                              className="inline-flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-medium"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                            >
                              {selectedCategory}
                              <motion.button 
                                onClick={() => {
                                  setSelectedCategory("All");
                                  setSearchParams({});
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <X className="w-3 h-3 ml-1" />
                              </motion.button>
                            </motion.span>
                          )}
                          {searchQuery && (
                            <motion.span 
                              className="inline-flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-medium"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                            >
                              "{searchQuery}"
                              <motion.button 
                                onClick={() => setSearchQuery("")}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <X className="w-3 h-3 ml-1" />
                              </motion.button>
                            </motion.span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ===== PRODUCTS GRID ===== */}
            <div className="flex-1">
              {/* Results Header */}
              <motion.div 
                className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {selectedCategory === "All" ? "All Products" : selectedCategory}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Showing {filteredProducts.length > 0 ? indexOfFirstProduct + 1 : 0} - {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <select 
                    className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#16a34a]"
                    value={productsPerPage}
                    onChange={(e) => {
                      setProductsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                  >
                    <option value={6}>6 per page</option>
                    <option value={9}>9 per page</option>
                    <option value={12}>12 per page</option>
                    <option value={18}>18 per page</option>
                  </select>
                  <span className="text-sm text-gray-500">
                    Page {currentPage} of {totalPages || 1}
                  </span>
                </div>
              </motion.div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <>
                  <motion.div 
                    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {currentProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        className="group bg-white rounded-2xl hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col"
                        variants={fadeInUp}
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative overflow-hidden h-56 bg-gray-100">
                          <motion.img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.7 }}
                            onError={(e) => {
                              console.error(`Error loading image for ${product.name}`);
                              e.target.src = 'path/to/fallback-image.jpg'; // Optional fallback image
                            }}
                          />
                          <motion.div 
                            className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          />
                          
                          {/* Category Badge */}
                          <motion.div 
                            className="absolute top-4 left-4"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <span className="bg-white/90 backdrop-blur-sm text-[#16a34a] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                              {product.category}
                            </span>
                          </motion.div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2">
                            {product.name}
                          </h3>
                          
                          {/* Product Specs from the data */}
                          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                            {product.specifications && (
                              <>
                                {product.specifications.power && (
                                  <span className="flex items-center gap-1">
                                    <Zap className="w-4 h-4" />
                                    {product.specifications.power}
                                  </span>
                                )}
                                {product.specifications.warranty && (
                                  <span className="flex items-center gap-1">
                                    <ShieldCheck className="w-4 h-4" />
                                    {product.specifications.warranty}
                                  </span>
                                )}
                              </>
                            )}
                          </div>

                          <motion.button 
                            className="mt-auto w-full bg-transparent text-[#16a34a] py-3.5 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 group/btn border border-[#16a34a]/20 hover:bg-[#16a34a] hover:text-white"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }} onClick={()=> navigate(`/products/${product.id}`)}
                          >
                            View Details
                            <Eye className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <motion.div 
                      className="flex items-center justify-between bg-white rounded-xl shadow-sm px-6 py-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          currentPage === 1
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        whileHover={currentPage !== 1 ? { x: -5 } : {}}
                        whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Previous
                      </motion.button>

                      <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => {
                          if (
                            number === 1 ||
                            number === totalPages ||
                            (number >= currentPage - 1 && number <= currentPage + 1)
                          ) {
                            return (
                              <motion.button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                                  currentPage === number
                                    ? "bg-[#16a34a] text-white"
                                    : "text-gray-700 hover:bg-gray-100"
                                }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {number}
                              </motion.button>
                            );
                          } else if (
                            number === currentPage - 2 ||
                            number === currentPage + 2
                          ) {
                            return (
                              <span key={number} className="text-gray-400">
                                ...
                              </span>
                            );
                          }
                          return null;
                        })}
                      </div>

                      <motion.button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          currentPage === totalPages
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        whileHover={currentPage !== totalPages ? { x: 5 } : {}}
                        whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
                      >
                        Next
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  )}
                </>
              ) : (
                /* Empty State */
                <motion.div 
                  className="bg-white rounded-2xl shadow-sm p-16 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <Search className="w-8 h-8 text-gray-400" />
                  </motion.div>
                  <p className="text-gray-500 text-lg mb-2">
                    No products match your criteria
                  </p>
                  <p className="text-gray-400 text-sm mb-6">
                    Try adjusting your filters or search query
                  </p>
                  <motion.button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSearchQuery("");
                      setSearchParams({});
                    }}
                    className="text-[#16a34a] font-medium hover:underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Clear all filters
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* ========== CALL TO ACTION SECTION ========== */}
        <motion.section 
          className="bg-linear-to-br from-gray-900 to-[#16a34a] text-white py-20 text-center px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-4xl font-light mb-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Need a <span className="font-bold">Custom Energy Setup</span>?
          </motion.h3>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Our energy consultants design tailored solutions for homes and
            businesses. Get a free consultation today.
          </motion.p>
          <motion.button 
            className="bg-white text-[#16a34a] hover:bg-gray-100 px-10 py-4 rounded-full font-semibold text-lg transition duration-300 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Speak to an Expert
          </motion.button>
        </motion.section>
        <Footer/>
      </div>
    </>
  );
};

export default Products;