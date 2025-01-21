import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/epiplay-logo.png" 
                alt="EpiPlay Logo" 
                className="h-12 w-12 object-contain" 
              />
              <span className="text-xl font-semibold">
                EpiPlay
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("features")} className="text-gray-600 hover:text-primary">Features</button>
            <button onClick={() => scrollToSection("faq")} className="text-gray-600 hover:text-primary">FAQ</button>
            <button onClick={() => scrollToSection("download")} className="text-gray-600 hover:text-primary">Download</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;