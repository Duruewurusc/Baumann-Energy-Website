import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Engr. Chinedu Okafor",
    role: "Facility Manager, Lekki",
    message:
      "Baumann Energy transformed our power system completely. Since installation, we’ve had zero downtime. Their professionalism is unmatched.",
  },
  {
    name: "Mrs. Adaeze Nwosu",
    role: "Homeowner, Abuja",
    message:
      "The inverter and battery system works flawlessly. Installation was clean and fast. I highly recommend Baumann Energy for premium solar solutions.",
  },
  {
    name: "Mr. Tunde Alabi",
    role: "CEO, Retail Chain",
    message:
      "From consultation to maintenance support, the experience has been exceptional. Their training program is also top-tier.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            What Our <span className="text-[#16a34a]">Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-[#16a34a] mx-auto mt-4"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Trusted by homeowners and businesses across Nigeria for premium solar solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <FaQuoteLeft className="text-[#16a34a] text-3xl mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                {testimonial.message}
              </p>

              {/* Stars */}
              <div className="flex text-[#16a34a] mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;