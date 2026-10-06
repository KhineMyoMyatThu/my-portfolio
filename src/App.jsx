import {useEffect} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Education from './components/Education';
import Certificates from './components/Certificates';
import AboutSection from './components/AboutSection';
import Experience from './components/Experience';
import Project from './components/Project';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <Education/>
      <Certificates/>
      <AboutSection />
      <Experience/>
      <Project/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App

