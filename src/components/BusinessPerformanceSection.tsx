import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {}

export function BusinessPerformanceSection({}: Props) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const metrics = [
    {
      title: "System Uptime",
      percentage: 99.9,
      color: "from-yellow-400 to-yellow-500"
    },
    {
      title: "Cost Reduction",
      percentage: 60,
      color: "from-blue-400 to-blue-500"
    },
    {
      title: "Faster Resolution",
      percentage: 45,
      color: "from-green-400 to-green-500"
    },
    {
      title: "User Satisfaction",
      percentage: 95,
      color: "from-purple-400 to-purple-500"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transforming Business Performance</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our managed services deliver measurable results for your organization
          </p>
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <MetricBar 
              key={index}
              title={metric.title}
              percentage={metric.percentage}
              color={metric.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface MetricBarProps {
  title: string;
  percentage: number;
  color: string;
  index: number;
}

function MetricBar({ title, percentage, color, index }: MetricBarProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-lg p-4 shadow-md"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <span className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-yellow-400 to-blue-500">{percentage}%</span>
      </div>
      <div className="h-8 bg-gray-100 rounded-full overflow-hidden relative">
        <motion.div 
          className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: index * 0.2,
            ease: "easeOut"
          }}
        >
          {/* Animated particles in the bar */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div 
              key={i}
              className="absolute top-1/2 transform -translate-y-1/2 h-2 w-2 rounded-full bg-white opacity-80"
              style={{ left: `${i * 20}%` }}
              animate={{
                x: [0, 80, 0],
                opacity: [0.8, 0.2, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

function UptimeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function CostIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}