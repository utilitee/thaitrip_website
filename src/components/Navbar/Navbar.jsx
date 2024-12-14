import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleThaitripClick = () => {
    window.open(
      "https://thaitripsau.utilitee.me",
      "Thaitrip",
      "width=1480,height=980,scrollbars=yes"
    );
  };

  // Add smooth scroll function for hash links
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-10">
      <div className="flex-1">
        <button 
          onClick={handleThaitripClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="btn btn-ghost text-xl flex items-center space-x-2"
        >
          <img
            src={isHovered ? "./src/assets/images/Logo/HoverLogo.png" : "./src/assets/images/Logo/Logo.png"}
            alt="Thaitrip Logo"
            className="h-10 w-10 transition-transform duration-300 hover:scale-110"
          />
          <span className="hover:text-blue-600 transition-colors duration-300">ThaiTrip</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('createprompt')} 
          className="btn btn-ghost text-l hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
        >
          Generate Prompt
        </button>

        <button 
          onClick={() => scrollToSection('about')} 
          className="btn btn-ghost text-l hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
        >
          About
        </button>

        <button 
          onClick={() => scrollToSection('howtouse')} 
          className="btn btn-ghost text-l hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
        >
          How to Use
        </button>

        <button 
          onClick={() => scrollToSection('tips')} 
          className="btn btn-ghost text-l hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
        >
          Chat Tips
        </button>
      </div>      
    </div>
  );
}
