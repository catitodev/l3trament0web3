import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Impact from '../components/Impact';
import Contact from '../components/Contact';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'CalangoFlux | Inteligência aplicada para impacto real';
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Impact />
      <Contact />
    </>
  );
};

export default Home;