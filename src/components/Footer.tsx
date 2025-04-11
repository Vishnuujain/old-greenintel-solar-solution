
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
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-white text-greenintel-primary font-bold p-2 rounded-md">GI</span>
              <span className="font-display font-bold text-xl text-white">GreenIntel</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
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

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-greenintel-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-greenintel-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-greenintel-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {currentYear} GreenIntel Energy Solutions. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
