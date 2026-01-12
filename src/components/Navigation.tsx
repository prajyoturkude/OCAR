// import { useState } from 'react';
// import { Menu, X, Car } from 'lucide-react';
// import logo from '../logo.png';
// interface NavigationProps {
//   activeSection: string;
// }

// const Navigation = ({ activeSection }: NavigationProps) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'services', label: 'Services' },
//     { id: 'ceramic', label: 'Ceramic Coating' },
//     { id: 'ppf', label: 'PPF' },
//     { id: 'packages', label: 'Packages' },
//     { id: 'pricing', label: 'Pricing' },
//     { id: 'about', label: 'About' },
//     { id: 'contact', label: 'Contact' },
//   ];

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsOpen(false);
//     }
//   };

//   return (
//     <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-amber-500/20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-28">
        
// <div
//   className="flex items-center space-x-3 cursor-pointer"
//   onClick={() => scrollToSection('home')}
// >
//   <img
//     src={logo}
//     alt="OCAR Logo"
//     className="h-28 w-auto"
//   />

// </div>
//           <div className="hidden md:flex space-x-1">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`px-4 py-2 rounded-lg transition-all ${
//                   activeSection === item.id
//                     ? 'bg-amber-500/20 text-amber-500'
//                     : 'text-gray-300 hover:text-amber-500 hover:bg-amber-500/10'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-amber-500 hover:text-amber-400 transition-colors"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-black/98 border-t border-amber-500/20">
//           <div className="px-4 py-4 space-y-2">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
//                   activeSection === item.id
//                     ? 'bg-amber-500/20 text-amber-500'
//                     : 'text-gray-300 hover:text-amber-500 hover:bg-amber-500/10'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../logo.png';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'ceramic', label: 'Ceramic Coating' },
    { id: 'ppf', label: 'PPF' },
    { id: 'packages', label: 'Packages' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);

    // If already on home → scroll
    if (location.pathname === '/') {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Go home first
      navigate('/');

      // Wait for home to render then scroll
      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  };

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">

          {/* LOGO */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img
              src={logo}
              alt="OCAR Logo"
              className="h-28 w-auto"
            />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'bg-amber-500/20 text-amber-500'
                    : 'text-gray-300 hover:text-amber-500 hover:bg-amber-500/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-amber-500 hover:text-amber-400 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-black/98 border-t border-amber-500/20">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'bg-amber-500/20 text-amber-500'
                    : 'text-gray-300 hover:text-amber-500 hover:bg-amber-500/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
