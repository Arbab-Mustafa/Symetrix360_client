import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavBar } from "components/NavBar";
import { Footer } from "components/Footer";
import { AcumaticaEcosystem } from "components/AcumaticaEcosystem";

// Acumatica Video Showcase section
function AcumaticaVideoShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
            SPOTLIGHT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Discover Acumatica in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Acumatica's powerful cloud ERP platform can transform your business operations
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto relative shadow-2xl rounded-xl overflow-hidden"
        >
          <div className="w-full" style={{ paddingBottom: '100%', position: 'relative' }}>
            <iframe 
              src="https://fast.wistia.net/embed/iframe/6oopa0e8es?secret=bprdPdXkIy" 
              title="Acumatica Video" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 md:p-8 border-t border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Why Businesses Choose Acumatica</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-blue-800">
              <div className="flex items-start">
                <div className="mr-3 mt-1 text-blue-500">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm">Cloud-native platform with anytime, anywhere access</p>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1 text-blue-500">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm">Flexible licensing model that grows with your business</p>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1 text-blue-500">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm">End-to-end visibility across all business operations</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Hero section component
function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative min-h-[80vh] flex items-center text-white py-20 overflow-hidden">
      {/* High quality background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Business professionals shaking hands over a deal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-3 py-1 bg-yellow-500 text-blue-900 text-sm font-medium rounded-full mb-4">
              ACUMATICA CLOUD ERP 2025 R1
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Maximize Your Acumatica <span className="text-yellow-400">Investment</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-lg">
              Comprehensive support services for the latest Acumatica 2025 R1 release. Optimize your ERP system, enhance productivity, and drive business growth.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-md shadow-lg transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Expert Support
              </motion.a>
              <motion.a
                href="#services"
                className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl relative z-10">
              <div className="flex items-center justify-center mb-8">
                <img 
                  src="https://static.databutton.com/public/382e042e-e4fe-45d4-8de4-44fa7ca2cc83/Acumatica-Logo-Transparent-Background-Best-ERP-Section-ElevatIQ-Website-300x75.png" 
                  alt="Acumatica Logo" 
                  className="h-20 object-contain bg-white rounded-xl p-3"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <div className="text-yellow-400 mb-2">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold">+40%</span>
                  <span className="text-sm text-blue-200">Efficiency Gain</span>
                </div>
                
                <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <div className="text-yellow-400 mb-2">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold">-65%</span>
                  <span className="text-sm text-blue-200">Response Time</span>
                </div>
                
                <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <div className="text-yellow-400 mb-2">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold">99.9%</span>
                  <span className="text-sm text-blue-200">System Uptime</span>
                </div>
                
                <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <div className="text-yellow-400 mb-2">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold">+28%</span>
                  <span className="text-sm text-blue-200">ROI Increase</span>
                </div>
              </div>
              
              <div className="mt-6 bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-900 p-3 rounded-lg text-center font-medium">
                Certified Acumatica Support Partner
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceOfferings() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Implementation Support",
      description: "Expert guidance for implementing Acumatica Cloud ERP tailored to your specific business requirements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Custom Development",
      description: "Tailored development solutions that extend Acumatica's capabilities to match your unique business processes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Integration Services",
      description: "Seamless integration with third-party applications to create a unified business ecosystem with Acumatica at its core.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: "Technical Support",
      description: "Responsive technical assistance to resolve issues, optimize performance, and keep your Acumatica system running smoothly.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Training & Adoption",
      description: "Comprehensive training programs to ensure your team maximizes the benefits of Acumatica's powerful features.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Performance Optimization",
      description: "Expert analysis and tuning to ensure your Acumatica implementation delivers maximum speed and efficiency.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Acumatica Support Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end services to help you maximize your Acumatica investment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-6"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
            SEAMLESS INTEGRATIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Connect Your Entire Business Ecosystem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acumatica's open architecture enables seamless integration with virtually any business system
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AcumaticaEcosystem className="my-10" />
        </motion.div>
      </div>
    </section>
  );
}

function Expertise() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    "Certified Acumatica implementation specialists",
    "Deep expertise in custom module development",
    "Experience across distribution, manufacturing, and service industries",
    "Specialized knowledge in financial processes and reporting",
    "Advanced integration capabilities with third-party systems",
    "Extensive experience with Acumatica's xRP platform"
  ];

  return (
    <section className="py-20 bg-white" id="expertise">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Acumatica Expertise You Can Trust</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team brings decades of combined experience in Acumatica implementation, customization, and support services to help you maximize your investment in this powerful cloud ERP solution.
            </p>
            
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="mr-4 mt-1 text-blue-500">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Decorative elements */}
            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-yellow-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="rounded-full bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Expertise</h3>
                <p className="text-gray-600">Specialized knowledge in setting up role-based security and compliance protocols for Acumatica deployments.</p>
              </motion.div>
              
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="rounded-full bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Templates</h3>
                <p className="text-gray-600">Pre-built configurations and workflows optimized for specific industries and business models.</p>
              </motion.div>
              
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="rounded-full bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Optimization</h3>
                <p className="text-gray-600">Techniques for improving system speed, reducing resource usage, and optimizing workflows for efficiency.</p>
              </motion.div>
              
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="rounded-full bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Reporting</h3>
                <p className="text-gray-600">Expertise in creating custom dashboards, reports and business intelligence solutions with Acumatica.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "The Acumatica support team at Symetrix360 has consistently provided exceptional service. Their in-depth knowledge of the platform and rapid response times have been critical to our business operations.",
      author: "Jennifer Martinez",
      position: "CFO, Regional Distribution Company",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Symetrix360's custom Acumatica development has transformed our financial reporting. We now have complete visibility across all business units that was impossible with our previous solution.",
      author: "Mark Johnson",
      position: "Director of IT, Mid-Market Retailer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Their deep expertise in both Acumatica implementation and ongoing support has given us a competitive edge. We've seen increased efficiency across all departments since partnering with them.",
      author: "Samantha Wilson",
      position: "COO, Professional Services Firm",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 bg-blue-800 text-blue-100 text-sm font-medium rounded-full mb-4">
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We've helped businesses across industries maximize their Acumatica investment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  {/* Quote icon */}
                  <svg className="w-10 h-10 text-yellow-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
                  </svg>
                  <p className="italic text-blue-50">{testimonial.quote}</p>
                </div>
                <div className="mt-auto flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-yellow-400"
                  />
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-blue-200 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const caseStudies = [
    {
      company: "West Coast Distribution Inc.",
      logo: "https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      challenge: "Struggling with outdated inventory management system and manual order processing that couldn't scale with growing business demands.",
      solution: "Implemented Acumatica Distribution Edition with custom integrations to e-commerce platform and shipping systems.",
      results: [
        "Reduced order processing time by 78%",
        "Achieved real-time inventory visibility across 5 warehouses",
        "Integrated e-commerce platform resulting in 35% growth"
      ]
    },
    {
      company: "MedTech Manufacturing Ltd.",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      challenge: "Complex regulatory requirements and disconnected production systems causing compliance issues and production delays.",
      solution: "Deployed Acumatica Manufacturing Edition with custom compliance modules and real-time production monitoring.",
      results: [
        "Achieved 100% regulatory compliance documentation",
        "Reduced production planning cycle by 50%",
        "Improved quality control leading to 23% reduction in returns"
      ]
    },
    {
      company: "Summit Professional Services",
      logo: "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      challenge: "Difficulty tracking project profitability and resource utilization across multiple client engagements and service lines.",
      solution: "Implemented Acumatica Project Accounting with custom dashboards for real-time profitability tracking and resource management.",
      results: [
        "Increased overall project profitability by 18%",
        "Achieved 93% resource utilization (up from 76%)",
        "Reduced billing cycle from 15 days to 3 days"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
            SUCCESS STORIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Results with Acumatica</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses have transformed their operations with our Acumatica solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="flex items-center justify-center h-40 bg-gray-50 relative overflow-hidden">
                {/* Company logo or image */}
                <div className="absolute inset-0 bg-blue-600 opacity-10 z-0"></div>
                <div className="relative z-10 p-4">
                  <img 
                    src={study.logo} 
                    alt={study.company} 
                    className="h-20 w-20 object-cover rounded-full border-4 border-white shadow-lg mx-auto"
                  />
                  <h3 className="text-xl font-bold text-gray-900 text-center mt-2">{study.company}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Challenge</h4>
                  <p className="text-gray-700">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Solution</h4>
                  <p className="text-gray-700">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <a 
                  href="#contact" 
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center"
                >
                  Request Similar Solution
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "What makes your Acumatica managed services different?",
      answer: "Our Acumatica managed services stand out through our certified expertise, proactive approach to system optimization, and industry-specific best practices. We provide dedicated support, custom development capabilities, and strategic guidance to maximize your ROI."
    },
    {
      question: "How quickly can you respond to support issues?",
      answer: "We offer tiered response times based on issue severity, with critical issues addressed within an hour. Our dedicated support team utilizes an advanced ticketing system to track and resolve all issues efficiently, with regular status updates provided throughout the resolution process."
    },
    {
      question: "Can you help with customizing Acumatica for our specific business needs?",
      answer: "Absolutely. Our team includes experienced Acumatica developers who specialize in creating custom modules, reports, dashboards, and workflows. We follow a collaborative development process that begins with thorough business analysis to ensure all customizations align with your specific operational requirements."
    },
    {
      question: "Do you provide Acumatica training for our team?",
      answer: "Yes, we offer comprehensive Acumatica training programs tailored to different user roles within your organization. Our training options include on-site workshops, virtual training sessions, video tutorials, and detailed documentation. We also provide refresher training for system updates and new features."
    },
    {
      question: "How do you handle Acumatica upgrades and updates?",
      answer: "Our upgrade process includes thorough pre-upgrade testing in a dedicated sandbox environment, compatibility verification for all customizations, and a detailed rollback plan. We schedule upgrades to minimize business disruption and provide comprehensive post-upgrade support to ensure system stability."
    },
    {
      question: "Can you integrate Acumatica with our other business systems?",
      answer: "We have extensive experience integrating Acumatica with various business systems including CRM, e-commerce platforms, EDI, shipping solutions, and specialized industry applications. We can develop custom integrations or leverage existing APIs and middleware solutions to create seamless data flows across your entire business ecosystem."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Questions About Our Acumatica Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our Acumatica managed services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <motion.div 
        className={`border ${isOpen ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-white'} rounded-lg shadow-sm transition-all duration-300`}
        whileHover={{ y: -2, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
        animate={{ borderColor: isOpen ? '#bfdbfe' : '#e5e7eb' }}
      >
        <button
          className="flex justify-between items-center w-full px-6 py-5 text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-medium text-gray-900">{question}</h3>
          <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
        
        <motion.div 
          className="overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-4">
            {answer}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
              GET IN TOUCH
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Maximize Your Acumatica Investment?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Connect with our Acumatica experts today and discover how our managed services can help you drive productivity, streamline processes, and accelerate growth.
            </p>
            
            <div className="flex flex-col space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600">Our Acumatica solutions team is available Mon-Fri, 8am-7pm</p>
                  <a href="tel:+15621392355" className="text-blue-600 font-medium hover:text-blue-800 mt-1 inline-block">+1 (562) 139-2355</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">Our support team will get back to you within 24 hours</p>
                  <a href="mailto:acumatica@symetrix360.com" className="text-blue-600 font-medium hover:text-blue-800 mt-1 inline-block">acumatica@symetrix360.com</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-gray-50 rounded-xl shadow-lg p-8 border border-gray-200"
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Consultation</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="company">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your Company Ltd."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="jane.doe@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Tell us about your Acumatica needs..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium text-lg shadow-md transition-all duration-300"
              >
                Schedule Your Free Consultation
              </motion.button>
              
              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Acumatica() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-20">
        <HeroSection />
        <ServiceOfferings />
        <AcumaticaVideoShowcase />
        <IntegrationSection />
        <Expertise />
        <Testimonials />
        <CaseStudies />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}