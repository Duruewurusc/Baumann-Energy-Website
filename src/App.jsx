import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhatsAppButton from "./components/WhatsAppButton";
import NotFound from "./pages/NotFound";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Catch-all route MUST be last */}
        <Route path="*" element={<NotFound />} />
     
      </Routes>
       <WhatsAppButton />
    </BrowserRouter>
    </>
  )
}

export default App
