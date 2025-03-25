import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {}

export function SystemsSection({}: Props) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const systems = [
    {
      name: "SAP ByDesign",
      logo: "https://static.databutton.com/public/382e042e-e4fe-45d4-8de4-44fa7ca2cc83/csm_SAP_BbyD_R_3_62f9711452.webp",
      description: "Cloud-based ERP solution for small and medium businesses"
    },
    {
      name: "SAP S/4 HANA",
      logo: "https://static.databutton.com/public/382e042e-e4fe-45d4-8de4-44fa7ca2cc83/sap_hana.jpg",
      description: "Intelligent ERP system built on advanced in-memory database"
    },
    {
      name: "Acumatica",
      logo: "https://static.databutton.com/public/382e042e-e4fe-45d4-8de4-44fa7ca2cc83/Acumatica-Logo.png",
      description: "Cloud ERP with flexible deployment options and powerful capabilities"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Systems We Serve</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized support for leading ERP systems that power modern enterprises
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <SystemCard 
              key={index}
              name={system.name}
              logo={system.logo}
              description={system.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SystemCardProps {
  name: string;
  logo: string;
  description: string;
  index: number;
}

function SystemCard({ name, logo, description, index }: SystemCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
    >
      <div className="p-8 flex flex-col items-center">
        <motion.div 
          className="mb-6 w-48 h-24 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img 
            src={logo} 
            alt={name} 
            className="max-h-full max-w-full object-contain"
          />
        </motion.div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{name}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
      <div className="bg-gradient-to-r from-yellow-400 to-blue-500 h-1"></div>
    </motion.div>
  );
}