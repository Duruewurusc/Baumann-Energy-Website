import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhatsAppButton from "./components/WhatsAppButton";
import NotFound from "./pages/NotFound";
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from "./pages/Contact";
import Distributor from "./pages/Distributor";
import CaseStudies from "./pages/CaseStudies";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/distributors" element={<Distributor />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/case-studies" element={<CaseStudies />} /> 
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        {/* Catch-all route MUST be last */}
        <Route path="*" element={<NotFound />} />
       
     
      </Routes>
       <WhatsAppButton />
    </BrowserRouter>
    </>
  )
}

export default App
