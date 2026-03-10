import React from 'react';
import Navbar from '../components/Navbar';
import servicesimg from '../assets/services.jpg';
import Footer from '../components/Footer';
import ctaimg from "../assets/cta.jpg"


import { 
  Shield, 
  Wrench, 
  GraduationCap,
  CheckCircle,
  Clock,
  HeadphonesIcon,
  Zap,
  Award,
  TrendingUp,
  Users,
  Briefcase,
  ArrowRight,
  Star,
  HardHat,
  Sun,
  Cpu,
  ChevronRight,
  Battery,
  Leaf,

} from 'lucide-react';


// Sample stock image URL for green-blue energy vibe
const backgroundImage = ctaimg;

const Services = () => {
  const services = [
    {
      id: 1,
      title: "High-End Product Sales",
      description: "Premium hybrid inverters and lithium battery systems engineered for durability and long-term performance. Our curated selection of German-engineered products represents the pinnacle of solar technology, ensuring maximum efficiency and reliability for your energy independence.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Premium solar battery system",
      features: [
        { icon: <Award className="w-5 h-5" />, text: "10-Year Warranty" },
        { icon: <Leaf className="w-5 h-5" />, text: "German Engineering" },
        { icon: <TrendingUp className="w-5 h-5" />, text: "Smart Monitoring" }
      ],
      stats: [
        { value: "98%", label: "Efficiency Rate" },
        { value: "15+", label: "Years Lifespan" }
      ],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Elite Installations",
      description: "Custom solar system installations executed by certified engineers with precision and meticulous attention to detail. From residential rooftops to commercial complexes, our team ensures seamless integration with your existing infrastructure while maximizing energy capture and aesthetic appeal.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Professional solar panel installation",
      features: [
        { icon: <Users className="w-5 h-5" />, text: "Certified Team" },
        { icon: <Clock className="w-5 h-5" />, text: "48hr Completion" },
        { icon: <CheckCircle className="w-5 h-5" />, text: "Free Consultation" }
      ],
      stats: [
        { value: "5000+", label: "Installations" },
        { value: "100%", label: "Safety Record" }
      ],
      icon: <HardHat className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Maintenance & Repairs",
      description: "Advanced diagnostics, servicing, and optimization to ensure uninterrupted power delivery. Our proactive maintenance approach identifies potential issues before they become problems, while our rapid response team ensures minimal downtime with same-day service for critical repairs.",
      image: "https://images.unsplash.com/photo-1581092335871-4c7c6d10f1f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Technician servicing solar equipment",
      features: [
        { icon: <HeadphonesIcon className="w-5 h-5" />, text: "24/7 Support" },
        { icon: <Zap className="w-5 h-5" />, text: "Same-Day Service" },
        { icon: <Shield className="w-5 h-5" />, text: "Performance Guarantee" }
      ],
      stats: [
        { value: "< 4hrs", label: "Response Time" },
        { value: "98%", label: "First-Time Fix" }
      ],
      icon: <Wrench className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Professional Training",
      description: "Industry-grade solar training programs designed for technicians and energy entrepreneurs. Our comprehensive curriculum combines theoretical knowledge with hands-on experience, preparing you for certification and immediate employment in the rapidly growing solar industry.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Solar training session",
      features: [
        { icon: <Briefcase className="w-5 h-5" />, text: "Hands-on Training" },
        { icon: <Star className="w-5 h-5" />, text: "Certification" },
        { icon: <TrendingUp className="w-5 h-5" />, text: "Job Placement" }
      ],
      stats: [
        { value: "95%", label: "Employment Rate" },
        { value: "1000+", label: "Graduates" }
      ],
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "5000+", label: "Systems Installed", icon: <Zap className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "150+", label: "Certified Engineers", icon: <Users className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <HeadphonesIcon className="w-6 h-6" /> }
  ];

  return (
    <>
    <Navbar />
    <div className="bg-white absolute inset-0">
      {/* Hero Section */}
      <section className="relative min-h-200 flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={servicesimg}
            alt="Solar panels at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
           
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Discover{' '}
              <span className="text-[#16a34a]">Our Solutions</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Baumann Energy delivers world-class solar solutions engineered for durability, 
              efficiency, and long-term performance. Experience the fusion of innovation and reliability.
            </p>

            {/* CTA Buttons */}
            {/* <div className="flex flex-wrap gap-4">
              <button onClick={() => window.location.href = '/products'} className="bg-[#16a34a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#138a3f] transition-colors inline-flex items-center group">
                View Products
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={()=> window.location.href ='/contact'} className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/30">
                Contact Us
              </button>
            </div> */}

            {/* Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm text-[#16a34a] rounded-xl mb-2 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div> */}
      </section>

      {/* Services Sections - Alternating Full Width */}
      {services.map((service, index) => (
        <section key={service.id} className="relative bg-white">
          {/* Decorative Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-96 h-96 bg-[#16a34a] opacity-5 rounded-full blur-3xl`}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              {/* Image Side */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  {/* Main Image */}
                  <div className="relative rounded overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Floating Badge */}
                  
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-xl p-4">
                    <div className="grid grid-cols-2 gap-4">
                      {service.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-[#16a34a]">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 space-y-6">
                {/* Section Label */}
             

                {/* Title */}
                <h2 className="text-4xl font-bold text-gray-900">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-3 gap-4 py-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-center p-3 bg-gray-50 rounded-xl">
                      <div className="text-[#16a34a] mb-2 flex justify-center">
                        {feature.icon}
                      </div>
                      <span className="text-xs font-medium text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="inline-flex items-center text-[#16a34a] font-semibold group">
                    <span>Learn More About {service.title}</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Separator (except for last item) */}
          {index < services.length - 1 && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200"></div>
            </div>
          )}
        </section>
      ))}

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-[#16a34a]/10 text-[#16a34a] px-4 py-2 rounded-full mb-4">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The <span className="text-[#16a34a]">Baumann</span> Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our comprehensive approach to solar energy solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#16a34a]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-[#16a34a]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">German Engineering</h3>
              <p className="text-gray-600">
                Precision-engineered systems built to German standards for maximum efficiency and longevity, ensuring your investment delivers for decades.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#16a34a]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-[#16a34a]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">10-Year Warranty</h3>
              <p className="text-gray-600">
                Industry-leading warranty coverage for complete peace of mind, backed by our commitment to quality and long-term reliability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#16a34a]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HeadphonesIcon className="w-8 h-8 text-[#16a34a]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Premium Support</h3>
              <p className="text-gray-600">
                Round-the-clock expert support from certified engineers ensuring your energy system operates at peak performance always.
              </p>
            </div>
          </div>

          {/* Additional Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Award />, text: "Certified Professionals" },
              { icon: <CheckCircle />, text: "100% Satisfaction" },
              { icon: <Battery />, text: "Premium Components" },
              { icon: <Leaf />, text: "Eco-Friendly" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-center space-x-2 text-gray-600">
                <span className="text-[#16a34a]">{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section  className="w-full bg-cover bg-center py-20 relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Power Your Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to clean, reliable solar energy with Baumann Energy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={()=>window.location.href='/contact'} className="bg-white text-[#16a34a] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center group">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={()=>window.location.href='/projects'} className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Projects
            </button>
          </div>
        </div>
      </section> <Footer/>
    </div>
    
    </>
  );
};

export default Services;