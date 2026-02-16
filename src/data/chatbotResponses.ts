import { destinations } from './destinations';

export interface ChatbotResponse {
  patterns: RegExp[];
  response: string | (() => string);
}

export const chatbotResponses: ChatbotResponse[] = [
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

export const getDefaultResponse = (): string => {
  const responses = [
    "That's an interesting question! While I specialize in our three featured destinations, I'd be happy to help you explore Paris 1889, the Cretaceous Period, or Florence 1504. Which sounds most intriguing?",
    "I'm here to assist with information about our time travel services. Could you please rephrase your question, or ask about one of our destinations?",
    "I want to ensure I provide you with accurate information. Could you ask about our destinations, pricing, or booking process?"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};

export const getChatbotResponse = (userMessage: string): string => {
  for (const { patterns, response } of chatbotResponses) {
    if (patterns.some(pattern => pattern.test(userMessage))) {
      return typeof response === 'function' ? response() : response;
    }
  }
  return getDefaultResponse();
};
