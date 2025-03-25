import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavBar } from "components/NavBar";
import { Footer } from "components/Footer";

// Contact section component
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Accelerate Your Digital Transformation?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Connect with our SAP S/4 HANA experts today and discover how our managed services can help you drive innovation, streamline operations, and gain competitive advantages.
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
                  <p className="text-gray-600">Our enterprise solutions team provides dedicated support</p>
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
                  <p className="text-gray-600">Our enterprise team will get back to you within 24 hours</p>
                  <a href="mailto:hana@symetrix360.com" className="text-blue-600 font-medium hover:text-blue-800 mt-1 inline-block">hana@symetrix360.com</a>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Enterprise Assessment</h3>
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
                  placeholder="Enterprise Inc."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="jane.doe@enterprise.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Tell us about your S/4 HANA needs..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium text-lg shadow-md transition-all duration-300"
              >
                Schedule Your Free Enterprise Assessment
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

// Testimonials section component
function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "Symetrix360's SAP S/4 HANA support team has been instrumental in our digital transformation journey. Their expertise helped us leverage real-time analytics to drive critical business decisions.",
      author: "Thomas Reynolds",
      position: "CTO, Global Manufacturing Enterprise",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "The custom S/4 HANA dashboards developed by Symetrix360 have revolutionized how we manage our global supply chain. We now have real-time visibility that was impossible before.",
      author: "Rebecca Kim",
      position: "VP of Operations, International Distribution Corp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Their expertise in S/4 HANA migration was exceptional. The team guided us through a complex transition with minimal disruption and helped us unlock the full potential of our data.",
      author: "David Chen",
      position: "CFO, Enterprise Technologies",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
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
            We've helped enterprises worldwide maximize their S/4 HANA investment
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

export default function SapS4Hana() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-20">
        <HeroSection />
        <ServiceOfferings />
        <Expertise />
        <Testimonials />
        <CaseStudies />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

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
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Digital transformation with S/4 HANA" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-transparent opacity-90"></div>
      </div>
      
      {/* Visual elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute transform -rotate-12 -right-64 -top-64 w-96 h-96 rounded-full bg-yellow-400 opacity-20"></div>
        <div className="absolute transform rotate-12 -left-64 -bottom-64 w-96 h-96 rounded-full bg-blue-500 opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="backdrop-blur-sm bg-blue-900/30 p-8 rounded-xl border border-blue-700/50 shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mb-4"
            >
              ENTERPRISE-CLASS SOLUTIONS
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sans">
              Power Your Enterprise With
              <span className="text-yellow-400 block mt-2">SAP S/4 HANA</span>
            </h1>
            
            <p className="text-xl mb-8 text-blue-100">
              Achieve unparalleled efficiency and real-time insights with our comprehensive support and optimization services for SAP S/4 HANA.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-md font-medium text-lg shadow-lg flex items-center justify-center"
              >
                Request a Demo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-opacity-30 bg-opacity-20 backdrop-blur-sm px-8 py-4 rounded-md font-medium text-lg border border-white border-opacity-30 flex items-center justify-center text-white"
              >
                Explore Services
              </motion.a>
            </div>
            
            {/* Social proof */}
            <div className="flex flex-col space-y-4">
              <p className="text-sm font-medium text-blue-200">MODULES WE SERVE</p>
              <div className="flex flex-wrap gap-3 items-center">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">FICO</span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">MM</span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">SD</span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">EWM</span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">PP</span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">Other Modules</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl">
                <img 
                  src="https://static.databutton.com/public/382e042e-e4fe-45d4-8de4-44fa7ca2cc83/hana.png" 
                  alt="SAP S/4 HANA" 
                  className="relative z-10 max-h-80 object-contain bg-white p-4 rounded-lg shadow-xl"
                />
                
                {/* Floating feature indicators */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow-lg"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  Real-time Analytics
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-yellow-500 text-gray-900 text-sm px-3 py-1 rounded-full shadow-lg"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  In-Memory Database
                </motion.div>
              </div>
            </div>
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
      title: "Technical Administration",
      description: "Expert technical management of your SAP S/4 HANA landscape including performance optimization and monitoring.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: "Functional Support",
      description: "End-to-end functional support across finance, supply chain, manufacturing, and other core S/4 HANA modules.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Database Management",
      description: "Specialized HANA database administration and optimization to ensure peak performance and reliability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: "Advanced Analytics",
      description: "Implementation and support for embedded analytics and real-time reporting capabilities of S/4 HANA.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Migration & Upgrade",
      description: "Seamless migration from legacy SAP systems to S/4 HANA and expert management of version upgrades.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: "Integration Services",
      description: "Connect S/4 HANA with other enterprise systems and cloud applications for a unified business ecosystem.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -right-40 -bottom-40 w-80 h-80 rounded-full bg-blue-50"></div>
        <div className="absolute left-0 top-1/2 w-40 h-40 rounded-full bg-yellow-50"></div>
        <div className="absolute right-1/4 top-20 w-6 h-6 rounded-full bg-yellow-400"></div>
        <div className="absolute left-1/4 bottom-20 w-6 h-6 rounded-full bg-blue-400"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
            ENTERPRISE SOLUTIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Transform Your S/4 HANA Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experts deliver tailored services that maximize your ROI and accelerate digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      
        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium text-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            Schedule a Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 border-t-4 border-blue-600 group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, borderColor: "#EAB308" }}
    >
      <div className="p-8">
        <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-yellow-100 group-hover:text-yellow-600 transition-colors duration-300 transform group-hover:rotate-3">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-700">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
          Learn more
          <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

// FAQ Section component
function FaqSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "What makes your SAP S/4 HANA managed services different?",
      answer: "Our SAP S/4 HANA managed services stand out through our certified expertise, proactive approach to system optimization, and industry-specific best practices. We provide dedicated support, custom development capabilities, and strategic guidance to maximize your ROI."
    },
    {
      question: "How quickly can you respond to support issues?",
      answer: "We offer tiered response times based on issue severity, with critical issues addressed within an hour. Our dedicated support team utilizes an advanced ticketing system to track and resolve all issues efficiently, with regular status updates provided throughout the resolution process."
    },
    {
      question: "Do you offer implementation services or only support?",
      answer: "While our core focus is on providing exceptional support and managed services for existing SAP S/4 HANA implementations, we also offer implementation services for businesses looking to adopt this solution. Our approach emphasizes a smooth transition from implementation to ongoing support."
    },
    {
      question: "Can you customize SAP S/4 HANA to meet our specific business needs?",
      answer: "Absolutely. Our team includes expert developers who specialize in extending SAP S/4 HANA's capabilities through custom development, reports, dashboards, and integrations with other business systems. We work closely with you to understand your requirements and implement solutions that drive business value."
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Questions About Our SAP S/4 HANA Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most frequently asked questions about our support and services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-6 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 p-6 pt-0"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              </details>
            </motion.div>
          ))}
        </div>
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
    "Deep expertise in complex S/4 HANA implementations and migrations",
    "Specialized knowledge of in-memory database optimization",
    "Experience with both on-premise and cloud S/4 HANA deployments",
    "Certified S/4 HANA consultants across all functional areas",
    "Proven methodologies for successful S/4 HANA transformations",
    "Advanced capabilities in Fiori app development and customization"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our S/4 HANA Expertise</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team brings extensive experience in SAP S/4 HANA implementations, migrations, and managed services across diverse industries. We understand the complex landscape of this next-generation ERP and how to optimize it for your specific business requirements.
            </p>
            
            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1 mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            className="relative"
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 transform rotate-3 rounded-2xl opacity-20"></div>
            <div className="relative bg-white shadow-xl rounded-2xl overflow-hidden p-1">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1664575599730-0814817939de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="SAP S/4 HANA Expertise" 
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Intelligent Enterprise Solutions</h3>
                <p className="text-gray-600">
                  We help organizations realize the full potential of S/4 HANA's intelligent capabilities, from predictive analytics to process automation and real-time insights.
                </p>
              </div>
            </div>
          </motion.div>
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
      company: "Enterprise Manufacturer",
      logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      challenge: "Legacy SAP ECC system with performance issues and inability to support digital transformation initiatives",
      solution: "Migration to S/4 HANA with custom Fiori apps and integrated intelligent manufacturing solutions",
      results: [
        "40% faster month-end close process",
        "Real-time production visibility across 8 global plants",
        "$2.3M annual savings through process optimization"
      ]
    },
    {
      company: "Global Retail Corporation",
      logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      challenge: "Complex, disconnected IT landscape with limited visibility across global operations",
      solution: "Implemented S/4 HANA with integrated retail modules and custom analytics dashboards",
      results: [
        "60% reduction in inventory management costs",
        "99.8% system availability with our managed services",
        "Improved forecast accuracy by 35%"
      ]
    }
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from our SAP S/4 HANA implementation and managed services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index}
              company={study.company}
              logo={study.logo}
              challenge={study.challenge}
              solution={study.solution}
              results={study.results}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg shadow-md"
          >
            View All Case Studies
          </motion.button>
        </div>
      </div>
    </section>
  );
}

interface CaseStudyCardProps {
  company: string;
  logo: string;
  challenge: string;
  solution: string;
  results: string[];
  index: number;
}

function CaseStudyCard({ company, logo, challenge, solution, results, index }: CaseStudyCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-gray-50 rounded-xl shadow-md overflow-hidden border border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-white rounded-full p-2 shadow-sm mr-4 flex items-center justify-center">
            <img 
              src={logo} 
              alt={company} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900">{company}</h3>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Challenge</h4>
          <p className="text-gray-700">{challenge}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Solution</h4>
          <p className="text-gray-700">{solution}</p>
        </div>
        
        <div>
          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Results</h4>
          <ul className="space-y-2">
            {results.map((result, idx) => (
              <li key={idx} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-blue-500 to-yellow-400"></div>
    </motion.div>
  );
}