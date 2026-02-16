export interface Destination {
  id: string;
  name: string;
  period: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  image: string;
  price: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  text: string;
  value: string;
  destinationWeight: {
    [key: string]: number;
  };
}

export interface QuizResult {
  destination: Destination;
  reason: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  destination: string;
  departureDate: string;
  returnDate: string;
}
