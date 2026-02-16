import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What type of experience appeals to you most?",
    options: [
      {
        text: "Cultural & artistic immersion",
        value: "cultural",
        destinationWeight: {
          'paris-1889': 2,
          'florence-1504': 3,
          'cretaceous': 0
        }
      },
      {
        text: "Adventure & nature exploration",
        value: "adventure",
        destinationWeight: {
          'paris-1889': 0,
          'florence-1504': 1,
          'cretaceous': 3
        }
      },
      {
        text: "Elegance & refined sophistication",
        value: "elegance",
        destinationWeight: {
          'paris-1889': 3,
          'florence-1504': 2,
          'cretaceous': 0
        }
      }
    ]
  },
  {
    id: 2,
    question: "Which time period fascinates you?",
    options: [
      {
        text: "Modern history (19th-20th century)",
        value: "modern",
        destinationWeight: {
          'paris-1889': 3,
          'florence-1504': 0,
          'cretaceous': 0
        }
      },
      {
        text: "Ancient origins (prehistoric times)",
        value: "ancient",
        destinationWeight: {
          'paris-1889': 0,
          'florence-1504': 0,
          'cretaceous': 3
        }
      },
      {
        text: "Renaissance era",
        value: "renaissance",
        destinationWeight: {
          'paris-1889': 0,
          'florence-1504': 3,
          'cretaceous': 0
        }
      }
    ]
  },
  {
    id: 3,
    question: "What environment do you prefer?",
    options: [
      {
        text: "Urban energy and city life",
        value: "urban",
        destinationWeight: {
          'paris-1889': 3,
          'florence-1504': 2,
          'cretaceous': 0
        }
      },
      {
        text: "Wild nature and untamed landscapes",
        value: "nature",
        destinationWeight: {
          'paris-1889': 0,
          'florence-1504': 0,
          'cretaceous': 3
        }
      },
      {
        text: "Museums, architecture & historical sites",
        value: "cultural",
        destinationWeight: {
          'paris-1889': 2,
          'florence-1504': 3,
          'cretaceous': 0
        }
      }
    ]
  },
  {
    id: 4,
    question: "What's your ideal activity?",
    options: [
      {
        text: "Visiting monuments and world exhibitions",
        value: "monuments",
        destinationWeight: {
          'paris-1889': 3,
          'florence-1504': 1,
          'cretaceous': 0
        }
      },
      {
        text: "Wildlife observation and exploration",
        value: "wildlife",
        destinationWeight: {
          'paris-1889': 0,
          'florence-1504': 0,
          'cretaceous': 3
        }
      },
      {
        text: "Art galleries and creative workshops",
        value: "art",
        destinationWeight: {
          'paris-1889': 1,
          'florence-1504': 3,
          'cretaceous': 0
        }
      }
    ]
  }
];

export const getRecommendationReason = (destinationId: string): string => {
  const reasons: { [key: string]: string } = {
    'paris-1889': "Based on your preferences for elegance, urban culture, and modern historical periods, Paris 1889 during the Belle Époque is the perfect destination for you. You'll experience the pinnacle of Parisian sophistication, witness the iconic Eiffel Tower's inauguration, and immerse yourself in the artistic revolution of the era.",
    'cretaceous': "Your adventurous spirit and love for nature and wildlife make the Cretaceous Period an ideal choice. This journey offers an unparalleled opportunity to witness Earth's most magnificent creatures in their natural habitat, explore primordial landscapes, and experience the planet before human civilization.",
    'florence-1504': "Your appreciation for art, culture, and Renaissance history makes Florence 1504 the perfect destination. You'll witness Michelangelo's genius, meet Leonardo da Vinci, and experience the cultural revolution that shaped Western civilization. This journey offers the ultimate in artistic and intellectual enrichment."
  };
  return reasons[destinationId] || reasons['paris-1889'];
};
