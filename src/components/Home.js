import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Clients from './Clients';
import Share from './Share';
import Feedback from './Feedback';
import Archive from './Archive';
import Testimonials from './Testimonials';
import Footer from './Footer';
import FBsession from './FeedbackSection';
import LovedByDesigners from './LovedByDesigners';
import Loop from './loop';
import Team from './Team';


function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Clients />
      <Share />
      <Feedback />
      <FBsession/>
      <Archive />
      <Testimonials />
      <LovedByDesigners/>
      <Loop/>
      <Team/>
      <Footer />
    </div>
  );
}

export default Home;
