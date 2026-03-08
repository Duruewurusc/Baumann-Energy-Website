import { motion } from "framer-motion";
import { FiSearch, FiPhone, FiMapPin } from "react-icons/fi";

const distributors = [
  {
    name: "SolarTech Nigeria Ltd",
    city: "Port Harcourt",
    phone: "+234 XXX XXX XXXX",
  },
  {
    name: "GreenVolt Energy",
    city: "Lagos",
    phone: "+234 XXX XXX XXXX",
  },
  {
    name: "SunGrid Power",
    city: "Abuja",
    phone: "+234 XXX XXX XXXX",
  },
];

export default function Distributor() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="bg-linear-to-r from-green-700 to-blue-800 text-white py-24 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Find a Distributor
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 opacity-90"
        >
          Locate authorized Baumann Energy dealers near you.
        </motion.p>

      </section>


      {/* Search */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center bg-white shadow-lg rounded-xl p-4 mb-12"
        >
          <FiSearch className="text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Search by city or state..."
            className="w-full outline-none"
          />
        </motion.div>


        {/* Distributor List */}
        <div className="grid md:grid-cols-3 gap-8">

          {distributors.map((d, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{d.name}</h3>

              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <FiMapPin />
                {d.city}
              </div>

              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <FiPhone />
                {d.phone}
              </div>

              <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
                Contact Distributor
              </button>
            </motion.div>
          ))}

        </div>

      </section>

    </div>
  );
}