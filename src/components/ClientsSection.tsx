import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {}

export function ClientsSection({}: Props) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CIO, Global Retail",
      company: "RetailTech Inc.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80",
      quote: "SyMatrix360's support team has been exceptional. Their 24/7 availability and expertise has significantly improved our system performance."
    },
    {
      name: "Michael Chen",
      position: "IT Director",
      company: "Global Manufacturing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      quote: "Since partnering with SyMatrix360, our SAP system uptime has reached 99.9%, and our ticket resolution time has decreased by 60%."
    },
    {
      name: "Emily Rodriguez",
      position: "VP of Operations",
      company: "Tech Solutions",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      quote: "Their custom development and process optimization services have transformed our business workflows and increased efficiency across departments."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Clients</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our satisfied customers have to say about our services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
              image={testimonial.image}
              quote={testimonial.quote}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  index: number;
}

function TestimonialCard({ name, position, company, image, quote, index }: TestimonialCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white border border-gray-100 rounded-lg shadow-md overflow-hidden p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="flex items-center mb-4">
        <motion.div 
          className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
      <blockquote className="text-gray-600 italic mb-4">"{quote}"</blockquote>
      <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full"></div>
    </motion.div>
  );
}