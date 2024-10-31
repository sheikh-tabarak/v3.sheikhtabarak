import { useEffect } from "react";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SocialIcons from '@/components/socialicons'
import HeroSection from '@/components/home/hero'
import AboutSection from '@/components/home/about'
import Experience from '@/components/home/experience'
import Head from "next/head";
import Testimonials from "@/components/testimonials";
import Projects from "@/components/home/projects";

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/portfolio/')
  const portfolio = await res.json()
  return { props: { profile: portfolio } }
}

export default function Home({ profile }) {

  return (
    <div className="scroll-smooth bg-background-100 dark:bg-background-500 select-none">
      <Head>
        <title>Muhammad Tabarak - Web Developer</title>
        <meta name="description" content={profile.about.herodesc} />
      </Head>

      <div id='home' className='scroll-smooth'>
        <svg width='0' height='0'>
          <filter id='grainy' x='0' y='0' width='100%' height='100%'>
            <feTurbulence type='fractalNoise' baseFrequency='.537' />
            <feColorMatrix type='saturate' values='0' />
            <feBlend in='SourceGraphic' mode='multiply' />
          </filter>
        </svg>
        <Header />
        <div className="px-10  lg:px-36 lg:py-12 md:px-36 md:py-12">

          <HeroSection about={profile.about} />
          <Testimonials testimonials={profile.testimonials} />
          <AboutSection about={profile.about} socialMedia={profile.socialMedia} skills={profile.skills} />
          <Projects featuredProjects={profile.featuredProjects} wordpressProjects={profile.wordpressProjects} />
          <Experience />
          <SocialIcons socialLinks={profile.socialMedia} />
          <Footer about={profile.about} />
          <FloatingWhatsApp allowClickAway="true" notificationDelay="5" notification="true" notificationSound="true" placeholder="Write to me.." darkMode="true" statusMessage="Typically replies within 10-15 mins" avatar={'avator.jpg'} phoneNumber="+923154706237" accountName="Muhammad Tabarak" />
        </div>

      </div>

    </div>
  );
}
