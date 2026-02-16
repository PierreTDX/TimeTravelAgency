import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImage from '../../public/images/destinations/hero.webp';

export const Hero = () => {
  const scrollToDestinations = () => {
    const element = document.getElementById('destinations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore Time.
            <br />
            Travel Beyond History.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience luxury time travel to history's most extraordinary moments.
            Witness the Eiffel Tower's inauguration, walk with dinosaurs, or meet Renaissance masters.
            Your journey through time begins here.
          </motion.p>

          <motion.button
            onClick={scrollToDestinations}
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold rounded-lg text-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(251, 191, 36, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Discover Destinations</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        >
          <ChevronDown className="w-8 h-8 text-amber-500" />
        </motion.div>
      </div>
    </section>
  );
};
