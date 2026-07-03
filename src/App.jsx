import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from './components';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import Engagement from './components/Engagement';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <SocialSidebar />
        <About />
        <Tech />
        <Experience />
        <Works />
        <Engagement />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;
