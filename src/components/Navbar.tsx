import { Link } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <img 
                src="/epiplay-logo.png" 
                alt="EpiPlay Logo" 
                className="h-12 w-12 object-contain" 
              />
              <span className="text-xl font-semibold">
                EpiPlay
              </span>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <button onClick={() => scrollToSection("features")} className="text-gray-600 hover:text-primary">Features</button>
            <button onClick={() => scrollToSection("faq")} className="text-gray-600 hover:text-primary">FAQ</button>
            <button onClick={() => scrollToSection("download")} className="text-gray-600 hover:text-primary">Download</button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <div className="flex flex-col space-y-2">
            <button onClick={() => scrollToSection("features")} className="text-gray-600 hover:text-primary px-3 py-2 rounded-md">Features</button>
            <button onClick={() => scrollToSection("faq")} className="text-gray-600 hover:text-primary px-3 py-2 rounded-md">FAQ</button>
            <button onClick={() => scrollToSection("download")} className="text-gray-600 hover:text-primary px-3 py-2 rounded-md">Download</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
