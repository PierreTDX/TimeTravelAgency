import { Destination } from '../types';

export const destinations: Destination[] = [
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
    image: '/src/assets/images/destinations/Paris1889.webp',
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
    image: '/src/assets/images/destinations/Cretace–65Mannees.webp',
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
    image: '/src/assets/images/destinations/FlorenceRenaissance1504.webp',
    price: '€22,000'
  }
];
