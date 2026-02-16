import { destinations, getDestinations } from './destinations';

export interface ChatbotResponse {
  patterns: RegExp[];
  response: string | (() => string);
}

const chatbotResponsesEn: ChatbotResponse[] = [
  {
    patterns: [/hello|hi|hey|greetings/i],
    response: "Welcome to TimeTravel Agency! I'm your virtual travel consultant. How may I assist you in planning your journey through time today?"
  },
  {
    patterns: [/paris|eiffel|1889|belle.?epoque/i],
    response: `Paris 1889 is a magnificent choice! Experience the Belle Époque at its finest. Witness the inauguration of the Eiffel Tower during the Universal Exposition. This journey is priced at ${destinations[0].price} per traveler. Would you like to know more about what's included?`
  },
  {
    patterns: [/dinosaur|cretaceous|prehistoric|t.?rex|jurassic/i],
    response: `The Cretaceous Period is our most adventurous destination! Journey 65 million years back to witness living dinosaurs in their natural habitat. This premium expedition is ${destinations[1].price} per traveler, including all safety protocols and temporal insurance. Interested in the details?`
  },
  {
    patterns: [/florence|renaissance|michelangelo|da.?vinci|1504/i],
    response: `Florence 1504 offers an unparalleled cultural experience! Meet Michelangelo and Leonardo da Vinci during the peak of the Renaissance. This exclusive journey is ${destinations[2].price} per traveler. Shall I provide more information about the highlights?`
  },
  {
    patterns: [/price|cost|expensive|cheap|afford/i],
    response: () => {
      const prices = destinations.map(d => `${d.name}: ${d.price}`).join(', ');
      return `Our luxury time travel experiences are priced as follows: ${prices}. Each package includes temporal transportation, period-authentic accommodations, expert guides, and full temporal insurance. Would you like details about what's included?`;
    }
  },
  {
    patterns: [/recommend|suggest|which|best|should.?i/i],
    response: "I'd be delighted to recommend a destination! Are you interested in cultural & artistic experiences, adventure & nature, or elegance & refinement? Or perhaps you'd like to take our personalized quiz for a tailored recommendation?"
  },
  {
    patterns: [/book|reserve|purchase|buy/i],
    response: "Wonderful! To book your time travel journey, please scroll down to our booking form. You'll need to select your destination, preferred travel dates, and provide your contact information. Our team will reach out within 24 temporal hours to finalize your adventure!"
  },
  {
    patterns: [/safe|safety|dangerous|risk/i],
    response: "Your safety is our absolute priority! All journeys include comprehensive temporal insurance, certified time guides, and state-of-the-art temporal stabilization technology. We maintain strict non-interference protocols and provide emergency temporal extraction for any unforeseen circumstances."
  },
  {
    patterns: [/how|work|travel|process/i],
    response: "Our proprietary temporal displacement technology allows safe passage through the space-time continuum. After booking, you'll attend a brief orientation, receive period-appropriate attire, and be assigned a certified temporal guide. The journey itself is instantaneous, though you'll experience your chosen time period in real-time!"
  },
  {
    patterns: [/duration|long|stay|days/i],
    response: "Standard packages range from 3 to 14 days in your chosen time period. Extended stays can be arranged for an additional fee. Due to temporal mechanics, you'll return mere moments after you left, regardless of how long you spend in the past!"
  },
  {
    patterns: [/thank|thanks|appreciate/i],
    response: "You're most welcome! It's my pleasure to assist you. Feel free to ask any other questions about your time travel journey. Safe travels through time!"
  },
  {
    patterns: [/help|information|tell.?me/i],
    response: "I'm here to help you explore our luxury time travel destinations! I can provide information about Paris 1889, the Cretaceous Period, or Florence 1504. I can also assist with pricing, safety information, and the booking process. What would you like to know?"
  }
];

const chatbotResponsesFr: ChatbotResponse[] = [
  {
    patterns: [/bonjour|salut|coucou|h(é|e)llo/i],
    response: "Bienvenue à l'Agence TimeTravel ! Je suis votre consultant de voyage virtuel. Comment puis-je vous aider à planifier votre voyage à travers le temps aujourd'hui ?"
  },
  {
    patterns: [/paris|eiffel|1889|belle.?epoque/i],
    response: `Paris 1889 est un choix magnifique ! Vivez la Belle Époque à son apogée. Assistez à l'inauguration de la Tour Eiffel lors de l'Exposition Universelle. Ce voyage est au prix de ${getDestinations('fr')[0].price} par voyageur. Souhaitez-vous en savoir plus sur ce qui est inclus ?`
  },
  {
    patterns: [/dinosaures?|crétacé|pr(é|e)historique|t.?rex|jurassique/i],
    response: `La période du Crétacé est notre destination la plus aventureuse ! Voyagez 65 millions d'années en arrière pour observer des dinosaures vivants dans leur habitat naturel. Cette expédition premium est à ${getDestinations('fr')[1].price} par voyageur, incluant tous les protocoles de sécurité et l'assurance temporelle. Intéressé par les détails ?`
  },
  {
    patterns: [/florence|renaissance|michel.?ange|da.?vinci|1504/i],
    response: `Florence 1504 offre une expérience culturelle inégalée ! Rencontrez Michel-Ange et Léonard de Vinci au sommet de la Renaissance. Ce voyage exclusif est à ${getDestinations('fr')[2].price} par voyageur. Dois-je vous fournir plus d'informations sur les points forts ?`
  },
  {
    patterns: [/prix|co(û|u)t|tarif|cher/i],
    response: () => {
      const prices = getDestinations('fr').map(d => `${d.name}: ${d.price}`).join(', ');
      return `Nos expériences de voyage temporel de luxe sont tarifées comme suit : ${prices}. Chaque forfait comprend le transport temporel, l'hébergement d'époque authentique, des guides experts et une assurance temporelle complète. Souhaitez-vous des détails sur ce qui est inclus ?`;
    }
  },
  {
    patterns: [/recommand|sugg(é|e)r|\bquell?e?s?\b|meilleur|devrais/i],
    response: "Je serais ravi de vous recommander une destination ! Êtes-vous intéressé par des expériences culturelles et artistiques, l'aventure et la nature, ou l'élégance et le raffinement ? Ou peut-être souhaitez-vous faire notre quiz personnalisé pour une recommandation sur mesure ?"
  },
  {
    patterns: [/r(é|e)serv|achet|commander/i],
    response: "Merveilleux ! Pour réserver votre voyage temporel, veuillez faire défiler vers le bas jusqu'à notre formulaire de réservation. Vous devrez sélectionner votre destination, vos dates de voyage préférées et fournir vos coordonnées. Notre équipe vous contactera dans les 24 heures temporelles pour finaliser votre aventure !"
  },
  {
    patterns: [/s(é|e)curit(é|e)|danger|risque/i],
    response: "Votre sécurité est notre priorité absolue ! Tous les voyages incluent une assurance temporelle complète, des guides temporels certifiés et une technologie de stabilisation temporelle de pointe. Nous maintenons des protocoles stricts de non-interférence et fournissons une extraction temporelle d'urgence pour toute circonstance imprévue."
  },
  {
    patterns: [/comment|fonctionne|voyage|processus/i],
    response: "Notre technologie propriétaire de déplacement temporel permet un passage sûr à travers le continuum espace-temps. Après la réservation, vous assisterez à une brève orientation, recevrez une tenue d'époque appropriée et serez assigné à un guide temporel certifié. Le voyage lui-même est instantané, bien que vous viviez votre période choisie en temps réel !"
  },
  {
    patterns: [/dur(é|e)e|longtemps|s(é|e)jour|jours/i],
    response: "Les forfaits standard varient de 3 à 14 jours dans votre période choisie. Des séjours prolongés peuvent être organisés moyennant des frais supplémentaires. En raison de la mécanique temporelle, vous reviendrez quelques instants seulement après votre départ, peu importe combien de temps vous passez dans le passé !"
  },
  {
    patterns: [/merci|remerci/i],
    response: "Je vous en prie ! C'est un plaisir de vous aider. N'hésitez pas à poser d'autres questions sur votre voyage temporel. Bon voyage à travers le temps !"
  },
  {
    patterns: [/aide|info|parle/i],
    response: "Je suis là pour vous aider à explorer nos destinations de voyage temporel de luxe ! Je peux fournir des informations sur Paris 1889, la période du Crétacé ou Florence 1504. Je peux également vous aider avec les prix, les informations de sécurité et le processus de réservation. Que souhaitez-vous savoir ?"
  }
];

export const chatbotResponses = chatbotResponsesEn;

export const getDefaultResponse = (lang: 'en' | 'fr' = 'en'): string => {
  const responsesEn = [
    "That's an interesting question! While I specialize in our three featured destinations, I'd be happy to help you explore Paris 1889, the Cretaceous Period, or Florence 1504. Which sounds most intriguing?",
    "I'm here to assist with information about our time travel services. Could you please rephrase your question, or ask about one of our destinations?",
    "I want to ensure I provide you with accurate information. Could you ask about our destinations, pricing, or booking process?"
  ];

  const responsesFr = [
    "C'est une question intéressante ! Bien que je sois spécialisé dans nos trois destinations vedettes, je serais heureux de vous aider à explorer Paris 1889, la période du Crétacé ou Florence 1504. Laquelle vous intrigue le plus ?",
    "Je suis ici pour vous aider avec des informations sur nos services de voyage temporel. Pourriez-vous reformuler votre question, ou demander des informations sur l'une de nos destinations ?",
    "Je veux m'assurer de vous fournir des informations précises. Pourriez-vous poser des questions sur nos destinations, nos prix ou notre processus de réservation ?"
  ];

  const responses = lang === 'fr' ? responsesFr : responsesEn;
  return responses[Math.floor(Math.random() * responses.length)];
};

export const getChatbotResponse = (userMessage: string, lang: 'en' | 'fr' = 'en'): string | null => {
  const responses = lang === 'fr' ? chatbotResponsesFr : chatbotResponsesEn;

  for (const { patterns, response } of responses) {
    if (patterns.some(pattern => pattern.test(userMessage))) {
      return typeof response === 'function' ? response() : response;
    }
  }
  return null;
};
