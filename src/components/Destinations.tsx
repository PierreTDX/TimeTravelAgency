import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { DestinationCard } from './DestinationCard';
import { DestinationModal } from './DestinationModal';
import { getDestinations } from '../data/destinations';
import { Destination } from '../types';
import { useLanguage } from '../context/LanguageContext.tsx';

export const Destinations = () => {
  const { t, language } = useLanguage();
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    const handleOpenModal = (event: CustomEvent) => {
      const destinations = getDestinations(language);
      const destinationId = event.detail;
      const destination = destinations.find(d => d.id === destinationId);
      if (destination) {
        setSelectedDestination(destination);
        setIsModalOpen(true);
      }
    };

    window.addEventListener('open-destination-modal' as any, handleOpenModal as any);
    return () => window.removeEventListener('open-destination-modal' as any, handleOpenModal as any);
  }, [language]);

  const handleLearnMore = (destination: Destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  return (
    <section id="destinations" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            {t.destinations.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.destinations.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getDestinations(language).map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="h-full"
            >
              <DestinationCard
                destination={destination}
                onLearnMore={() => handleLearnMore(destination)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <DestinationModal
        destination={selectedDestination}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
