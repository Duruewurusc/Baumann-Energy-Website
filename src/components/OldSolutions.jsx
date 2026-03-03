import { motion } from "framer-motion";
import training from "../assets/training.jpg"
import repair from "../assets/repair.jpg"
import install from "../assets/install.jpg"
import products from "../assets/products.jpg"
const solutions = [
  {
    title: "High-End Product Sales",
    description:
      "Premium hybrid inverters and lithium battery systems engineered for durability and long-term performance.",
    image:
      products,
  },
  {
    title: "Elite Installations",
    description:
      "Custom solar system installations executed by certified engineers with precision and precision detailing.",
    image:
      install,
  },
  {
    title: "Maintenance & Repairs",
    description:
      "Advanced diagnostics, servicing, and optimization to ensure uninterrupted power delivery.",
    image:
      repair,
  },
  {
    title: "Professional Training",
    description:
      "Industry-grade solar training programs designed for technicians and energy entrepreneurs.",
    image:
      training,
  },
];

export default function Solutions() {
  return (
    <section className="w-full bg-white py-28 px-6 md:px-0">
      <div className="max-w-7xl md:max-w-full mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest text-emerald-600 uppercase mb-4">
            Our Solutions
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900">
            Premium Solar Energy Services
          </h2>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Delivering high-performance solar products and expert services for
            homes and businesses seeking uninterrupted power.
          </p>
        </motion.div>

        {/* 4 Portrait Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-0">

          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-130 overflow-hidden group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/65 transition duration-500" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-semibold mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}