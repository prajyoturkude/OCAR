import { Car, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import logo from '../logo.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div
  className="flex items-center space-x-3 cursor-pointer"
  onClick={() => scrollToSection('home')}
>
  <img
    src={logo}
    alt="OCAR Logo"
    className="h-28 w-auto"
  />

</div>
            <p className="text-gray-400 mb-4 max-w-md">
              Premium automotive protection and detailing services. We bring out the best in every vehicle
              with expert care and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('ceramic')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Ceramic Coating
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('ppf')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  PPF
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>(555) 123-4567</li>
              <li>info@elitedetailing.com</li>
              <li>123 Auto Center Drive</li>
              <li>Los Angeles, CA 90001</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-500/20 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} OCAR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
