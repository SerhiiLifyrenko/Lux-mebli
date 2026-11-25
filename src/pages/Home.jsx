import React from 'react';
import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import Services from '../components/Services';
import VideoCarousel from '../components/VideoCarousel';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import RenovationTiming from '../components/RenovationTiming';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Services />
      <VideoCarousel />
      <Team />
      <Testimonials />
      <RenovationTiming />
      <FAQ />
      <ContactForm />
    </>
  );
}
