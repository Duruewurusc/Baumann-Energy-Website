import { motion, useAnimation } from "framer-motion";
import { useMemo, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import training from "../assets/training.jpg";
import repair from "../assets/repair.jpg";
import install from "../assets/install.jpg";
import products from "../assets/products.jpg";

const solutions = [
  {
    id: "product-sales",
    title: "High-End Product Sales",
    description:
      "Premium hybrid inverters and lithium battery systems engineered for durability and long-term performance.",
    image: products,
    alt: "Premium solar products and inverters display",
    features: ["10-Year Warranty", "German Engineering", "Smart Monitoring"]
  },
  {
    id: "installations",
    title: "Elite Installations",
    description:
      "Custom solar system installations executed by certified engineers with precision and precision detailing.",
    image: install,
    alt: "Solar panel installation by certified engineers",
    features: ["Certified Team", "48hr Completion", "Free Consultation"]
  },
  {
    id: "maintenance",
    title: "Maintenance & Repairs",
    description:
      "Advanced diagnostics, servicing, and optimization to ensure uninterrupted power delivery.",
    image: repair,
    alt: "Solar system maintenance and repair services",
    features: ["24/7 Support", "Same-Day Service", "Performance Guarantee"]
  },
  {
    id: "training",
    title: "Professional Training",
    description:
      "Industry-grade solar training programs designed for technicians and energy entrepreneurs.",
    image: training,
    alt: "Solar energy professional training session",
    features: ["Hands-on Training", "Certification", "Job Placement"]
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Mobile content animation variants
const mobileContentVariants = {
  hidden: { 
    y: 20,
    opacity: 0,
    transition: { duration: 0.3 }
  },
  visible: { 
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const mobileFeatureVariants = {
  hidden: { 
    y: 10,
    opacity: 0 
  },
  visible: { 
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

export default function Solutions() {
  const memoizedSolutions = useMemo(() => solutions, []);

  return (
    <section 
      className="relative w-full bg-linear-to-b from-gray-50 to-white py-32 px-6 md:px-0 overflow-hidden"
      aria-label="Solar energy solutions"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        
      </div>

      <div className="relative max-w-7xl md:max-w-full mx-auto z-10">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="relative px-6 py-2 text-sm tracking-[0.3em] font-medium text-emerald-600 uppercase bg-emerald-50 rounded-full border border-emerald-200/50 shadow-sm">
              Our Solutions
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Premium Solar Energy
            <span className="block font-bold text-emerald-600 mt-2">Services & Products</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Delivering high-performance solar products and expert services for
            homes and businesses seeking uninterrupted power.
          </p>
        </motion.div>

        {/* Solution Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-2"
        >
          {memoizedSolutions.map((item, index) => (
            <SolutionCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
          >
            <span>View Services</span>
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Free consultation • Custom quote • 10-year warranty
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Separate component for each card to handle individual visibility
function SolutionCard({ item, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
    rootMargin: "50px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.article
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="group relative h-128 md:h-160 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 focus-within:ring-4 focus-within:ring-emerald-500 focus-within:ring-offset-4"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 md:group-hover:scale-110 will-change-transform"
        style={{ 
          backgroundImage: `url(${item.image})`,
          backgroundColor: '#1a1a1a',
        }}
        role="img"
        aria-label={item.alt}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-80 md:group-hover:opacity-90 transition-opacity duration-700" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
        {/* Icon/Number */}
        {/* <div className="absolute top-8 left-8 text-7xl font-black text-white/10 md:group-hover:text-emerald-500/20 transition-colors duration-500">
          {(index + 1).toString().padStart(2, '0')}
        </div> */}

        <h3 className="text-2xl font-bold mb-3 leading-snug relative">
          <span className="relative inline-block">
            {item.title}
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-emerald-400 md:group-hover:w-full transition-all duration-700" />
          </span>
        </h3>

        {/* Mobile View - Auto slide up content */}
        <div className="md:hidden">
          <motion.div
            variants={mobileContentVariants}
            initial="hidden"
            animate={controls}
            className="space-y-4"
          >
            <p className="text-gray-200 text-sm leading-relaxed">
              {item.description}
            </p>

            {item.features && (
              <motion.div 
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
                className="space-y-2"
              >
                {item.features.map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={mobileFeatureVariants}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <svg className="w-4 h-4 mr-2 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </motion.div>
                ))}
              </motion.div>
            )}

            <motion.button
              variants={mobileFeatureVariants}
              className="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Learn More
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Desktop View - Original hover behavior */}
        <div className="hidden md:block">
          {/* Description - hidden by default, shows on hover */}
          <p className="text-gray-200 text-sm leading-relaxed mb-6 transform translate-y-4 opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-700 delay-100">
            {item.description}
          </p>

          {/* Desktop Features - hidden by default, shows on hover */}
          {item.features && (
            <div className="space-y-2 mb-6 opacity-0 md:group-hover:opacity-100 transition-all duration-700 delay-200">
              {item.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>
          )}

          {/* Desktop CTA - hidden by default, shows on hover */}
          <button className="inline-flex items-center text-sm font-medium text-emerald-400 opacity-0 md:group-hover:opacity-100 transition-all duration-700 delay-300 hover:text-emerald-300">
            Learn More
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent md:group-hover:border-emerald-400/50  transition-all duration-700 pointer-events-none" />
    </motion.article>
  );
}