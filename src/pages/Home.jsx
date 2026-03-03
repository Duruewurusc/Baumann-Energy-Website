import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/About";
import Statistics from "../components/Statistics";
import Solutions from "../components/Solutions";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import CTASection from "../components/CTA";

function Home() {
  return (
   <>
    <Navbar/>
    <HeroSection />
    <AboutSection/>
    <Statistics/>
    <Solutions/>
    <FeaturedProducts/>
    <Testimonials/>
    <CTASection/>
    <Footer/>
    

    </>
    
    
  );
}

export default Home;