import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from './components';
import Footer from './components/Footer';
import SocialSidebar from "./components/SocialSidebar";
import Engagement from './components/Engagement';



const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <SocialSidebar />
        <About />
        <Tech />
        <Experience />
        <Works />
        <Engagement />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
