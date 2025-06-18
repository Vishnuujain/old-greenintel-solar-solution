
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-background border-b border-muted/50 sticky top-0 z-40 backdrop-blur-lg">
      <div className="container-custom flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="lg:col-span-2">
                 <div className="flex items-center mb-6">
                   <img 
                     src="../Green1.png" 
                     alt="GreenIntel Logo" 
                     className="bg-white h-12 w-auto object-contain rounded-sm"
                   />
                 </div>
                 
                 
               </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className="font-medium text-foreground hover:text-greenintel-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Button className="btn-primary" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-muted/50 px-4 py-2 animate-fade-in">
          <div className="flex flex-col space-y-3 py-3">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className="font-medium text-foreground hover:text-greenintel-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="btn-primary w-full mt-2" asChild>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
