
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/about#team" },
      { name: "Careers", path: "/careers" },
      { name: "News", path: "/news" }
    ],
    services: [
      { name: "Consultancy", path: "/services#consultancy" },
      { name: "Sustainability", path: "/services#sustainability" },
      { name: "Installation", path: "/services#installation" },
      { name: "AI Solutions", path: "/services#ai-solutions" }
    ],
    resources: [
      { name: "Blog", path: "/blog" },
      { name: "Whitepapers", path: "/resources#whitepapers" },
      { name: "Case Studies", path: "/resources#case-studies" },
      { name: "FAQs", path: "/faq" }
    ]
  };

  return (
    <footer className="bg-greenintel-dark text-white">
  <div className="container-custom py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      {/* Logo and Info */}
      <div className="lg:col-span-2">
        <div className="flex items-center mb-6">
          <img 
            src="../Green1.png" 
            alt="GreenIntel Logo" 
            className="bg-white h-12 w-auto object-contain rounded-sm"
          />
        </div>
        <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
          Empowering a clean & intelligent renewable future through AI-powered solar solutions and sustainability consulting.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-greenintel-accent transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-white hover:text-greenintel-accent transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-white hover:text-greenintel-accent transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-white hover:text-greenintel-accent transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Company Links */}
      <div>
        <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
        <ul className="space-y-3">
          {footerLinks.company.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className="text-gray-300 hover:text-greenintel-accent transition-colors text-sm"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Services Links */}
      <div>
        <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
        <ul className="space-y-3">
          {footerLinks.services.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className="text-gray-300 hover:text-greenintel-accent transition-colors text-sm"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Resources Links */}
      <div>
        <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
        <ul className="space-y-3">
          {footerLinks.resources.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className="text-gray-300 hover:text-greenintel-accent transition-colors text-sm"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    {/* Bottom Section */}
    <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm text-gray-400">
        © {currentYear} GreenIntel Energy Solutions. All rights reserved.
      </p>
      <div className="mt-4 md:mt-0 flex space-x-6">
        <Link 
          to="/privacy-policy" 
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          Privacy Policy
        </Link>
        <Link 
          to="/terms" 
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          Terms of Service
        </Link>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
