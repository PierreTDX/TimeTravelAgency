import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { Destination } from '../types';

interface DestinationModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DestinationModal = ({ destination, isOpen, onClose }: DestinationModalProps) => {
  if (!destination) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl max-w-4xl w-full my-8"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-80 overflow-hidden rounded-t-2xl">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-4xl font-bold text-white mb-2">{destination.name}</h2>
                  <p className="text-amber-500 font-semibold text-xl">{destination.period}</p>
                  <p className="text-gray-300">{destination.year}</p>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Journey Overview</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {destination.fullDescription}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Experience Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="bg-amber-500 rounded-full p-1 mt-1">
                          <Check className="w-4 h-4 text-black" />
                        </div>
                        <p className="text-gray-300">{highlight}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                  <div>
                    <p className="text-gray-400 mb-1">Starting from</p>
                    <p className="text-3xl font-bold text-amber-500">{destination.price}</p>
                    <p className="text-sm text-gray-400">per traveler</p>
                  </div>
                  <motion.button
                    onClick={() => {
                      onClose();
                      const bookingElement = document.getElementById('booking');
                      if (bookingElement) {
                        bookingElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold rounded-lg text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book This Journey
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
