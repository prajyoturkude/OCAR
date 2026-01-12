import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CeramicCoating from '../components/CeramicCoating';
import PPF from '../components/PPF';
import Packages from '../components/Packages';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'services',
        'ceramic',
        'ppf',
        'packages',
        'pricing',
        'about',
        'contact',
      ];

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
     
      <Hero />
      <Services />
      <CeramicCoating />
      <PPF />
      <Packages />
      <Pricing />
      <About />
      <Contact />
    </>
  );
};

export default Home;
