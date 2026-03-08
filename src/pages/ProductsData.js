// productsData.js
// Import all product images
import inverter15kva from "./assets/products/hybrid-inverters/inverter-15kva.jpg";
import inverter10kva from "./assets/products/hybrid-inverters/inverter-10kva.jpg";
import inverter8kw from "./assets/products/hybrid-inverters/inverter-8kw.jpg";
import inverter6kw from "./assets/products/hybrid-inverters/inverter-6kw.jpg";
import inverter4kva from "./assets/products/hybrid-inverters/inverter-4kva.jpg";

import transformer10kva from "./assets/products/transformer-inverters/transformer-10kva.jpg";
import transformer7kva from "./assets/products/transformer-inverters/transformer-7kva.jpg";
import transformer5kva from "./assets/products/transformer-inverters/transformer-5kva.jpg";
import transformer3kva from "./assets/products/transformer-inverters/transformer-3kva.jpg";

import controller120a from "./assets/products/charge-controllers/controller-120a.jpg";
import controller100a from "./assets/products/charge-controllers/controller-100a.jpg";
import controller80a from "./assets/products/charge-controllers/controller-80a.jpg";
import controller60a from "./assets/products/charge-controllers/controller-60a.jpg";
import controller40a from "./assets/products/charge-controllers/controller-40a.jpg";

import panel620w from "./assets/products/solar-panels/panel-620w.jpg";
import panel560w from "./assets/products/solar-panels/panel-560w.jpg";
import panel400w from "./assets/products/solar-panels/panel-400w.jpg";
import panel350w from "./assets/products/solar-panels/panel-350w.jpg";

import battery32kwh from "./assets/products/lithium-batteries/battery-32kwh.jpg";
import battery20kwh from "./assets/products/lithium-batteries/battery-20kwh.jpg";
import battery17kwh from "./assets/products/lithium-batteries/battery-17kwh.jpg";
import battery7kwh from "./assets/products/lithium-batteries/battery-7kwh.jpg";

import battery200ah from "./assets/products/deep-cycle-batteries/battery-200ah.jpg";
import battery220ah from "./assets/products/deep-cycle-batteries/battery-220ah.jpg";

import station3kwh from "./assets/products/power-stations/station-3kwh.jpg";
import station6kwh from "./assets/products/power-stations/station-6kwh.jpg";

import ac1hp from "./assets/products/inverter-ac/ac-1hp.jpg";
import ac1_5hp from "./assets/products/inverter-ac/ac-1-5hp.jpg";
import ac2hp from "./assets/products/inverter-ac/ac-2hp.jpg";

export const productList = [
  // Hybrid Inverters
  { 
    id: 1,
    name: "15kVA 48V Hybrid Inverter", 
    category: "Hybrid Inverter",
    image: inverter15kva,
    description: "High-capacity hybrid inverter with advanced MPPT technology for maximum solar harvesting. Features dual AC inputs, parallel operation capability, and intelligent battery management. Perfect for large residential or commercial installations requiring reliable backup power.",
    features: [
      "Pure sine wave output",
      "Built-in MPPT charge controller",
      "Parallel operation up to 6 units",
      "LCD touch screen display",
      "Mobile app monitoring"
    ],
    specifications: {
      power: "15kVA",
      voltage: "48V",
      efficiency: "98%",
      warranty: "5 years",
      weight: "45kg",
      dimensions: "620 x 450 x 200 mm"
    }
  },
  { 
    id: 2,
    name: "10.2kVA 48V Hybrid Inverter", 
    category: "Hybrid Inverter",
    image: inverter10kva,
    description: "Versatile hybrid inverter with dual MPPT trackers and seamless grid-tie functionality. Advanced features include time-of-use scheduling, generator support, and remote monitoring. Ideal for medium-sized homes with high energy demands.",
    features: [
      "Dual MPPT trackers",
      "Grid-tie functionality",
      "Time-of-use scheduling",
      "Generator auto-start",
      "Wi-Fi monitoring"
    ],
    specifications: {
      power: "10.2kVA",
      voltage: "48V",
      efficiency: "97.5%",
      warranty: "5 years",
      weight: "38kg",
      dimensions: "580 x 420 x 190 mm"
    }
  },
  { 
    id: 3,
    name: "8kW 48V Hybrid Inverter", 
    category: "Hybrid Inverter",
    image: inverter8kw,
    description: "Compact hybrid inverter with built-in 80A MPPT charge controller. Features fast transfer switch, overload protection, and customizable charging profiles. Perfect for residential backup power solutions and off-grid applications.",
    features: [
      "Built-in 80A MPPT",
      "Fast transfer <10ms",
      "Overload protection",
      "Customizable charging",
      "LCD display"
    ],
    specifications: {
      power: "8kW",
      voltage: "48V",
      efficiency: "97%",
      warranty: "5 years",
      weight: "32kg",
      dimensions: "540 x 400 x 180 mm"
    }
  },
  { 
    id: 4,
    name: "6.2kW 48V Hybrid Inverter", 
    category: "Hybrid Inverter",
    image: inverter6kw,
    description: "Efficient hybrid inverter with pure sine wave output and low idle consumption. Includes PV input, battery charger, and grid interaction modes. Ideal for essential home loads and cost-effective backup power.",
    features: [
      "Pure sine wave output",
      "Low idle consumption",
      "Multiple operation modes",
      "Battery temperature sensor",
      "RS485 communication"
    ],
    specifications: {
      power: "6.2kW",
      voltage: "48V",
      efficiency: "96.5%",
      warranty: "5 years",
      weight: "28kg",
      dimensions: "500 x 380 x 170 mm"
    }
  },
  { 
    id: 5,
    name: "4.2kVA 24V / 48V Hybrid Inverter", 
    category: "Hybrid Inverter",
    image: inverter4kva,
    description: "Flexible hybrid inverter compatible with both 24V and 48V battery banks. Compact design with integrated solar charger and UPS functionality. Perfect for small homes, cabins, and backup power applications.",
    features: [
      "Dual voltage compatible",
      "Integrated solar charger",
      "UPS functionality",
      "Battery equalization",
      "Remote control ready"
    ],
    specifications: {
      power: "4.2kVA",
      voltage: "24V/48V",
      efficiency: "96%",
      warranty: "5 years",
      weight: "22kg",
      dimensions: "460 x 350 x 160 mm"
    }
  },

  // Transformer Base Inverters
  { 
    id: 6,
    name: "10kVA 48V Transformer Base", 
    category: "Transformer Inverter",
    image: transformer10kva,
    description: "Heavy-duty transformer-based inverter with exceptional surge capacity (up to 30kVA). Features robust construction, high overload capability, and advanced protection systems. Built for demanding industrial applications and heavy motor loads.",
    features: [
      "High surge capacity",
      "Toroidal transformer",
      "Overload protection",
      "Temperature control",
      "Industrial grade"
    ],
    specifications: {
      power: "10kVA",
      voltage: "48V",
      surge: "30kVA",
      type: "Transformer-based",
      warranty: "3 years",
      weight: "75kg",
      dimensions: "750 x 550 x 300 mm"
    }
  },
  { 
    id: 7,
    name: "7.5kVA 48V Transformer Base", 
    category: "Transformer Inverter",
    image: transformer7kva,
    description: "Robust transformer inverter with high overload capacity and pure sine wave output. Features automatic voltage regulation and battery deep discharge protection. Ideal for commercial applications with heavy starting loads.",
    features: [
      "Automatic voltage regulation",
      "Deep discharge protection",
      "Pure sine wave output",
      "Cooling fans",
      "LCD status display"
    ],
    specifications: {
      power: "7.5kVA",
      voltage: "48V",
      surge: "22kVA",
      type: "Transformer-based",
      warranty: "3 years",
      weight: "62kg",
      dimensions: "680 x 500 x 280 mm"
    }
  },
  { 
    id: 8,
    name: "5kVA 48V Transformer Base", 
    category: "Transformer Inverter",
    image: transformer5kva,
    description: "Reliable transformer inverter with pure sine wave output and smart charging technology. Features overload bypass and automatic restart. Perfect for workshops, small businesses, and essential home loads.",
    features: [
      "Smart charging",
      "Overload bypass",
      "Automatic restart",
      "Battery equalization",
      "Remote monitoring"
    ],
    specifications: {
      power: "5kVA",
      voltage: "48V",
      surge: "15kVA",
      type: "Transformer-based",
      warranty: "3 years",
      weight: "48kg",
      dimensions: "580 x 450 x 250 mm"
    }
  },
  { 
    id: 9,
    name: "3.5kVA 24V Transformer Base", 
    category: "Transformer Inverter",
    image: transformer3kva,
    description: "Compact transformer inverter with rugged construction and reliable performance. Features user-selectable charging modes and comprehensive protection systems. Ideal for home backup and small office applications.",
    features: [
      "User-selectable charging",
      "Short circuit protection",
      "Over temperature protection",
      "Low voltage disconnect",
      "LED indicators"
    ],
    specifications: {
      power: "3.5kVA",
      voltage: "24V",
      surge: "10kVA",
      type: "Transformer-based",
      warranty: "3 years",
      weight: "35kg",
      dimensions: "520 x 400 x 220 mm"
    }
  },

  // Charge Controllers
  { 
    id: 10,
    name: "120Ah 48V Charge Controller", 
    category: "Charge Controller",
    image: controller120a,
    description: "High-current MPPT charge controller with advanced tracking algorithms and 99% efficiency. Features multi-stage charging, temperature compensation, and extensive data logging. Maximizes solar harvest for large battery banks.",
    features: [
      "Advanced MPPT technology",
      "Multi-stage charging",
      "Temperature compensation",
      "Data logging",
      "RS232/Bluetooth"
    ],
    specifications: {
      current: "120A",
      voltage: "48V",
      type: "MPPT",
      efficiency: "99%",
      maxPV: "6000W",
      weight: "8.5kg"
    }
  },
  { 
    id: 11,
    name: "100Ah 48V Charge Controller", 
    category: "Charge Controller",
    image: controller100a,
    description: "Efficient MPPT charge controller with 2.8-inch LCD display and multiple charging modes. Features programmable parameters, battery type selection, and remote monitoring capability. Perfect for medium-sized solar arrays.",
    features: [
      "2.8\" LCD display",
      "Programmable parameters",
      "Battery type selection",
      "Remote monitoring",
      "USB charging port"
    ],
    specifications: {
      current: "100A",
      voltage: "48V",
      type: "MPPT",
      efficiency: "98.5%",
      maxPV: "5000W",
      weight: "7.2kg"
    }
  },
  { 
    id: 12,
    name: "80Ah 48V Charge Controller", 
    category: "Charge Controller",
    image: controller80a,
    description: "Versatile MPPT controller with Bluetooth monitoring and smartphone app. Features real-time data display, customizable charge profiles, and automatic fault detection. Ideal for residential solar installations.",
    features: [
      "Bluetooth monitoring",
      "Smartphone app",
      "Real-time data",
      "Customizable profiles",
      "Fault detection"
    ],
    specifications: {
      current: "80A",
      voltage: "48V",
      type: "MPPT",
      efficiency: "98%",
      maxPV: "4000W",
      weight: "6.0kg"
    }
  },
  { 
    id: 13,
    name: "60Ah 48V Charge Controller", 
    category: "Charge Controller",
    image: controller60a,
    description: "Compact MPPT charge controller with programmable settings and high reliability. Features multiple protection functions, LCD status display, and easy installation. Great for small to medium solar systems.",
    features: [
      "Programmable settings",
      "Multiple protections",
      "LCD status display",
      "Easy installation",
      "Dustproof design"
    ],
    specifications: {
      current: "60A",
      voltage: "48V",
      type: "MPPT",
      efficiency: "97.5%",
      maxPV: "3000W",
      weight: "4.8kg"
    }
  },
  { 
    id: 14,
    name: "40/45Ah 24V Charge Controller", 
    category: "Charge Controller",
    image: controller40a,
    description: "Dual-voltage PWM/MPPT controller with easy setup and reliable performance. Features automatic voltage detection, LED indicators, and comprehensive circuit protection. Perfect for small off-grid cabins and RVs.",
    features: [
      "Dual voltage compatible",
      "Automatic detection",
      "LED indicators",
      "Circuit protection",
      "Compact design"
    ],
    specifications: {
      current: "40/45A",
      voltage: "24V",
      type: "PWM/MPPT",
      efficiency: "97%",
      maxPV: "1200W",
      weight: "3.2kg"
    }
  },

  // Solar Panels
  { 
    id: 15,
    name: "620W Solar Panel", 
    category: "Solar Panel",
    image: panel620w,
    description: "High-efficiency monocrystalline panel with half-cut cell technology and multi-busbar design. Features anti-reflective coating, low light performance, and enhanced durability. Maximizes power output in limited space.",
    features: [
      "Half-cut cell technology",
      "Multi-busbar design",
      "Anti-reflective coating",
      "Low light performance",
      "PID resistant"
    ],
    specifications: {
      power: "620W",
      type: "Monocrystalline",
      efficiency: "21.5%",
      warranty: "25 years",
      cells: "144 half-cut",
      weight: "32kg"
    }
  },
  { 
    id: 16,
    name: "560W Solar Panel", 
    category: "Solar Panel",
    image: panel560w,
    description: "High-performance bifacial solar panel that captures light from both sides for up to 30% more energy. Features transparent backsheet, robust frame, and excellent durability. Ideal for ground-mounted installations and flat roofs.",
    features: [
      "Bifacial technology",
      "Transparent backsheet",
      "Robust frame",
      "Snow load 5400Pa",
      "Wind load 2400Pa"
    ],
    specifications: {
      power: "560W",
      type: "Monocrystalline Bifacial",
      efficiency: "21%",
      warranty: "25 years",
      cells: "144",
      weight: "30kg"
    }
  },
  { 
    id: 17,
    name: "400W Solar Panel", 
    category: "Solar Panel",
    image: panel400w,
    description: "Popular residential solar panel with proven reliability and excellent performance. Features PERC technology, low degradation rate, and comprehensive certifications. Perfect for rooftop installations.",
    features: [
      "PERC technology",
      "Low degradation",
      "Fire rating Class C",
      "Salt mist resistant",
      "Ammonia resistant"
    ],
    specifications: {
      power: "400W",
      type: "Monocrystalline PERC",
      efficiency: "20.3%",
      warranty: "25 years",
      cells: "120",
      weight: "22kg"
    }
  },
  { 
    id: 18,
    name: "350W Solar Panel", 
    category: "Solar Panel",
    image: panel350w,
    description: "Compact and efficient solar panel ideal for smaller installations. Features anti-PID technology, bypass diodes for shade tolerance, and durable aluminum frame. Great for residential and small commercial projects.",
    features: [
      "Anti-PID technology",
      "Bypass diodes",
      "Aluminum frame",
      "IP68 junction box",
      "TUV certified"
    ],
    specifications: {
      power: "350W",
      type: "Monocrystalline",
      efficiency: "19.8%",
      warranty: "25 years",
      cells: "108",
      weight: "19kg"
    }
  },

  // Lithium Batteries
  { 
    id: 19,
    name: "32kWh 51V Lithium Battery", 
    category: "Lithium Battery",
    image: battery32kwh,
    description: "High-capacity lithium iron phosphate (LiFePO4) battery with built-in BMS. Features exceptional cycle life, deep discharge capability, and integrated heating for cold climates. Perfect for large off-grid systems and commercial storage.",
    features: [
      "LiFePO4 chemistry",
      "Built-in BMS",
      "6000+ cycles",
      "Integrated heating",
      "CAN/RS485 communication"
    ],
    specifications: {
      capacity: "32kWh",
      voltage: "51.2V",
      chemistry: "LiFePO4",
      cycles: "6000+",
      warranty: "10 years",
      weight: "280kg"
    }
  },
  { 
    id: 20,
    name: "20kWh 51V Lithium Battery", 
    category: "Lithium Battery",
    image: battery20kwh,
    description: "Modular lithium battery system with scalable design and advanced BMS. Features high power density, fast charging capability, and mobile app monitoring. Ideal for residential energy storage and backup power.",
    features: [
      "Modular design",
      "Advanced BMS",
      "Fast charging",
      "Mobile app",
      "Parallel capable"
    ],
    specifications: {
      capacity: "20kWh",
      voltage: "51.2V",
      chemistry: "LiFePO4",
      cycles: "6000+",
      warranty: "10 years",
      weight: "185kg"
    }
  },
  { 
    id: 21,
    name: "17.5kWh 51V Lithium Battery", 
    category: "Lithium Battery",
    image: battery17kwh,
    description: "Compact lithium battery with integrated BMS and stackable design. Features high discharge rate, wide temperature operation, and seamless inverter integration. Great for home backup and solar self-consumption.",
    features: [
      "Stackable design",
      "High discharge rate",
      "Wide temperature",
      "Inverter integration",
      "LCD display"
    ],
    specifications: {
      capacity: "17.5kWh",
      voltage: "51.2V",
      chemistry: "LiFePO4",
      cycles: "5000+",
      warranty: "10 years",
      weight: "160kg"
    }
  },
  { 
    id: 22,
    name: "7.5kWh 48V Lithium Battery", 
    category: "Lithium Battery",
    image: battery7kwh,
    description: "Entry-level lithium battery perfect for small residential systems. Features lightweight design, plug-and-play installation, and comprehensive safety protections. Ideal for essential loads and starter systems.",
    features: [
      "Lightweight design",
      "Plug-and-play",
      "Safety protections",
      "LED indicators",
      "Wall-mountable"
    ],
    specifications: {
      capacity: "7.5kWh",
      voltage: "48V",
      chemistry: "LiFePO4",
      cycles: "5000+",
      warranty: "10 years",
      weight: "72kg"
    }
  },

  // Deep Cycle Batteries
  { 
    id: 23,
    name: "200Ah Deep Cycle Battery", 
    category: "Deep Cycle Battery",
    image: battery200ah,
    description: "Maintenance-free AGM deep cycle battery with excellent cycle life. Features low self-discharge, vibration resistance, and spill-proof design. Perfect for solar storage, marine, and RV applications.",
    features: [
      "AGM technology",
      "Maintenance-free",
      "Low self-discharge",
      "Spill-proof",
      "Vibration resistant"
    ],
    specifications: {
      capacity: "200Ah",
      voltage: "12V",
      type: "AGM Deep Cycle",
      cycles: "1200 @50% DOD",
      warranty: "2 years",
      weight: "58kg"
    }
  },
  { 
    id: 24,
    name: "220Ah Tubular Battery", 
    category: "Deep Cycle Battery",
    image: battery220ah,
    description: "Heavy-duty tubular plate battery with exceptional deep discharge recovery. Features high electrolyte reserve, low maintenance requirements, and robust construction. Ideal for daily cycling applications in inverters.",
    features: [
      "Tubular plates",
      "Deep discharge recovery",
      "High electrolyte reserve",
      "Low maintenance",
      "High efficiency"
    ],
    specifications: {
      capacity: "220Ah",
      voltage: "12V",
      type: "Tubular Lead-Acid",
      cycles: "1500 @50% DOD",
      warranty: "3 years",
      weight: "65kg"
    }
  },

  // Power Stations
  { 
    id: 25,
    name: "3kWh 51V Power Station", 
    category: "Power Station",
    image: station3kwh,
    description: "Portable power station with built-in pure sine wave inverter and LiFePO4 battery. Features multiple output ports, fast charging, and mobile app control. Perfect for outdoor activities and emergency backup.",
    features: [
      "Built-in inverter",
      "LiFePO4 battery",
      "Multiple outputs",
      "Fast charging",
      "App control"
    ],
    specifications: {
      capacity: "3kWh",
      voltage: "51.2V",
      output: "3000W",
      ports: "AC/USB/DC/Car",
      charging: "Solar/AC/Car",
      weight: "32kg"
    }
  },
  { 
    id: 26,
    name: "6kWh 61V Power Station", 
    category: "Power Station",
    image: station6kwh,
    description: "High-capacity portable power station with expandable capacity and dual charging. Features high surge output, wireless charging pad, and emergency power supply mode. Ideal for extended off-grid use and home backup.",
    features: [
      "Expandable capacity",
      "Dual charging",
      "Wireless charging",
      "UPS mode",
      "LCD touch screen"
    ],
    specifications: {
      capacity: "6kWh",
      voltage: "61.4V",
      output: "6000W",
      ports: "AC/USB-C/DC/Wireless",
      charging: "Solar/AC/Dual",
      weight: "58kg"
    }
  },

  // Inverter AC
  { 
    id: 27,
    name: "1HP Inverter AC", 
    category: "Inverter AC",
    image: ac1hp,
    description: "Energy-efficient inverter AC with DC inverter technology and R32 refrigerant. Features smart sensors, anti-bacterial filter, and quiet operation. Perfect for small rooms and energy-conscious users.",
    features: [
      "DC inverter technology",
      "R32 refrigerant",
      "Smart sensors",
      "Anti-bacterial filter",
      "Quiet operation"
    ],
    specifications: {
      capacity: "1HP",
      cooling: "9000 BTU",
      efficiency: "5 Star",
      refrigerant: "R32",
      warranty: "5 years",
      noise: "28-40 dB"
    }
  },
  { 
    id: 28,
    name: "1.5HP Inverter AC", 
    category: "Inverter AC",
    image: ac1_5hp,
    description: "Smart inverter AC with Wi-Fi control and energy monitoring. Features turbo cooling, self-cleaning function, and sleep mode. Ideal for medium-sized bedrooms and living rooms.",
    features: [
      "Wi-Fi control",
      "Energy monitoring",
      "Turbo cooling",
      "Self-cleaning",
      "Sleep mode"
    ],
    specifications: {
      capacity: "1.5HP",
      cooling: "12000 BTU",
      efficiency: "5 Star",
      refrigerant: "R32",
      warranty: "5 years",
      noise: "30-45 dB"
    }
  },
  { 
    id: 29,
    name: "2HP Inverter AC", 
    category: "Inverter AC",
    image: ac2hp,
    description: "Powerful inverter AC with wide voltage operation and dual rotary compressor. Features 4-way airflow, PM2.5 filter, and intelligent defrost. Perfect for large living areas and open spaces.",
    features: [
      "Dual rotary compressor",
      "Wide voltage operation",
      "4-way airflow",
      "PM2.5 filter",
      "Intelligent defrost"
    ],
    specifications: {
      capacity: "2HP",
      cooling: "18000 BTU",
      efficiency: "5 Star",
      refrigerant: "R32",
      warranty: "5 years",
      noise: "35-50 dB"
    }
  },
];

export const categories = ["All", ...new Set(products.map((p) => p.category))];

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return category === "All" ? products : products.filter(p => p.category === category);
};

// Helper function to search products
export const searchProducts = (query) => {
  return products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );
};

// Helper function to get product by ID
export const getProductById = (id) => {
  return products.find(p => p.id === id);
};