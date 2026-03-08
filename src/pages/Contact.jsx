import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiSearch } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for reaching out! We'll get back to you within 24 hours."
    });
    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Phone",
      content: "+234 (0) 123 456 7890",
      subContent: "Mon-Fri, 8am-6pm",
      color: "text-[#16a34a]"
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      content: "info@baumannenergy.com",
      subContent: "24/7 support available",
      color: "text-[#16a34a]"
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Head Office",
      content: "Port Harcourt, Rivers State",
      subContent: "Nigeria",
      color: "text-[#16a34a]"
    }
  ];

  const distributors = [
    {
      city: "Lagos",
      address: "25b Admiralty Way, Lekki Phase 1",
      phone: "+234 801 234 5678"
    },
    {
      city: "Abuja",
      address: "15 Ahmadu Bello Way, Central District",
      phone: "+234 802 345 6789"
    },
    {
      city: "Port Harcourt",
      address: "48 Aba Road, Rumuomasi",
      phone: "+234 803 456 7890"
    },
    {
      city: "Kano",
      address: "7 Zoo Road, Kano Municipal",
      phone: "+234 804 567 8901"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#16a34a] via-[#16a34a] to-blue-700 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0  opacity-20"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's Talk Solar
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Ready to harness the power of the sun? Our team is here to guide you every step of the way.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Send us a message</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#16a34a] to-blue-500 rounded-full"></div>
            </div>

            {formStatus.submitted && formStatus.success && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 text-[#16a34a] rounded-lg"
              >
                {formStatus.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition duration-200 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition duration-200 outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 XXX XXX XXXX"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition duration-200 outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition duration-200 outline-none resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#16a34a] to-blue-600 hover:from-[#15803d] hover:to-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <FiSend className="text-lg" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-5 group"
                  >
                    <div className={`${item.color} p-3 bg-gray-50 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-lg">{item.content}</p>
                      {item.subContent && (
                        <p className="text-gray-500 text-sm mt-1">{item.subContent}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="flex items-start gap-5">
                  <FiClock className="text-2xl text-[#16a34a] p-3 bg-gray-50 rounded-xl" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="w-full h-[450px] bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center relative">
            {/* Placeholder for actual map - replace with your Google Maps embed */}
            <div className="absolute inset-0 bg-gray-800 opacity-10"></div>
            <div className="text-center">
              <FiMapPin className="text-5xl text-gray-600 mx-auto mb-4" />
              <p className="text-gray-700 text-lg font-medium">
                Google Map Embed - Add your actual map here
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Port Harcourt, Rivers State, Nigeria
              </p>
            </div>
            
            {/* Overlay with location info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-white text-lg font-semibold">Visit Our Head Office</p>
              <p className="text-gray-200 text-sm">Port Harcourt, Rivers State, Nigeria</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Locate Distributor CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#16a34a] to-blue-600 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="relative px-8 py-16 md:py-20 text-center text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 "></div>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm mb-8"
              >
                <FiSearch className="text-4xl" />
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Find a Distributor Near You
              </h2>
              
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                With over 50 distributors nationwide, we're always close by. Locate the nearest Baumann Energy partner for personalized service and support.
              </p>

              {/* Distributor Grid Preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
                {distributors.map((distributor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-left border border-white/20"
                  >
                    <h3 className="font-semibold text-lg mb-1">{distributor.city}</h3>
                    <p className="text-sm text-white/80 mb-2">{distributor.address}</p>
                    <p className="text-sm text-white/90">{distributor.phone}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <button className="bg-white text-[#16a34a] px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group">
                  <FiMapPin className="text-xl group-hover:animate-bounce" />
                  Locate Distributor
                  <span className="text-sm bg-[#16a34a] text-white px-2 py-1 rounded-full ml-2">
                    50+
                  </span>
                </button>
              </motion.div>

              <p className="text-sm opacity-75 mt-6">
                *Enter your location to find the closest authorized distributor
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}