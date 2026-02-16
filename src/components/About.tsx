import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Sparkles, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Temporal Precision',
    description: 'State-of-the-art temporal displacement technology ensures safe and accurate journeys to any point in history.'
  },
  {
    icon: Shield,
    title: 'Absolute Safety',
    description: 'Comprehensive temporal insurance and certified guides guarantee your security throughout your journey.'
  },
  {
    icon: Sparkles,
    title: 'Luxury Experience',
    description: 'Immerse yourself in authentic period experiences with meticulously curated accommodations and activities.'
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Our certified temporal historians ensure you experience the most significant moments with deep cultural context.'
  }
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Welcome to TimeTravel Agency
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are pioneers in luxury temporal tourism, offering exclusive access to history's most
            extraordinary moments. Our proprietary technology and expert team make time travel not
            just possible, but an unforgettable experience of a lifetime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300 h-full group-hover:shadow-2xl group-hover:shadow-amber-500/20">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg text-gray-400 max-w-2xl mx-auto italic">
            "The past is not dead, it's not even past. Let us take you there."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
