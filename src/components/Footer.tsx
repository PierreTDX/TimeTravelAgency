import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    if (id === 'chat') {
      window.dispatchEvent(new Event('open-chat'));
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openDestinationModal = (id: string) => {
    const event = new CustomEvent('open-destination-modal', { detail: id });
    window.dispatchEvent(event);
  };

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
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-amber-500 transition-colors">
                  {t.header.home}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('destinations')} className="text-gray-400 hover:text-amber-500 transition-colors">
                  {t.header.destinations}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('chat')} className="text-gray-400 hover:text-amber-500 transition-colors">
                  {t.header.chat}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('booking')} className="text-gray-400 hover:text-amber-500 transition-colors">
                  {t.header.booking}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">{t.footer.destinations}</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => openDestinationModal('paris-1889')} className="text-gray-400 hover:text-amber-500 transition-colors text-left">
                  Paris 1889
                </button>
              </li>
              <li>
                <button onClick={() => openDestinationModal('cretaceous')} className="text-gray-400 hover:text-amber-500 transition-colors text-left">
                  Cretaceous Period
                </button>
              </li>
              <li>
                <button onClick={() => openDestinationModal('florence-1504')} className="text-gray-400 hover:text-amber-500 transition-colors text-left">
                  Florence 1504
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">{t.footer.contact}</h3>
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
            {currentYear} {t.footer.rights}
          </p>
          <p className="text-gray-500 text-sm text-center md:text-right">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};
