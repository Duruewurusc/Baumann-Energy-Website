import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaArrowLeft, FaStar, FaBolt, FaShieldAlt, FaRulerCombined, FaWeightHanging, FaCalendarAlt, FaMicrochip, FaPlug, FaChartLine } from 'react-icons/fa';
import { productList } from '../components/ProductsData'; // Adjust path as needed
import ReactPixel from "react-facebook-pixel";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productList.find(p => p.id === parseInt(id));

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Use 'smooth' for animated scrolling
    });
  }, [id]); // Re-run when product ID changes


  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <button
          onClick={() => navigate('/products')}
          className="bg-[#16a34a] text-white px-6 py-2 rounded-lg hover:bg-[#15803d] transition-colors"
        >
          Back to Products
        </button>
      </div>
    );
  }

    const handleWhatsAppClick = (e) => {
    e.preventDefault(); // stop instant navigation
    console.log("WhatsApp button clicked, tracking event...");
  
    ReactPixel.track("WhatsApp Order", {
      content_name: product.name,
    });
  
    // small delay to ensure Meta receives the event
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 300);
  };
  

  // Format phone number for WhatsApp (remove any non-numeric characters)
  const phoneNumber = '2348139285321'; // Replace with your actual business WhatsApp number
  const whatsappMessage = `Hello, I'm interested in purchasing the ${product.name}. Could you please provide more information about pricing and availability?`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-[#16a34a] transition-colors mb-6 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Products</span>
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Product Image - Bold and Prominent */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-gray-100 to-gray-200 shadow-lg border-4 border-[#16a34a]/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Category Badge */}
              <span className="absolute top-4 left-4 bg-[#16a34a] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                {product.category}
              </span>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>
              
              {/* Rating Placeholder */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="fill-current" />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">(24 reviews)</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 border-l-4 border-[#16a34a] pl-4">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FaBolt className="text-[#16a34a]" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#16a34a] rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FaMicrochip className="text-[#16a34a]" />
                  Technical Specifications
                </h3>
                <div className="bg-gray-50 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b border-gray-200 pb-2 last:border-0">
                      <span className="text-gray-500 capitalize flex items-center gap-2">
                        {key === 'weight' && <FaWeightHanging className="text-gray-400" />}
                        {key === 'dimensions' && <FaRulerCombined className="text-gray-400" />}
                        {key === 'warranty' && <FaCalendarAlt className="text-gray-400" />}
                        {(!['weight', 'dimensions', 'warranty'].includes(key)) && <FaChartLine className="text-gray-400" />}
                        {key}:
                      </span>
                      <span className="font-medium text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Button - WhatsApp */}
              <a
                href={whatsappUrl}
                onClick={handleWhatsAppClick}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <FaWhatsapp className="text-2xl" />
                <span className="text-lg">Order Now on WhatsApp</span>
              </a>
              <p className="text-xs text-gray-400 text-center mt-3">
                Click to get pricing, availability, and expert consultation
              </p>
            </div>
          </div>
        </div>

        {/* Related Products Section - Optional */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaPlug className="text-[#16a34a]" />
            You Might Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productList
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <div
                  key={relatedProduct.id}
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/product/${relatedProduct.id}`);
                      }}
                      className="mt-2 text-[#16a34a] text-xs font-medium hover:underline"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 bg-white rounded-xl p-6 shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-3xl text-[#16a34a] mb-2" />
              <span className="font-semibold text-gray-800">5 Year Warranty</span>
              <span className="text-xs text-gray-500">On all inverters</span>
            </div>
            <div className="flex flex-col items-center">
              <FaBolt className="text-3xl text-[#16a34a] mb-2" />
              <span className="font-semibold text-gray-800">Free Installation</span>
              <span className="text-xs text-gray-500">On selected products</span>
            </div>
            <div className="flex flex-col items-center">
              <FaWhatsapp className="text-3xl text-[#16a34a] mb-2" />
              <span className="font-semibold text-gray-800">24/7 Support</span>
              <span className="text-xs text-gray-500">WhatsApp assistance</span>
            </div>
            <div className="flex flex-col items-center">
              <FaStar className="text-3xl text-[#16a34a] mb-2" />
              <span className="font-semibold text-gray-800">Trusted Brand</span>
              <span className="text-xs text-gray-500">1000+ happy customers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;