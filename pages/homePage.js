import React, { useEffect, useState } from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SocialIcons from '@/components/socialicons'
import HeroSection from '@/components/home/hero'
import AboutSection from '@/components/home/about'
import Experience from '@/components/home/experience'

export default function HomePage({ repo }) {

  return (
    <div id='home' className='scroll-smooth '>
      <svg width='0' height='0'>
        <filter id='grainy' x='0' y='0' width='100%' height='100%'>
          <feTurbulence type='fractalNoise' baseFrequency='.537' />
          <feColorMatrix type='saturate' values='0' />
          <feBlend in='SourceGraphic' mode='multiply' />
        </filter>
      </svg>
      <Header />
      <HeroSection repo={repo} />
      <AboutSection />
      <Experience />
      <SocialIcons />
      <Footer />
      <ul>
        <p>{repo.about.name}</p>
        <div>{
          repo.skills.map((skill) => {
            return <div>{skill.title}</div>
          })
        }</div>
      </ul>
      <FloatingWhatsApp allowClickAway="true" notificationDelay="5" notification="true" notificationSound="true" placeholder="Write to me.." darkMode="true" statusMessage="Typically replies within 10-15 mins" avatar={'avator.jpg'} phoneNumber="+923154706237" accountName="Muhammad Tabarak" />
    </div>
  );
}