import { motion } from "framer-motion";

interface Props {}

export function HeroSection({}: Props) {
  return (
    <div className="relative w-full min-h-screen flex items-center overflow-hidden mt-20">
      {/* Background office image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Professional Team" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70 z-10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500 opacity-10"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0.8, 1],
                x: [0, Math.random() * 150 - 75],
                y: [0, Math.random() * 150 - 75],
                opacity: [0.05, 0.1, 0.05],
                rotate: [0, Math.random() * 30 - 15]
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20 pt-12 pb-12">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="overflow-hidden pb-2"
            >
              <motion.span 
                className="inline-block"
                initial={{ y: 100, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1, color: ["#ffffff", "#93c5fd", "#ffffff"] }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.1, 
                  type: "spring", 
                  stiffness: 100,
                  color: { duration: 3, repeat: Infinity, repeatType: "reverse" }
                }}
              >
                Expert
              </motion.span>
            </motion.div>
            <motion.div 
              className="overflow-hidden pb-2"
            >
              <motion.span 
                className="inline-block"
                initial={{ y: 100, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1, color: ["#fbbf24", "#f59e0b", "#fbbf24"] }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3, 
                  type: "spring", 
                  stiffness: 100,
                  color: { duration: 4, repeat: Infinity, repeatType: "reverse" }
                }}
                whileHover={{ scale: 1.1 }}
              >
                Application
              </motion.span>
            </motion.div>
            <motion.div 
              className="overflow-visible z-30 relative"
            >
              <motion.span 
                className="inline-block"
                initial={{ y: 100, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1, color: ["#ffffff", "#93c5fd", "#ffffff"] }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5, 
                  type: "spring", 
                  stiffness: 100,
                  color: { duration: 5, repeat: Infinity, repeatType: "reverse" }
                }}
              >
                Managed Services
              </motion.span>
            </motion.div>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: {
              duration: 0.8,
              delay: 0.9
            }}}
            whileInView={{
              opacity: [0.7, 1, 0.7],
              transition: {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            Specialized support for your critical business systems with 24/7 expert assistance
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#e3a008", boxShadow: "0 0 15px rgba(251, 191, 36, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg transition-colors duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1, type: "spring" }}
            >
              Get Started
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.3, type: "spring" }}
            >
              Learn More
            </motion.button>
          </div>
          
          {/* Logo showcase - now with jumping animations */}
          <div className="flex justify-center gap-16 flex-wrap">
            <motion.div 
              className="flex justify-center items-center p-6 bg-white/90 rounded-xl shadow-lg w-56 h-36"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, y: [-8, 0, -8] }}
              transition={{ 
                delay: 1.5, 
                duration: 0.8, 
                type: "spring",
                y: {
                  duration: 1.8,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 2
                }
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <img 
                src="https://static.databutton.com/public/382e042e-e4fe-45d4-8de4-44fa7ca2cc83/output-onlinepngtools.png" 
                alt="SAP Business ByDesign" 
                className="max-h-20 max-w-48 object-contain"
              />
            </motion.div>
            
            <motion.div 
              className="flex justify-center items-center p-6 bg-white/90 rounded-xl shadow-lg w-56 h-36"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, y: [-8, 0, -8] }}
              transition={{ 
                delay: 1.7, 
                duration: 0.8, 
                type: "spring",
                y: {
                  duration: 2.2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 2.3
                }
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <img 
                src="https://static.databutton.com/public/382e042e-e4fe-45d4-8de4-44fa7ca2cc83/SAP-HANA-Logo.png" 
                alt="SAP S/4 HANA" 
                className="max-h-20 max-w-48 object-contain"
              />
            </motion.div>
            
            <motion.div 
              className="flex justify-center items-center p-6 bg-white/90 rounded-xl shadow-lg w-56 h-36"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, y: [-8, 0, -8] }}
              transition={{ 
                delay: 1.9, 
                duration: 0.8, 
                type: "spring",
                y: {
                  duration: 1.8,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 2.6
                }
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <img 
                src="https://static.databutton.com/public/382e042e-e4fe-45d4-8de4-44fa7ca2cc83/Acumatica-Logo.png" 
                alt="Acumatica" 
                className="max-h-20 max-w-40 object-contain"
              />
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              delay: 2,
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
