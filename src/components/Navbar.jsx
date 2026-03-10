import logo from "../assets/baumann-logo.png"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineHome, 
  HiOutlineSun, 
  HiOutlineDocumentText, 
  HiOutlineQuestionMarkCircle,
  HiOutlineNewspaper,
  HiOutlinePhone,
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineFolderOpen,
  HiOutlineDeviceMobile 
} from 'react-icons/hi';
import { Navigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Company phone number
  const phoneNumber = "+234 817 069 9405";

  // Navigation items
  const navItems = [
    { name: 'Home', href: '/', icon: HiOutlineHome },
    { 
      name: 'Products', 
      href: 'products',
      icon: HiOutlineSun,
      dropdown: [
        { name: 'Solar Panels', href: "/products?category=Solar Panel" },
        { name: 'Inverters', href: "/products?category=Hybrid Inverter" },
        { name: 'Batteries', href: "/products?category=Lithium Battery" },
        { name: 'Charge Controllers', href: "/products?category=Charge Controller" },
        { name: 'Solar Generators', href: "/products?category=Power Station" },
        { name: 'Air Conditioners', href: "/products?category=Inverter AC" },
      ]
    },
    { name: 'Services', href: 'services', icon: HiOutlineDeviceMobile },
    { 
      name: 'Project Case Studies', 
      href: 'projects',
      icon: HiOutlineFolderOpen,
      dropdown: [
        { name: 'Residential', href: '#residential' },
        { name: 'Commercial', href: '#commercial' },
        { name: 'Industrial', href: '#industrial' },
        { name: 'Utility Scale', href: '#utility' },
      ]
    },
     
    { name: 'Contact Us', href: 'contact', icon: HiOutlinePhone },
    // { name: 'Locate a Distributor', href: 'distributors', icon: HiOutlineDocumentText },  
    { name: 'Blog', href: 'blog', icon: HiOutlineNewspaper },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dropdown hover
  const handleDropdownEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  // Close mobile menu on resize (if screen becomes larger)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="shrink-0"
            >
              <a href="#" className="block">
                <img
                  src={logo}
                  alt="Baumann Solar"
                  className={`h-12 w-auto transition-all duration-300 ${
                    isScrolled ? 'filter-none' : 'brightness-0 invert'
                  }`}
                />
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleDropdownEnter(index)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                      isScrolled
                        ? 'text-gray-700 hover:text-[#16a34a]'
                        : 'text-white hover:text-white/90'
                    }`}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <HiOutlineChevronDown 
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </motion.a>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl overflow-hidden z-50"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#16a34a] hover:text-white transition-colors duration-200"
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              {/* Phone Number */}
              <motion.a
                href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`flex items-center ml-4 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? 'text-[#16a34a] hover:text-[#138f3f] border border-[#16a34a]/20 hover:border-[#16a34a]'
                    : 'text-white border border-white/20 hover:border-white/40'
                }`}
              >
                <HiOutlineDeviceMobile className="w-4 h-4 mr-2" />
                <span>{phoneNumber}</span>
              </motion.a>

              {/* CTA Button */}
              <motion.button onClick={() => window.location.href = '/distributors'}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className={`ml-2 px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'bg-[#16a34a] text-white hover:bg-[#138f3f] shadow-md'
                    : 'bg-white text-[#16a34a] hover:bg-gray-100'
                }`}
              >
                Locate a Distributor
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? (
                  <HiOutlineX className="w-6 h-6" />
                ) : (
                  <HiOutlineMenu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100"
            >
              <div className="container mx-auto px-4 py-4">
                {/* Mobile Phone Number */}
                <motion.a
                  href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center px-4 py-3 mb-2 text-[#16a34a] bg-[#16a34a]/5 rounded-lg border border-[#16a34a]/20"
                >
                  <HiOutlineDeviceMobile className="w-5 h-5 mr-3" />
                  <span className="font-medium">{phoneNumber}</span>
                </motion.a>

                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                    className="mb-2"
                  >
                    {item.dropdown ? (
                      <>
                        <div className="flex items-center justify-between px-4 py-3 text-gray-700 font-medium">
                          <div className="flex items-center">
                            <item.icon className="w-5 h-5 mr-3 text-[#16a34a]" />
                            <span>{item.name}</span>
                          </div>
                          <HiOutlineChevronDown className="w-4 h-4 text-gray-400" />
                        </div>
                        <div className="ml-12 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-[#16a34a] transition-colors duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-[#16a34a] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="w-5 h-5 mr-3 text-[#16a34a]" />
                        <span className="font-medium">{item.name}</span>
                      </a>
                    )}
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 px-4"
                >
                  <button className="w-full bg-[#16a34a] text-white py-3 rounded-lg font-medium hover:bg-[#138f3f] transition-colors duration-200">
                    Locate a Distributor
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
