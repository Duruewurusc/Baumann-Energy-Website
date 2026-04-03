import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiSearch } from "react-icons/fi";
import { useState } from "react";
import contacthero from "../assets/contact_hero.jpg";
import Navbar from "../components/Navbar";
import smileimg from "../assets/smile.jpg"
import Footer from "../components/Footer";
import officeimg from "../assets/office.jpg"


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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your form submission logic here
  //   setFormStatus({
  //     submitted: true,
  //     success: true,
  //     message: "Thank you for reaching out! We'll get back to you within 24 hours."
  //   });
  //   // Reset form after submission
  //   setFormData({
  //     fullName: "",
  //     email: "",
  //     phone: "",
  //     message: ""
  //   });
  // };
  const handleSubmit = (e) => {
  e.preventDefault();

  const whatsappNumber = "2348139285321";

  const message = `
  Hello Baumann Energy,

  A new contact form was submitted from the website.

  Full Name: ${formData.fullName}
  Email: ${formData.email}
  Phone: ${formData.phone}

  Message:
  ${formData.message}
  `;

  const whatsappUrl =
    "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

  // 🔥 Fire Facebook Pixel Lead event (important)
  if (window.fbq) {
    window.fbq("track", "Lead");
  }

  // open whatsapp
  window.open(whatsappUrl, "_blank");

  // optional success state on page
  setFormStatus({
    submitted: true,
    success: true,
    message: "Redirecting you to WhatsApp..."
  });

  // reset form
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
      content: "+2348139285321",
      subContent: "Mon-Fri, 8am-6pm",
      color: "text-[#16a34a]"
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      content: "baumannenergysolar@gmail.co",
      subContent: "24/7 support available",
      color: "text-[#16a34a]"
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Head Office",
      content: "Baumann Energy Hub, Plot 2032 Festac Link Road Amuwo-Odofin Lagos, Nigeria",
      subContent: "Nigeria",
      color: "text-[#16a34a]"
    }
  ];

  const distributors = [
    {
      city: "Lagos",
      address: "Baumann Energy Hub/ Service Center. Plot 2032 Festac Link Road, Amuwo Odofin Lagos",
      phone: "+2348139285321"
    },
    {
      city: "Onitsha",
      address: "Anand Plaza. opposite GUO Filling Station, Enugu/Onitsha Expressway, Onitsha, Anambra State",
      phone: "+2348139285321"
    },
    {
      city: "Abuja",
      address: "Standard Plaza. Opposite Sky Memorial Wuse Zone 6",
      phone: "+2348139285321"
    },
     {
      city: "Enugu",
      address: "Coming Soon",
      phone: "+2348139285321"
    },
  
  ];

  return (
    <><Navbar />
    <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative h-150 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={contacthero}
            alt="Solar panels installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/10"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
             Contact Us
            </h1>
            {/* <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
              Ready to harness the power of the sun? Our team is here to guide you every step of the way.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#16a34a] hover:bg-[#15803d] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl flex items-center gap-2"
            >
              <FiSend />
              Get Started Today
            </motion.button> */}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
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

      {/* Contact Form with Portrait Image */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
              <div className="w-20 h-1 bg-linear-to-r from-[#16a34a] to-blue-500 rounded-full"></div>
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
                    placeholder="Emeka Adamu Segun"
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
                    placeholder="adamu@example.com"
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
                className="w-full bg-linear-to-r from-[#16a34a] to-blue-600 hover:from-[#15803d] hover:to-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <FiSend className="text-lg" />
                Send Message on WhatsApp
              </motion.button>
            </form>
          </motion.div>

          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-175 overflow-hidden shadow-2xl"
          >
            <img 
              src={smileimg} 
              alt="Solar panel technician"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Expert Consultation</h3>
              <p className="text-white/80">Our solar specialists are ready to help you design the perfect system</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Details and Map Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Contact Details</h2>
              
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

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 h-125"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7928.835213051793!2d3.301057900797037!3d6.468665699254502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b892769ac9443%3A0x358e9420b3031821!2s2033%20Festac%20Access%20Rd%2C%20Amuwo%20Odofin%20Estate%2C%20Lagos%20102102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1773149101702!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Baumann Energy Head Office Location"
              className="w-full h-full"
            ></iframe>
            
            {/* Map Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6">
              <div className="flex items-center gap-3 text-white">
                <FiMapPin className="text-2xl text-[#16a34a]" />
                <div>
                  <p className="font-semibold">Baumann Energy Head Office</p>
                  <p className="text-sm text-white/80">Amuwo-Odofin, Lagos State, Nigeria</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Find Distributor Section with Full Width Image Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Full Width Background Image */}
        <div className="absolute inset-0">
          <img 
            src={officeimg} 
            alt="Solar farm landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#16a34a]/90 to-blue-600/90"></div>
          {/* <div className="absolute inset-0 bg-green-800/70"></div> */}
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm mb-8"
            >
              <FiSearch className="text-4xl" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nationwide Offices
            </h2>
            
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
              With distributors nationwide, we're always close by. Locate the nearest Baumann Energy partner for personalized service and support.
            </p>

            {/* Distributor Grid Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
              {distributors.map((distributor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="font-bold text-xl mb-2">{distributor.city}</h3>
                  <p className="text-sm text-white/80 mb-2">{distributor.address}</p>
                  <p className="text-sm text-white/90 font-medium">{distributor.phone}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="bg-white text-[#16a34a] px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 group">
                <FiMapPin className="text-xl group-hover:animate-bounce" />
                Locate Distributor
                <span className="text-sm bg-[#16a34a] text-white px-2 py-1 rounded-full ml-2">
                  50+
                </span>
              </button>
            </motion.div>

            <p className="text-sm opacity-75 mt-8">
              *Enter your location to find the closest authorized distributor
            </p>
          </motion.div>
        </div>
      </section><Footer />
    </div></>
  );
}