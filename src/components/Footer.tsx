import { motion } from "framer-motion";

interface Props {}

export function Footer({}: Props) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://static.databutton.com/public/382e042e-e4fe-45d4-8de4-44fa7ca2cc83/2025-03-07_12-22-46.png" 
                alt="Symetrix360 Logo" 
                className="h-12 w-auto"
              />
              <span className="text-white font-bold text-xl">Symetrix360</span>
            </div>
            <p className="mb-4">Expert ERP Application Management Services for SAP and Acumatica solutions.</p>
            <div className="flex space-x-4">
              <SocialIcon icon="facebook" />
              <SocialIcon icon="twitter" />
              <SocialIcon icon="linkedin" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <FooterLink href="/sap-by-design">SAP ByDesign</FooterLink>
              <FooterLink href="/sap-s4hana">SAP S/4 HANA</FooterLink>
              <FooterLink href="/acumatica">Acumatica</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <FooterLink href="/#incident-management">Incident Management</FooterLink>
              <FooterLink href="/#technical-support">Technical Support</FooterLink>
              <FooterLink href="/#security-compliance">Security & Compliance</FooterLink>
              <FooterLink href="/#upgrade-management">Upgrade Management</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="mb-2">support@symetrix360.com</p>
            <p className="mb-2">+1 (562) 313-9235</p>
            <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-md font-medium transition-colors hover:bg-blue-50">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Symetrix360. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li>
      <a 
        href={href} 
        className="hover:text-yellow-200 transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
}

interface SocialIconProps {
  icon: "facebook" | "twitter" | "linkedin";
}

function SocialIcon({ icon }: SocialIconProps) {
  const iconPath = {
    facebook: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
    twitter: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
    linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  };
  
  return (
    <motion.a 
      href="#" 
      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
      whileTap={{ scale: 0.95 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d={iconPath[icon]} />
      </svg>
    </motion.a>
  );
}
