import Hero from '../components/home/hero/Hero';
import Skills from '../components/home/Skills';
import About from '../components/home/About';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ExperienceTimeline from '../components/home/ExperienceTimeline';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ExperienceTimeline />
      <Skills />
      <About />
      <CTA />
    </>
  );
};

export default Home;
