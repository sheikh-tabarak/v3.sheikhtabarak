import dynamic from 'next/dynamic';
import Head from "next/head";

const Header = dynamic(() => import('@/components/header'));
const Footer = dynamic(() => import('@/components/footer'));
const SocialIcons = dynamic(() => import('@/components/socialicons'));
const HeroSection = dynamic(() => import('@/components/home/hero'));
const AboutSection = dynamic(() => import('@/components/home/about'));
const Experience = dynamic(() => import('@/components/home/experience'));
const Testimonials = dynamic(() => import('@/components/testimonials'));
const Projects = dynamic(() => import('@/components/home/projects'));
import { FloatingWhatsApp } from 'react-floating-whatsapp'


export async function getServerSideProps() {
  const res = await fetch('https://v3sheikhtabarak.vercel.app/api/portfolio')
  const portfolio = await res.json()

  if (!res.ok) {
    console.error('Failed to fetch data:', portfolio);
    return {
      notFound: true, // or handle the error as you see fit
    };
  }

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
