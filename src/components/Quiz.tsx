import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, RotateCcw, Sparkles } from 'lucide-react';
import { quizQuestions, getRecommendationReason } from '../data/quizData';
import { destinations } from '../data/destinations';
import { Destination } from '../types';

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResult, setShowResult] = useState(false);
  const [recommendedDestination, setRecommendedDestination] = useState<Destination | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = { ...answers, [currentQuestion]: optionIndex };
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      calculateRecommendation(newAnswers);
    }
  };

  const calculateRecommendation = (allAnswers: { [key: number]: number }) => {
    const scores: { [key: string]: number } = {
      'paris-1889': 0,
      'cretaceous': 0,
      'florence-1504': 0
    };

    quizQuestions.forEach((question, qIndex) => {
      const answerIndex = allAnswers[qIndex];
      if (answerIndex !== undefined) {
        const selectedOption = question.options[answerIndex];
        Object.entries(selectedOption.destinationWeight).forEach(([destId, weight]) => {
          scores[destId] += weight;
        });
      }
    });

    const recommendedId = Object.entries(scores).reduce((a, b) => b[1] > a[1] ? b : a)[0];
    const destination = destinations.find(d => d.id === recommendedId);

    if (destination) {
      setRecommendedDestination(destination);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setRecommendedDestination(null);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (showResult && recommendedDestination) {
    return (
      <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-amber-500 p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <motion.div
                className="inline-block bg-amber-500 p-4 rounded-full mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <Sparkles className="w-12 h-12 text-black" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Your Perfect Destination
              </h2>
              <p className="text-gray-400">Based on your preferences, we recommend:</p>
            </div>

            <motion.div
              className="relative overflow-hidden rounded-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <img
                src={recommendedDestination.image}
                alt={recommendedDestination.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {recommendedDestination.name}
                </h3>
                <p className="text-amber-500 font-semibold text-lg">
                  {recommendedDestination.period}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-800/50 rounded-lg p-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-gray-300 leading-relaxed">
                {getRecommendationReason(recommendedDestination.id)}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={() => {
                  const bookingElement = document.getElementById('booking');
                  if (bookingElement) {
                    bookingElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book This Journey
              </motion.button>
              <motion.button
                onClick={resetQuiz}
                className="px-6 py-4 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <RotateCcw className="w-5 h-5" />
                Retake Quiz
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 max-w-3xl" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Discover Your Ideal Destination
          </h2>
          <p className="text-xl text-gray-300">
            Answer 4 quick questions to get a personalized recommendation
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Question {currentQuestion + 1} of {quizQuestions.length}</span>
              <span className="text-sm text-amber-500 font-semibold">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 to-yellow-600"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <motion.h3
            className="text-2xl font-bold text-white mb-8"
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {question.question}
          </motion.h3>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full text-left p-6 bg-gray-700/50 hover:bg-gray-700 border-2 border-gray-600 hover:border-amber-500 rounded-xl transition-all group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-200 group-hover:text-white transition-colors">
                    {option.text}
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-amber-500 transition-colors" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
