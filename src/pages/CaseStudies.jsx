import { HiOutlineLocationMarker, HiOutlineLightningBolt, HiOutlineCalendar, HiOutlineCube } from "react-icons/hi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Import hero image from assets folder
import heroImage from "../assets/install.jpg"; // Adjust path if your image has a different name
import h1 from "../assets/case-studies/s3.jpeg"; // Adjust path if your image has a different name
import i3 from "../assets/case-studies/i3.jpeg"; // Adjust path if your image has a different name
import b3 from "../assets/case-studies/b3.jpeg"; // Adjust path if your image has a different name
import bi3 from "../assets/case-studies/bi3.jpeg"; // Adjust path if your image has a different name

const projects = [
  {
    title: "Filling Station Solar Canopy",
    location: "Lagos, Nigeria",
    capacity: "75 KVA / 60 kW",
    panels: "50 panels",
    completed: "March 2025",
    description:
      "A full rooftop installation for a FILLING STATION. This system offsets 92% of the facility's annual energy consumption, saving the client over N3,000,000 per year.",
    heroImage: h1,
    galleryImages: [
      i3,
      b3,
      bi3,
      
    ],
  },

  
];

const stats = [
  { icon: HiOutlineLightningBolt, label: "Capacity" },
  { icon: HiOutlineCube, label: "Panels" },
  { icon: HiOutlineCalendar, label: "Completed" },
];

const statKeys = ["capacity", "panels", "completed"];

const ProjectShowcase = () => {
  return (
    <>
      <Navbar />
      <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-150 bg-linear-to-r from-gray-900 to-gray-800">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Solar panels on a bright day"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Hero Content */}
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <div className="animate-fade-in-up">
            <span className="mb-4 inline-block rounded-full bg-[#16a34a]/20 px-4 py-1.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm">
              Powering a Sustainable Future
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Solar Solutions That
              <span className="block text-[#16a34a]">Illuminate Possibilities</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-200 sm:text-xl">
              From residential rooftops to utility-scale farms, we deliver clean energy solutions that reduce costs and protect our planet.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white">
            <div className="mt-2 h-2 w-1 rounded-full bg-white" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block rounded-md bg-[#16a34a]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#16a34a]">
              Our Work
            </span>
            <h2 className="text-4xl font-bold tracking-tight  text-[#16a34a] sm:text-5xl">
              Featured Projects
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              From rooftops to open fields, see how we're helping homes, businesses, and communities harness the sun.
            </p>
          </div>

          <div className="space-y-0">
            {projects.map((project, index) => {
              const isGray = index % 2 === 0;
              return (
                <div
                  key={project.title}
                  className={`py-20 transition-all duration-300 ${isGray ? "bg-gray-50" : "bg-white"}`}
                  style={{ 
                    marginLeft: "calc(-50vw + 50%)", 
                    marginRight: "calc(-50vw + 50%)", 
                    paddingLeft: "calc(50vw - 50%)", 
                    paddingRight: "calc(50vw - 50%)" 
                  }}
                >
                  <div className="mx-auto max-w-7xl px-6">
                    {/* Mobile: Title first */}
                    <div className="mb-6 lg:hidden">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <div className="mt-2 flex items-center gap-1.5 text-gray-600">
                        <HiOutlineLocationMarker className="h-4 w-4 text-[#16a34a]" />
                        <span className="text-sm font-medium">{project.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-12">
                      {/* Portrait Hero Image - Square corners */}
                      <div className="w-full lg:w-2/5">
                        <div className="overflow-hidden shadow-lg shadow-[#16a34a]/5 h-full">
                          <img
                            src={project.heroImage}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform rounded duration-700 hover:scale-105"
                            style={{ minHeight: "400px", maxHeight: "600px" }}
                          />
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="w-full lg:w-3/5">
                        {/* Desktop: Title and Location */}
                        <div className="mb-6 hidden lg:block">
                          <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            {project.title}
                          </h3>
                          <div className="mt-2 flex items-center gap-1.5 text-gray-600">
                            <HiOutlineLocationMarker className="h-4 w-4 text-[#16a34a]" />
                            <span className="text-sm font-medium">{project.location}</span>
                          </div>
                        </div>

                        {/* Gallery Row - 3 Columns with square corners */}
                        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                          {project.galleryImages.map((galleryImage, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group"
                            >
                              <img
                                src={galleryImage}
                                alt={`${project.title} view ${imgIndex + 1}`}
                                className="aspect-video w-full object-cover rounded transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Stats Cards with accent color */}
                        <div className="mb-8 grid grid-cols-3 gap-4">
                          {stats.map((stat, i) => {
                            const Icon = stat.icon;
                            const value = project[statKeys[i]];
                            return (
                              <div
                                key={stat.label}
                                className="border border-gray-200 bg-gray-50 px-4 py-3 text-center transition-all duration-300 hover:border-[#16a34a] hover:shadow-md"
                              >
                                <Icon className="mx-auto mb-1.5 h-5 w-5 text-[#16a34a]" />
                                <p className="text-sm font-bold text-gray-900">{value}</p>
                                <p className="text-xs text-gray-600">{stat.label}</p>
                              </div>
                            );
                          })}
                        </div>

                        {/* Description */}
                        <p className="leading-relaxed text-gray-600">
                          {project.description}
                        </p>
                        
                        {/* Optional: View Project Button */}
                        <button className="mt-6 inline-flex items-center gap-2 text-[#16a34a] font-semibold hover:gap-3 transition-all duration-300 group">
                          View Project Details
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer /></div>
    </>
  );
};

export default ProjectShowcase;

// Add this CSS to your global stylesheet (e.g., index.css or App.css)
/*
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
*/