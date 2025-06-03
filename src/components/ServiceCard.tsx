import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  linkTo: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, color, linkTo, delay = 0 }: ServiceCardProps) => {
  const bgColorClass = `bg-${color}-50`;
  const borderColorClass = `border-${color}-100`;
  const iconColorClass = `text-${color}-600`;

  return (
    <motion.div 
      className={`card card-service border ${borderColorClass}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 + delay }}
    >
      <div className={`${bgColorClass} p-6`}>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${iconColorClass}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
      </div>
      <div className="bg-white p-4 mt-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/5522999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-sm px-4 py-2"
          >
            Contratar
          </a>
          <Link
            to={linkTo}
            className="btn btn-outline text-sm px-4 py-2 group"
          >
            Saiba mais 
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;