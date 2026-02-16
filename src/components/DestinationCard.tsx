import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  onLearnMore: () => void;
}

export const DestinationCard = ({ destination, onLearnMore }: DestinationCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-amber-500 transition-all duration-300 cursor-pointer h-full flex flex-col"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="absolute top-4 right-4 bg-amber-500 text-black px-4 py-2 rounded-full font-semibold text-sm">
          {destination.price}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
          <p className="text-amber-500 font-semibold">{destination.period}</p>
          <p className="text-gray-400 text-sm">{destination.year}</p>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">
          {destination.shortDescription}
        </p>

        <motion.button
          onClick={onLearnMore}
          className="flex items-center gap-2 text-amber-500 font-semibold group-hover:gap-4 transition-all duration-300 mt-auto"
          whileHover={{ x: 5 }}
        >
          Learn More
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="absolute inset-0 border-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
    </motion.div>
  );
};
