import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {}

export function NavBar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 px-4 sm:px-6 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="cursor-pointer flex items-center gap-2"
          >
            <img 
              src="https://static.databutton.com/public/382e042e-e4fe-45d4-8de4-44fa7ca2cc83/2025-03-07_12-22-46.png" 
              alt="Symetrix360 Logo" 
              className="h-12 w-auto object-contain"
            />
            <span className="text-blue-900 font-bold text-xl">Symetrix360</span>
          </motion.div>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <NavLink href="/" label="Home" />
          <NavLink href="/sap-by-design" label="SAP ByDesign" />
          <NavLink href="/sap-s4hana" label="SAP S/4 HANA" />
          <NavLink href="/acumatica" label="Acumatica" />
          <NavLink href="/about-us" label="About Us" />
          <NavLink href="/portal" label="Support" isButton={true} />
          <NavLink href="/admin" label="Admin" />
        </div>

        <div className="md:hidden">
          {/* Mobile menu toggle */}
          <button 
            className="text-gray-800 p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 md:hidden transition-all duration-300 ease-in-out z-50">
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="/sap-by-design" label="SAP ByDesign" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="/sap-s4hana" label="SAP S/4 HANA" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="/acumatica" label="Acumatica" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="/about-us" label="About Us" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="/portal" label="Support" onClick={() => setMobileMenuOpen(false)} isButton />
            <MobileNavLink href="/admin" label="Admin" onClick={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </motion.nav>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
  isButton?: boolean;
}

function NavLink({ href, label, isButton = false }: NavLinkProps) {
  const navigate = useNavigate();
  
  if (isButton) {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-md shadow-sm transition-all duration-300 flex items-center h-8 px-4 -mt-1"
        onClick={() => navigate(href)}
      >
        {label}
      </motion.button>
    );
  }
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group cursor-pointer"
      onClick={() => navigate(href)}
    >
      <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
        {label}
      </span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
    </motion.div>
  );
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

function MobileNavLink({ href, label, isButton = false, onClick }: MobileNavLinkProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    onClick();
    navigate(href);
  };
  
  if (isButton) {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-md shadow-sm transition-all duration-300 flex items-center justify-center h-10 px-4 w-full"
        onClick={handleClick}
      >
        {label}
      </motion.button>
    );
  }
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="py-2 border-b border-gray-100 last:border-b-0 w-full"
      onClick={handleClick}
    >
      <span className="font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200">
        {label}
      </span>
    </motion.div>
  );
}