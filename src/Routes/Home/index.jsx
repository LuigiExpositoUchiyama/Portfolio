import React from 'react';
import Intro from '../../Components/Intro';
import About from '../../Components/About';
import HomeProjects from '../../Components/HomeProjects';
import Services from '../../Components/Services';
import Reviews from '../../Components/Reviews';
import CTA from '../../Components/Cta';

const Home = () => {
  return (
    <section>
      <Intro />
      <About />
      <Services />
      <HomeProjects />
      <Reviews />
      <CTA />
    </section>
  );
};

export default Home;
