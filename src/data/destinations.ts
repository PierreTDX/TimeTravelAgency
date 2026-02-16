import { Destination } from '../types';

const destinationsEn: Destination[] = [
  {
    id: 'paris-1889',
    name: 'Paris 1889',
    period: 'Belle Époque',
    year: '1889',
    shortDescription: 'Experience the grandeur of the Universal Exposition and witness the unveiling of the iconic Eiffel Tower.',
    fullDescription: 'Step into the heart of the Belle Époque, where Paris shines as the cultural capital of the world. Witness the grand opening of the Universal Exposition of 1889, celebrating the centennial of the French Revolution. Marvel at the revolutionary iron lattice tower designed by Gustave Eiffel, standing as the entrance arch to the exposition. Immerse yourself in the artistic revolution, elegant boulevards, and the birth of modern entertainment.',
    highlights: [
      'Eiffel Tower inauguration ceremony',
      'Universal Exposition galleries and pavilions',
      'Belle Époque fashion and culture',
      'Parisian café society and artistic salons',
      'Moulin Rouge opening year entertainment'
    ],
    image: '/images/destinations/Paris1889.webp',
    price: '€15,000'
  },
  {
    id: 'cretaceous',
    name: 'Cretaceous Period',
    period: 'Mesozoic Era',
    year: '65 Million Years Ago',
    shortDescription: 'Journey to the age of dinosaurs and explore prehistoric landscapes in their final glory.',
    fullDescription: 'Embark on the ultimate adventure through time to the Late Cretaceous Period, the final chapter of the dinosaur age. Witness majestic creatures like Tyrannosaurus Rex, Triceratops, and Pteranodon in their natural habitats. Explore lush prehistoric forests, vast inland seas, and volcanic landscapes teeming with life. This is your chance to observe Earth\'s most fascinating creatures before the mass extinction event that changed our planet forever.',
    highlights: [
      'Observe living dinosaurs in the wild',
      'Explore primordial forests and ecosystems',
      'Witness volcanic activity and geological formations',
      'Study prehistoric flora and fauna',
      'Experience Earth before human civilization'
    ],
    image: '/images/destinations/Cretace–65Mannees.webp',
    price: '€45,000'
  },
  {
    id: 'florence-1504',
    name: 'Florence 1504',
    period: 'High Renaissance',
    year: '1504',
    fullDescription: 'Journey to the pinnacle of the Renaissance in Florence, where Michelangelo has just completed his masterpiece David. Walk the same streets as Leonardo da Vinci, witness the Medici family\'s patronage of the arts, and immerse yourself in the cultural revolution that shaped Western civilization. Experience the birth of modern art, science, and philosophy in the cradle of the Renaissance.',
    shortDescription: 'Discover the Renaissance at its peak, where Michelangelo and da Vinci revolutionized art and culture.',
    highlights: [
      'Michelangelo\'s David unveiling',
      'Meet Leonardo da Vinci and Renaissance masters',
      'Explore Medici palaces and art collections',
      'Attend philosophical debates and artistic workshops',
      'Witness the birth of modern Western culture'
    ],
    image: '/images/destinations/FlorenceRenaissance1504.webp',
    price: '€22,000'
  }
];

const destinationsFr: Destination[] = [
  {
    id: 'paris-1889',
    name: 'Paris 1889',
    period: 'Belle Époque',
    year: '1889',
    shortDescription: "Découvrez la grandeur de l'Exposition Universelle et assistez à l'inauguration de l'emblématique Tour Eiffel.",
    fullDescription: "Entrez au cœur de la Belle Époque, où Paris brille comme la capitale culturelle du monde. Assistez à l'inauguration grandiose de l'Exposition Universelle de 1889, célébrant le centenaire de la Révolution française. Émerveillez-vous devant la tour en treillis de fer révolutionnaire conçue par Gustave Eiffel, servant d'arche d'entrée à l'exposition. Immergez-vous dans la révolution artistique, les boulevards élégants et la naissance du divertissement moderne.",
    highlights: [
      'Cérémonie d\'inauguration de la Tour Eiffel',
      'Galeries et pavillons de l\'Exposition Universelle',
      'Mode et culture de la Belle Époque',
      'Société des cafés parisiens et salons artistiques',
      'Divertissements de l\'année d\'ouverture du Moulin Rouge'
    ],
    image: '/images/destinations/Paris1889.webp',
    price: '15 000 €'
  },
  {
    id: 'cretaceous',
    name: 'Période du Crétacé',
    period: 'Ère Mésozoïque',
    year: 'Il y a 65 millions d\'années',
    shortDescription: 'Voyagez à l\'âge des dinosaures et explorez des paysages préhistoriques dans leur gloire finale.',
    fullDescription: "Embarquez pour l'aventure ultime à travers le temps jusqu'au Crétacé supérieur, le dernier chapitre de l'âge des dinosaures. Observez des créatures majestueuses comme le Tyrannosaurus Rex, le Tricératops et le Ptéranodon dans leurs habitats naturels. Explorez des forêts préhistoriques luxuriantes, de vastes mers intérieures et des paysages volcaniques regorgeant de vie. C'est votre chance d'observer les créatures les plus fascinantes de la Terre avant l'événement d'extinction massive qui a changé notre planète à jamais.",
    highlights: [
      'Observez des dinosaures vivants dans la nature',
      'Explorez des forêts et écosystèmes primordiaux',
      'Assistez à l\'activité volcanique et aux formations géologiques',
      'Étudiez la flore et la faune préhistoriques',
      'Découvrez la Terre avant la civilisation humaine'
    ],
    image: '/images/destinations/Cretace–65Mannees.webp',
    price: '45 000 €'
  },
  {
    id: 'florence-1504',
    name: 'Florence 1504',
    period: 'Haute Renaissance',
    year: '1504',
    fullDescription: "Voyagez au sommet de la Renaissance à Florence, où Michel-Ange vient d'achever son chef-d'œuvre David. Marchez dans les mêmes rues que Léonard de Vinci, soyez témoin du mécénat des arts par la famille Médicis et immergez-vous dans la révolution culturelle qui a façonné la civilisation occidentale. Découvrez la naissance de l'art moderne, de la science et de la philosophie dans le berceau de la Renaissance.",
    shortDescription: 'Découvrez la Renaissance à son apogée, où Michel-Ange et De Vinci ont révolutionné l\'art et la culture.',
    highlights: [
      'Dévoilement du David de Michel-Ange',
      'Rencontrez Léonard de Vinci et les maîtres de la Renaissance',
      'Explorez les palais et collections d\'art des Médicis',
      'Assistez à des débats philosophiques et ateliers artistiques',
      'Assistez à la naissance de la culture occidentale moderne'
    ],
    image: '/images/destinations/FlorenceRenaissance1504.webp',
    price: '22 000 €'
  }
];

export const destinations = destinationsEn; // Default export for backward compatibility if needed

export const getDestinations = (lang: 'en' | 'fr') => lang === 'fr' ? destinationsFr : destinationsEn;
