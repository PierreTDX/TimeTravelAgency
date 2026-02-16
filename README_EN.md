# TimeTravel Agency - Interactive WebApp

A modern, immersive, production-ready web application for a fictional luxury time travel agency. Experience stunning animations, AI-powered chat assistance, and personalized destination recommendations through an elegant dark premium design.

Created by:
- Pierre TONDEUX

## Project Overview

TimeTravel Agency is an interactive single-page application that allows users to explore time travel destinations, interact with an AI conversational assistant, take a personalized quiz, and simulate booking a time travel journey.

## Tech Stack

- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Professional animation library
- **Lucide React** - Beautiful icon set

## Features

### 1. Navigation Header
- Sticky header with blur background effect
- Smooth scroll navigation to sections
- Responsive mobile burger menu
- Logo with hover animations

### 2. Hero Section
- Immersive gradient background with animated pattern
- Elegant typography with gradient text
- Call-to-action button with hover effects
- Smooth scroll indicator animation

### 3. Agency Presentation
- Four feature cards showcasing:
  - Temporal Precision Technology
  - Absolute Safety Protocols
  - Luxury Experience Standards
  - Expert Historical Guidance
- Animated entrance effects
- Hover interactions on cards

### 4. Destinations Gallery
- Three curated destinations:
  - **Paris 1889** - Belle Époque and Eiffel Tower inauguration
  - **Cretaceous Period** - 65 million years ago with dinosaurs
  - **Florence 1504** - High Renaissance with Michelangelo and da Vinci
- Interactive destination cards with hover effects
- Expandable modal panels with full details
- Pricing information
- Direct booking integration

### 5. AI Chatbot Assistant
- Floating chat bubble in bottom-right corner
- Expandable chat window with modern UI
- Pattern-based response system
- Conversational personality as virtual travel consultant
- **Hybrid Intelligence**: Uses Google Gemini API for advanced queries, with a local fallback system (degraded mode) if the API is not configured.
- Features:
  - Destination recommendations
  - Pricing information
  - Safety and process explanations
  - FAQ responses
- Real-time typing indicators
- Message history with timestamps
- Loading animations

### 6. Personalized Destination Quiz
- 4-step interactive questionnaire
- Questions cover:
  - Experience preferences
  - Time period interests
  - Environment preferences
  - Ideal activities
- Weighted scoring algorithm
- Personalized recommendation with detailed explanation
- Option to retake quiz
- Direct booking integration from results

### 7. Booking Form
- Comprehensive form validation
- Fields include:
  - Full name
  - Email address
  - Destination selection
  - Departure and return dates
- Real-time error display
- Success confirmation UI
- Responsive layout

### 8. Additional Features
- Scroll progress indicator
- Smooth scrolling between sections
- Footer with contact information and links
- Fully responsive mobile-first design
- Accessibility-friendly implementation

## Design System

### Color Palette
- **Primary**: Amber/Gold accents (#f59e0b, #eab308)
- **Background**: Black to dark gray gradients (#000000, #111827, #1f2937)
- **Text**: White and gray shades
- **Borders**: Subtle gray borders with gold highlights

### Typography
- System font stack for optimal performance
- Bold headings with gradient text effects
- Readable body text with proper line spacing
- Clear hierarchy across all sections

### Animations
- Duration: 0.6s - 0.8s for natural feel
- Smooth easing curves
- Entrance animations with staggered delays
- Hover and tap interactions
- Scroll-based reveals

## Project Structure

```
src/
├── components/
│   ├── About.tsx           # Agency presentation section
│   ├── BookingForm.tsx     # Booking form with validation
│   ├── Chatbot.tsx         # AI chat assistant widget
│   ├── DestinationCard.tsx # Individual destination card
│   ├── DestinationModal.tsx# Destination detail modal
│   ├── Destinations.tsx    # Destinations gallery section
│   ├── Footer.tsx          # Footer component
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Quiz.tsx            # Personalized quiz component
│   └── ScrollProgress.tsx  # Scroll progress indicator
├── data/
│   ├── chatbotResponses.ts # Chatbot logic and responses
│   ├── destinations.ts     # Destination data
│   └── quizData.ts         # Quiz questions and logic
├── types/
│   └── index.ts            # TypeScript type definitions
├── assets/
│   └── images/
│       └── destinations/   # Destination images
├── App.tsx                 # Main app component
├── main.tsx               # App entry point
└── index.css              # Global styles
```

## AI Integration

The chatbot uses a hybrid system combining pattern matching and Generative AI:

- **LLM API (Google Gemini)**: For natural understanding and creative responses to open-ended questions.
- **Local Fallback Mode**: If no API key is provided or in case of network error, the chatbot automatically switches to a local rule-based system.
- **Pattern Recognition**: Regular expressions match user input
- **Dynamic Responses**: Context-aware answers based on user questions
- **Fallback System**: Default responses for unmatched queries in local mode
- **Personality**: Professional, warm, enthusiastic tone
- **Knowledge Base**: Information about all destinations, pricing, safety, and booking

The system is designed to be easily extensible with new patterns and responses.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/PierreTDX/TimeTravelAgency
cd TimeTravelAgency
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Other Platforms

The application is a static site and can be deployed to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

Simply upload the contents of the `dist` folder after running `npm run build`.

## Environment Variables

This application runs entirely client-side and requires no environment variables or backend services.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lazy loading for images
- Optimized animations with Framer Motion
- Minimal bundle size
- Fast initial load time
- Smooth 60fps animations

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels where appropriate
- Sufficient color contrast
- Focus indicators
- Screen reader friendly

## Credits

### Development
- Built with React + TypeScript + Vite
- Styled with TailwindCSS
- Animated with Framer Motion
- Icons by Lucide React

### Design Philosophy
- Premium luxury dark theme
- Mobile-first responsive approach
- User experience focused
- Modern web best practices

### Images
The destination images are placeholder illustrations representing:
- Paris 1889 Belle Époque era
- Cretaceous Period prehistoric landscapes
- Florence 1504 Renaissance period

## License

This is a fictional concept project created for demonstration purposes.

## Future Enhancements

Potential features for future versions:
- Backend integration for real booking system
- User accounts and authentication
- Payment processing integration
- Advanced AI chatbot with NLP
- More destinations
- Virtual reality previews
- Social sharing features
- Multi-language support

---

**Note**: This is a fictional luxury time travel agency concept. No actual time travel services are provided.