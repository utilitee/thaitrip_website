import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleThaitripClick = () => {
    window.open(
      "https://thaitripsau.utilitee.me",
      "Thaitrip",
      "width=1480,height=980,scrollbars=yes"
    );
  };

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const navLinks = [
    { title: "Generate Prompt", id: "createprompt" },
    { title: "About", id: "about" },
    { title: "How to Use", id: "howtouse" },
    { title: "Chat Tips", id: "tips" },
  ];

  return (
    <div className="navbar bg-base-100 sticky top-0 z-10 px-4">
      {/* Logo Section */}
      <div className="flex-1">
        <button 
          onClick={handleThaitripClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="btn btn-ghost text-xl flex items-center space-x-2"
        >
          <img
            src={isHovered ? "/images/Logo/HoverLogo.png" : "/images/Logo/Logo.png"}
            alt="Thaitrip Logo"
            className="h-10 w-10 transition-transform duration-300 hover:scale-110"
          />
          <span className="hover:text-red-700 transition-colors duration-300">ThaiTrip</span>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-2">
        {navLinks.map((link) => (
          <button 
            key={link.id}
            onClick={() => scrollToSection(link.id)} 
            className="btn btn-ghost text-l hover:bg-gray-100 hover:text-red-700 transition-all duration-300"
          >
            {link.title}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="btn btn-ghost"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-base-100 shadow-lg md:hidden">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="btn btn-ghost text-l hover:bg-gray-100 hover:text-red-700 transition-all duration-300 justify-start"
              >
                {link.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};