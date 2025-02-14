import React from 'react';
import Hero from '../components/home/hero/Hero';
import Skills from '../components/home/Skills';
import About from '../components/home/About';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import ExperienceTimeline from '../components/home/ExperienceTimeline';
import TechStack from '../components/home/TechStack';
import CTA from '../components/home/CTA';
import SocialProof from '../components/home/SocialProof';

const Home = () => {
  return (
    <>
      <Hero />
      <CTA />
      <Skills />
      <FeaturedProjects />
      <TechStack />
      <ExperienceTimeline />
      <About />
      <Testimonials />
      <SocialProof />
    </>
  );
};

export default Home;
