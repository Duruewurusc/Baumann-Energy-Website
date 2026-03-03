import React from "react";
import { motion } from "framer-motion";
import { HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineGlobe } from "react-icons/hi";
import team from "../assets/team B.jpg"

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 mb-0 md:mb-7">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Powering Nigeria With <span className="text-[#16a34a]">Clean Energy</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            At <span className="font-semibold text-[#16a34a]">Baumann Energy</span>, 
            we provide reliable solar power solutions designed to reduce electricity costs 
            and eliminate power outages for homes and businesses across Nigeria.
          </p>

          <p className="mt-4 text-gray-600">
            Our mission is simple — deliver affordable, sustainable, and high-performance 
            solar systems backed by professional installation and trusted support.
          </p>

          {/* FEATURES */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <HiOutlineLightningBolt className="text-[#16a34a] text-2xl" />
              <span className="text-gray-700 font-medium">
                Efficient & Reliable Solar Systems
              </span>
            </div>

            <div className="flex items-center gap-4">
              <HiOutlineShieldCheck className="text-[#16a34a] text-2xl" />
              <span className="text-gray-700 font-medium">
                Trusted Installation & Warranty
              </span>
            </div>

            <div className="flex items-center gap-4">
              <HiOutlineGlobe className="text-[#16a34a] text-2xl" />
              <span className="text-gray-700 font-medium">
                Sustainable Energy For The Future
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={team}  // replace with your real image
            alt="Solar Installation"
            className="  w-full object-cover shadow-lg"
          />

          {/* Decorative Background */}
          {/* <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#16a34a]/10 rounded-2xl -z-10"></div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;