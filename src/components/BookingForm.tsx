import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Calendar, Mail, User, MapPin, CheckCircle } from 'lucide-react';
import { destinations } from '../data/destinations';
import { BookingFormData } from '../types';

export const BookingForm = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    destination: '',
    departureDate: '',
    returnDate: ''
  });
  const [errors, setErrors] = useState<Partial<BookingFormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const validateForm = (): boolean => {
    const newErrors: Partial<BookingFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.destination) {
      newErrors.destination = 'Please select a destination';
    }

    if (!formData.departureDate) {
      newErrors.departureDate = 'Departure date is required';
    }

    if (!formData.returnDate) {
      newErrors.returnDate = 'Return date is required';
    } else if (formData.departureDate && formData.returnDate <= formData.departureDate) {
      newErrors.returnDate = 'Return date must be after departure date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          destination: '',
          departureDate: '',
          returnDate: ''
        });
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const handleChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-amber-500 p-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block bg-amber-500 p-6 rounded-full mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              <CheckCircle className="w-16 h-16 text-black" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-4">Booking Submitted!</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Thank you for your interest in time travel with us. Our team will review your booking
              request and contact you within 24 temporal hours to finalize your journey through time.
            </p>
            <p className="text-amber-500 mt-6 font-semibold">
              Check your email for confirmation details.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 max-w-3xl" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Book Your Journey
          </h2>
          <p className="text-xl text-gray-300">
            Complete the form below to begin your time travel adventure
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-gray-300 mb-2 font-semibold">
                <User className="w-5 h-5 text-amber-500" />
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={`w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  errors.name ? 'ring-2 ring-red-500' : ''
                }`}
                placeholder="Enter your full name"
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    className="text-red-400 text-sm mt-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-300 mb-2 font-semibold">
                <Mail className="w-5 h-5 text-amber-500" />
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  errors.email ? 'ring-2 ring-red-500' : ''
                }`}
                placeholder="your.email@example.com"
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    className="text-red-400 text-sm mt-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-300 mb-2 font-semibold">
                <MapPin className="w-5 h-5 text-amber-500" />
                Destination
              </label>
              <select
                value={formData.destination}
                onChange={(e) => handleChange('destination', e.target.value)}
                className={`w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  errors.destination ? 'ring-2 ring-red-500' : ''
                }`}
              >
                <option value="">Select a destination</option>
                {destinations.map((dest) => (
                  <option key={dest.id} value={dest.id}>
                    {dest.name} - {dest.price}
                  </option>
                ))}
              </select>
              <AnimatePresence>
                {errors.destination && (
                  <motion.p
                    className="text-red-400 text-sm mt-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {errors.destination}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-gray-300 mb-2 font-semibold">
                  <Calendar className="w-5 h-5 text-amber-500" />
                  Departure Date
                </label>
                <input
                  type="date"
                  value={formData.departureDate}
                  onChange={(e) => handleChange('departureDate', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.departureDate ? 'ring-2 ring-red-500' : ''
                  }`}
                />
                <AnimatePresence>
                  {errors.departureDate && (
                    <motion.p
                      className="text-red-400 text-sm mt-1"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {errors.departureDate}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-300 mb-2 font-semibold">
                  <Calendar className="w-5 h-5 text-amber-500" />
                  Return Date
                </label>
                <input
                  type="date"
                  value={formData.returnDate}
                  onChange={(e) => handleChange('returnDate', e.target.value)}
                  min={formData.departureDate || new Date().toISOString().split('T')[0]}
                  className={`w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.returnDate ? 'ring-2 ring-red-500' : ''
                  }`}
                />
                <AnimatePresence>
                  {errors.returnDate && (
                    <motion.p
                      className="text-red-400 text-sm mt-1"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {errors.returnDate}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Booking Request
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
