import React, { useState } from "react";
import Navbar from "../components/Navbar";
import productsimg from "../assets/product.jpg"; 
import inverter15kva from "../assets/products/inverter-15kva.jpg";

import { 
  ShieldCheck, Truck, Leaf, Award, 
  Search, X, Battery, Sun, Wind, 
  Zap, Cpu, Home, Grid, RefreshCw,
  Eye, ChevronLeft, ChevronRight
} from "lucide-react";

const products = [
  // Hybrid Inverters
  { name: "15kVA 48V Hybrid Inverter", category: "Hybrid Inverter" },
  { name: "10.2kVA 48V Hybrid Inverter", category: "Hybrid Inverter" },
  { name: "8kW 48V Hybrid Inverter", category: "Hybrid Inverter" },
  { name: "6.2kW 48V Hybrid Inverter", category: "Hybrid Inverter" },
  { name: "4.2kVA 24V / 48V Hybrid Inverter", category: "Hybrid Inverter" },

  // Transformer Base
  { name: "10kVA 48V Transformer Base", category: "Transformer Inverter" },
  { name: "7.5kVA 48V Transformer Base", category: "Transformer Inverter" },
  { name: "5kVA 48V Transformer Base", category: "Transformer Inverter" },
  { name: "3.5kVA 24V Transformer Base", category: "Transformer Inverter" },

  // Charge Controllers
  { name: "120Ah 48V Charge Controller", category: "Charge Controller" },
  { name: "100Ah 48V Charge Controller", category: "Charge Controller" },
  { name: "80Ah 48V Charge Controller", category: "Charge Controller" },
  { name: "60Ah 48V Charge Controller", category: "Charge Controller" },
  { name: "40/45Ah 24V Charge Controller", category: "Charge Controller" },

  // Solar Panels
  { name: "620W Solar Panel", category: "Solar Panel" },
  { name: "560W Solar Panel", category: "Solar Panel" },
  { name: "400W Solar Panel", category: "Solar Panel" },
  { name: "350W Solar Panel", category: "Solar Panel" },

  // Lithium Batteries
  { name: "32kWh 51V Lithium Battery", category: "Lithium Battery" },
  { name: "20kWh 51V Lithium Battery", category: "Lithium Battery" },
  { name: "17.5kWh 51V Lithium Battery", category: "Lithium Battery" },
  { name: "7.5kWh 48V Lithium Battery", category: "Lithium Battery" },

  // Deep Cycle
  { name: "200Ah Deep Cycle Battery", category: "Deep Cycle Battery" },
  { name: "220Ah Tubular Battery", category: "Deep Cycle Battery" },

  // Power Stations
  { name: "3kWh 51V Power Station", category: "Power Station" },
  { name: "6kWh 61V Power Station", category: "Power Station" },

  // Inverter AC
  { name: "1HP Inverter AC", category: "Inverter AC" },
  { name: "1.5HP Inverter AC", category: "Inverter AC" },
  { name: "2HP Inverter AC", category: "Inverter AC" },
];

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

// Get unique categories
const categories = ["All", ...new Set(products.map((p) => p.category))];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9); // 3x3 grid

  // Filter products based on category and search query
  const filteredProducts = products.filter((product) => {
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

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Group filtered products by category for display
  const filteredProductsByCategory = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <>
    <Navbar />
    <div className="bg-gray-50 absolute inset-0  ">
      {/* ========== HERO SECTION ========== */}
      
      <section className="relative h-200 flex items-center justify-center text-center text-white ">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              `url(${productsimg})`,
            // backgroundColor: "#111827",
            // backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Power <span className="text-[#16a34a]">Beyond</span> Grid
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            High-performance inverters, lithium batteries, and solar solutions
            engineered for ultimate reliability and efficiency.
          </p>
        </div>
      </section>

      {/* ========== BRAND FEATURES SECTION ========== */}
      <section className="bg-white border-y border-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-[#16a34a]/10 flex items-center justify-center mb-4 group-hover:bg-[#16a34a] transition-colors duration-300">
              <Award className="w-8 h-8 text-[#16a34a] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Premium Quality</h3>
            <p className="text-sm text-gray-600">Tier-1 products only</p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-[#16a34a]/10 flex items-center justify-center mb-4 group-hover:bg-[#16a34a] transition-colors duration-300">
              <Truck className="w-8 h-8 text-[#16a34a] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Fast Shipping</h3>
            <p className="text-sm text-gray-600">2-5 business days</p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-[#16a34a]/10 flex items-center justify-center mb-4 group-hover:bg-[#16a34a] transition-colors duration-300">
              <ShieldCheck className="w-8 h-8 text-[#16a34a] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Warranty</h3>
            <p className="text-sm text-gray-600">Up to 25 years</p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-[#16a34a]/10 flex items-center justify-center mb-4 group-hover:bg-[#16a34a] transition-colors duration-300">
              <Leaf className="w-8 h-8 text-[#16a34a] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Eco Friendly</h3>
            <p className="text-sm text-gray-600">Carbon neutral</p>
          </div>
        </div>
      </section>

      {/* ========== MAIN CONTENT WITH SIDEBAR ========== */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ===== FILTER SIDEBAR ===== */}
          <div className="lg:w-80 shrink-0">
            {/* Mobile filter toggle */}
            <button 
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="lg:hidden w-full bg-white rounded-xl shadow-sm p-4 mb-4 flex items-center justify-between"
            >
              <span className="font-semibold">Filter Products</span>
              <Search className="w-5 h-5 text-gray-500" />
            </button>

            {/* Filter sidebar content */}
            <div className={`${isMobileFilterOpen ? 'block' : 'hidden'} lg:block bg-white rounded-2xl shadow-sm p-6 sticky top-24`}>
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
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
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
                    
                    return (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsMobileFilterOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                          isSelected
                            ? "bg-[#16a34a] text-white shadow-md"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isSelected ? "text-white" : "text-gray-500"}`} />
                        <span className="text-sm font-medium flex-1 text-left">{category}</span>
                        {isSelected && (
                          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                            {category === "All" ? products.length : products.filter(p => p.category === category).length}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Items per page selector */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Items per page</h4>
                <div className="flex gap-2">
                  {[6, 9, 12].map((num) => (
                    <button
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
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Filters Summary */}
              {(selectedCategory !== "All" || searchQuery) && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Active Filters</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory !== "All" && (
                      <span className="inline-flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-medium">
                        {selectedCategory}
                        <button onClick={() => setSelectedCategory("All")}>
                          <X className="w-3 h-3 ml-1" />
                        </button>
                      </span>
                    )}
                    {searchQuery && (
                      <span className="inline-flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-medium">
                        "{searchQuery}"
                        <button onClick={() => setSearchQuery("")}>
                          <X className="w-3 h-3 ml-1" />
                        </button>
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ===== PRODUCTS GRID ===== */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {selectedCategory === "All" ? "All Products" : selectedCategory}
                </h2>
                <p className="text-sm text-gray-500">
                  Showing {indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
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
                  Page {currentPage} of {totalPages}
                </span>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {currentProducts.map((product, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col"
                    >
                      <div className="relative overflow-hidden h-56 bg-gray-100">
                        <img
                          src={inverter15kva}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur-sm text-[#16a34a] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                            {product.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2">
                          {product.name}
                        </h3>
                        
                        {/* Product Specs Placeholder */}
                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Zap className="w-4 h-4" />
                            High Efficiency
                          </span>
                          <span className="flex items-center gap-1">
                            <ShieldCheck className="w-4 h-4" />
                            5 Yr Warranty
                          </span>
                        </div>

                        <button className="mt-auto w-full bg-transparent text-[#16a34a] py-3.5 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 group/btn">
                          {/* <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" /> */}
                          View Details ...
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between bg-white rounded-xl shadow-sm px-6 py-4">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 1}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        currentPage === 1
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </button>

                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => {
                        // Show limited page numbers with ellipsis
                        if (
                          number === 1 ||
                          number === totalPages ||
                          (number >= currentPage - 1 && number <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={number}
                              onClick={() => paginate(number)}
                              className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                                currentPage === number
                                  ? "bg-[#16a34a] text-white"
                                  : "text-gray-700 hover:bg-gray-100"
                              }`}
                            >
                              {number}
                            </button>
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

                    <button
                      onClick={nextPage}
                      disabled={currentPage === totalPages}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        currentPage === totalPages
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* Empty State */
              <div className="bg-white rounded-2xl shadow-sm p-16 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg mb-2">
                  No products match your criteria
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  Try adjusting your filters or search query
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="text-[#16a34a] font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========== CALL TO ACTION SECTION ========== */}
      <section className="bg-linear-to-br from-gray-900 to-[#16a34a] text-white py-20 text-center px-6">
        <h3 className="text-4xl font-light mb-4">
          Need a <span className="font-bold">Custom Energy Setup</span>?
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
          Our energy consultants design tailored solutions for homes and
          businesses. Get a free consultation today.
        </p>
        <button className="bg-white text-[#16a34a] hover:bg-gray-100 px-10 py-4 rounded-full font-semibold text-lg transition duration-300 shadow-2xl transform hover:scale-105">
          Speak to an Expert
        </button>
      </section>
    </div></>
  );
};

export default Products;