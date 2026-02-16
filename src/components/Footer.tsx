import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-8 h-8 text-amber-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                TimeTravel Agency
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Experience luxury time travel to history's most extraordinary moments.
              Your journey through time begins here.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#destinations" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#chat" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Chat Assistant
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Booking
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Paris 1889</li>
              <li className="text-gray-400">Cretaceous Period</li>
              <li className="text-gray-400">Florence 1504</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>123 Temporal Boulevard, Time District, TD 00000</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>+1 (555) TIME-TRAVEL</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>info@timetravelagency.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            {currentYear} TimeTravel Agency. All rights reserved across all timelines.
          </p>
          <p className="text-gray-500 text-sm text-center md:text-right">
            This is a fictional luxury time travel concept project.
          </p>
        </div>
      </div>
    </footer>
  );
};
