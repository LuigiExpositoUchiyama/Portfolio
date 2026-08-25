import React from 'react';
import Intro from '../../Components/Home/Intro';
import About from '../../Components/Home/About';
import HomeProjects from '../../Components/Home/HomeProjects';
import Services from '../../Components/Home/Services';
import Reviews from '../../Components/Home/Reviews';
import CTA from '../../Components/Home/Cta';

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
