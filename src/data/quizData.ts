import { QuizQuestion } from '../types';

const quizQuestionsEn: QuizQuestion[] = [
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

const quizQuestionsFr: QuizQuestion[] = [
  {
    id: 1,
    question: "Quel type d'expérience vous attire le plus ?",
    options: [
      {
        text: "Immersion culturelle et artistique",
        value: "cultural",
        destinationWeight: {
          'paris-1889': 2,
          'florence-1504': 3,
          'cretaceous': 0
        }
      },
      {
        text: "Aventure et exploration de la nature",
        value: "adventure",
        destinationWeight: {
          'paris-1889': 0,
          'florence-1504': 1,
          'cretaceous': 3
        }
      },
      {
        text: "Élégance et sophistication raffinée",
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
    question: "Quelle période vous fascine ?",
    options: [
      {
        text: "Histoire moderne (XIXe-XXe siècle)",
        value: "modern",
        destinationWeight: {
          'paris-1889': 3,
          'florence-1504': 0,
          'cretaceous': 0
        }
      },
      {
        text: "Origines anciennes (temps préhistoriques)",
        value: "ancient",
        destinationWeight: {
          'paris-1889': 0,
          'florence-1504': 0,
          'cretaceous': 3
        }
      },
      {
        text: "L'époque de la Renaissance",
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
    question: "Quel environnement préférez-vous ?",
    options: [
      {
        text: "Énergie urbaine et vie citadine",
        value: "urban",
        destinationWeight: {
          'paris-1889': 3,
          'florence-1504': 2,
          'cretaceous': 0
        }
      },
      {
        text: "Nature sauvage et paysages indomptés",
        value: "nature",
        destinationWeight: {
          'paris-1889': 0,
          'florence-1504': 0,
          'cretaceous': 3
        }
      },
      {
        text: "Musées, architecture et sites historiques",
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
    question: "Quelle est votre activité idéale ?",
    options: [
      {
        text: "Visiter des monuments et des expositions universelles",
        value: "monuments",
        destinationWeight: {
          'paris-1889': 3,
          'florence-1504': 1,
          'cretaceous': 0
        }
      },
      {
        text: "Observation de la faune et exploration",
        value: "wildlife",
        destinationWeight: {
          'paris-1889': 0,
          'florence-1504': 0,
          'cretaceous': 3
        }
      },
      {
        text: "Galeries d'art et ateliers créatifs",
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

export const quizQuestions = quizQuestionsEn;

export const getQuizQuestions = (lang: 'en' | 'fr') => lang === 'fr' ? quizQuestionsFr : quizQuestionsEn;

export const getRecommendationReason = (destinationId: string, lang: 'en' | 'fr' = 'en'): string => {
  const reasonsEn: { [key: string]: string } = {
    'paris-1889': "Based on your preferences for elegance, urban culture, and modern historical periods, Paris 1889 during the Belle Époque is the perfect destination for you. You'll experience the pinnacle of Parisian sophistication, witness the iconic Eiffel Tower's inauguration, and immerse yourself in the artistic revolution of the era.",
    'cretaceous': "Your adventurous spirit and love for nature and wildlife make the Cretaceous Period an ideal choice. This journey offers an unparalleled opportunity to witness Earth's most magnificent creatures in their natural habitat, explore primordial landscapes, and experience the planet before human civilization.",
    'florence-1504': "Your appreciation for art, culture, and Renaissance history makes Florence 1504 the perfect destination. You'll witness Michelangelo's genius, meet Leonardo da Vinci, and experience the cultural revolution that shaped Western civilization. This journey offers the ultimate in artistic and intellectual enrichment."
  };

  const reasonsFr: { [key: string]: string } = {
    'paris-1889': "Basé sur vos préférences pour l'élégance, la culture urbaine et les périodes historiques modernes, Paris 1889 pendant la Belle Époque est la destination parfaite pour vous. Vous ferez l'expérience du summum de la sophistication parisienne, assisterez à l'inauguration de l'emblématique Tour Eiffel et vous immergerez dans la révolution artistique de l'époque.",
    'cretaceous': "Votre esprit aventureux et votre amour pour la nature et la faune font de la période du Crétacé un choix idéal. Ce voyage offre une opportunité inégalée d'observer les créatures les plus magnifiques de la Terre dans leur habitat naturel, d'explorer des paysages primordiaux et de découvrir la planète avant la civilisation humaine.",
    'florence-1504': "Votre appréciation pour l'art, la culture et l'histoire de la Renaissance fait de Florence 1504 la destination parfaite. Vous serez témoin du génie de Michel-Ange, rencontrerez Léonard de Vinci et vivrez la révolution culturelle qui a façonné la civilisation occidentale. Ce voyage offre le summum de l'enrichissement artistique et intellectuel."
  };

  const reasons = lang === 'fr' ? reasonsFr : reasonsEn;
  return reasons[destinationId] || reasons['paris-1889'];
};
