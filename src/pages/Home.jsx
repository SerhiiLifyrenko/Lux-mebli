import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import VideoCarousel from '../components/VideoCarousel';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <VideoCarousel />
      <Team />
      <Testimonials />
      <ContactForm />
    </>
  );
}
