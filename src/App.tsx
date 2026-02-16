import { ScrollProgress } from './components/ScrollProgress';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Destinations } from './components/Destinations';
import { Quiz } from './components/Quiz';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Destinations />
      <Quiz />
      <BookingForm />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
