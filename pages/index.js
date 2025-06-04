import dynamic from 'next/dynamic';
import Head from "next/head";

import SchemaMarkup from '@/public/SchemaMarkup';
const Header = dynamic(() => import('@/components/header'));
const Footer = dynamic(() => import('@/components/footer'));
const SocialIcons = dynamic(() => import('@/components/socialicons'));
const HeroSection = dynamic(() => import('@/components/home/hero'));
const AboutSection = dynamic(() => import('@/components/home/about'));
const Experience = dynamic(() => import('@/components/home/experience'));
const Testimonials = dynamic(() => import('@/components/testimonials'));
const Projects = dynamic(() => import('@/components/home/projects'));
import { FloatingWhatsApp } from 'react-floating-whatsapp'



export default function Home() {

  const profile = {
    about: {
      name: 'Muhammad Tabarak',
      headline: 'I build things for web',
      herodesc: 'A software engineer with over 4 years of experience as a full-stack development, building scalable and efficient solutions.',
      aboutme: 'Hey! it\'s Muhammad Tabarak, a software engineer with a proven track record in crafting exceptional web solutions. I specialize in building sleek, efficient web apps and SAAS Dashboards using modern technologies like React.js, Tailwind CSS, Node.js, and MongoDB. Whether it\'s creating complex role management systems or integrating Stripe payments, I thrive on tackling challenges and delivering scalable solutions. Let\’s team up and create something amazing together!',
      email: 'admin@sheikhtabarak.me',
      githubUsername: 'sheikh-tabarak',
    },


    testimonials: [
      {
        img: '/testimonials/brickscoggin.jpg',
        name: 'Bricks Coggin',
        position: 'Owner Southlake, Texas',
        testimonial: 'It\'s Bricks here from ABCs Puppy Zs. Tabarak demonstrated professionalism, creativity, and expertise throughout the collaboration. I highly recommend their services to anyone seeking top-notch web development. Looking forward to continued collaboration.',
        source: '/testimonials/upwork.png',
        link: 'https://www.upwork.com/freelancers/~017ed24f96b80d5bca'
      },
      {
        img: '/testimonials/femi.jpg',
        name: 'Femi Oluwaleye',
        position: 'CoFounder Solomonswww, United States',
        testimonial: 'He was excellent! Great guy, always responsive, goes above and beyond in making sure you project comes to life and to your specification. Very skilled and able to create anything and everything, would not only recommend but will come back to him again!',
        source: '/testimonials/fiverr.png',
        link: 'https://www.fiverr.com/sheikhtabarak'
      },
      {
        img: '/testimonials/joseph.jpg',
        name: 'Joseph Rubay',
        position: 'Real Estate Broker, CPM®, ARM®, Canada',
        testimonial: 'Mohammad is so professional! And very easy to work with. He is perfect in what he is doing and very kind. He give my work priority and manage all my website and social media. I highly recommend him',
        source: '/testimonials/linkedin.png',
        link: 'https://www.linkedin.com/in/sheikhtabarak'
      },
      {
        img: '/testimonials/simon.png',
        name: 'Simon Bychykhin',
        position: 'CTO Iuvenis, Ukraine',
        testimonial: 'Muhammad was supportive and always on my side, he even spent with me 6 hours to finish the project on deadline. Also, Muhammad has a strange superhero power he is not sleeping at all (It feels like that) does not matter at what time he replys me.',
        source: '/testimonials/upwork.png',
        link: 'https://www.upwork.com/freelancers/~017ed24f96b80d5bca'
      },

    ],

    socialMedia: {
      behance: {
        name: 'Behance',
        url: 'https://www.behance.net/sheikhtabarak'
      },
      fiverr: {
        name: 'Fiverr',
        level: 'Level two seller',
        url: 'https://www.fiverr.com/sheikhtabarak'
      },
      upwork: {
        name: 'Upwork',
        url: 'https://www.upwork.com/freelancers/~017ed24f96b80d5bca'
      },

      github: {
        name: 'Github',
        url: 'https://github.com/sheikh-tabarak',
      },
      instagram: {
        name: 'Instagram',
        url: 'https://www.instagram.com/sheikh_tabarak',
      },
      linkedin: {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/sheikhtabarak',
      },

    },

    navLinks: [

      {
        name: 'Feedbacks',
        url: 'feedbacks',
      },
      {
        name: 'About',
        url: 'about',
      },
      {
        name: 'Techstack',
        url: 'techstack',
      },
      {
        name: 'Work',
        url: 'projects',
      },
      {
        name: 'Experience',
        url: 'jobs',
      }
    ],

    skills:
    {
      web: [
        {
          image: 'html-5.svg',
          title: 'Html',
          type: 'web',
          since: '2020'
        },
        {
          image: 'css.svg',
          title: 'Css',
          type: 'web',
          since: '2020'
        },
        {
          image: 'js.svg',
          title: 'Javascript',
          type: 'web',
          since: '2021'
        },
        {
          image: 'react.svg',
          title: 'React js',
          type: 'web',
          since: '2021'
        },
        {
          image: 'tailwind.svg',
          title: 'Tailwind',
          type: 'web',
          since: '2022'
        },
        {
          image: 'nodejs.svg',
          title: 'Node js',
          type: 'backend',
          since: '2023'
        },
        {
          image: 'mongodb.svg',
          title: 'Mongo DB',
          type: 'database',
          since: '2023'
        },
        {
          image: 'nextjs.svg',
          title: 'Next js',
          type: 'web',
          since: '2022'
        },

        {
          image: 'bootstrap.svg',
          title: 'Bootstrap',
          type: 'web',
          since: '2021'
        },

      ],

      others: [
        {
          image: 'flutter.svg',
          title: 'Flutter',
          type: 'mobile',
          since: '2022'
        },
        {
          image: 'dart.svg',
          title: 'Dart',
          type: 'mobile',
          since: '2022'
        },
        {
          image: 'aws.png',
          title: 'AWS',
          type: 'storage',
          since: '2023'
        },
        {
          image: 'stripe.svg',
          title: 'Stripe',
          type: 'payment',
          since: '2023'
        },
        {
          image: 'wordpress.svg',
          title: 'Wordpress',
          type: 'cms',
          since: '2019'
        },
        {
          image: 'canva.svg',
          title: 'Canva',
          type: 'design',
          since: '2020'
        },
        {
          image: 'jwt.svg',
          title: 'JWT',
          type: 'backend',
          since: '2023'
        },
        {
          image: 'firebase.svg',
          title: 'Firebase',
          type: 'database',
          since: '2022'
        },

        {
          image: 'sql.svg',
          title: 'SQL',
          type: 'database',
          since: '2021'
        },

      ]

    },

    experiences: [
      {
        from: 'Aug. 2024',
        to: 'Present',
        type: 'work',
        mode: 'Hourly',
        title: 'MERN Stack Developer',
        org: 'Cloud Maintain, USA',
        linktoorg: '#',
        projects: [{ name: 'cloudmaintain.webapp', url: 'https://cloudmaintain.sheikhtabarak.me' },],
        intro: 'In my current role at Cloud Maintain, I am developing a comprehensive full-stack web application using the MERN stack, focusing on role management and Stripe subscriptions. My work involves implementing robust admin controls to enhance user experience and streamline operations. This experience has further honed my skills in full-stack development and deepened my understanding of subscription-based services.',
        skills: ['React js', 'Express js', 'Node js', 'Tailwind CSS', 'JWT Auth', 'Mongo db', 'bcrypt', 'axios', 'Cron jobs', 'Stripe Subscriptions', 'Headlessui', 'Ag-grid', 'Toastify', 'Role Managment', 'Cloudinary'],
      },
      {
        from: 'Nov. 2023',
        to: 'April 2024',
        type: 'work',
        mode: 'Remote',
        title: 'Web developer',
        org: 'ABCs Puppy Zs, Taxes US',
        linktoorg: 'https://www.abcspuppyzs.com/',
        projects: [{ name: 'abcspuppyzs.com', url: 'https://abcspuppyzs.com' },],
        intro: 'My work led 𝐀𝐁𝐂𝐬 𝐏𝐮𝐩𝐩𝐲 𝐙𝐬 to offer me a full-time role, where I handled the development of their flagship website and other major projects. During this time, I honed my expertise in HTML, CSS, and expanded into Vanilla JavaScript, Tailwind CSS, and React.js. This experience not only sharpened my technical skills but also gave me the confidence to deliver high-quality, scalable web applications for business needs.',
        skills: ['AWS', 'Html', 'Tailwind css', 'Javascript', 'Web vitals', 'S3 bucket'],
      },
      {

        from: 'Sept. 2023',
        to: 'Nov. 2023',
        type: 'work',
        mode: 'remote',
        title: 'Jonior Web Developer',
        org: 'Iuvenis, Ukraine',
        projects: [{ name: 'iuvenis.co.uk', url: 'https://iuvenis.co.uk/' }, { name: 'aspireturkey.com', url: 'https://aspireturkey.com/' }, { name: 'beyondgravityltd.co.uk', url: 'https://beyondgravityltd.co.uk/' }, { name: 'rgdiasporaservices.com', url: 'https://rgdiasporaservices.com/' }, { name: 'Explore all', url: 'https://linktr.ee/sheikhtabarak' }],
        intro: 'This experience led Iuvenis to offer me a key role where I designed and developed a range of custom websites. Using CMS platforms like WordPress, along with HTML and Tailwind CSS, I provided tailored, responsive, and visually engaging web designs.',
        linktoorg: 'https://iuvenis.co.uk/',
        skills: ['WordPress', 'Shopify', 'Html', 'Tailwind CSS', 'php'],
      },
      {

        from: 'Oct 2022',
        to: 'Apr 2023',
        type: 'work',
        mode: 'contract',
        title: 'Web developer Internee',
        org: 'National Incubation Center, Gujrat',
        linktoorg: 'https://nep.pitb.gov.pk/',
        projects: [{ name: 'techlegion', url: 'https://nep.pitb.gov.pk/node/502' }],
        intro: 'During my time at the National Incubation Centre (NIC), I had the opportunity to develop a wide array of skills, including teamwork, leadership, stress management, and time management. As a web developer, I focused on enhancing my proficiency in frontend technologies, particularly React.js, which helped me grow both technically and professionally.',
        skills: ['React.js', 'Git', 'Git Versioning', 'API Integration', 'Webpack', 'Deployment Processes'],
      },
      {
        from: 'Aug. 2019',
        to: 'Sept. 2023',
        type: 'edu',
        mode: 'graduation',
        title: 'Software Engineering',
        org: 'University of Gujrat',
        linktoorg: 'https://uog.edu.pk',
        projects: [{ name: 'spothub.sheikhtabarak.me', url: 'https://spothub.sheikhtabarak.me' }, { name: 'sesfinance.sheikhtabarak.me', url: 'https://sesfinance.sheikhtabarak.me/' }],
        intro: 'At UOG, I gained a solid foundation in software engineering, focusing on programming languages like C#, Java, HTML, CSS, and JavaScript. Through various projects, I developed problem-solving skills and collaborated effectively in team settings. My capstone project, Spot Hub, involved creating a mobile application using Flutter, enhancing my technical proficiency and preparing me for real-world challenges in the software industry.',
        skills: ['Data Structures', 'Object-Oriented Programming', 'Networking Basics', 'API Services', 'Design Patterns', 'Operating Systems', 'Databases'],
      },
    ],

    featuredProjects: [
      {
        img: 'https://raw.githubusercontent.com/sheikh-tabarak/sheikh-tabarak/refs/heads/main/project-covers/Cloud%20Maintain.png',
        title: 'Full Stack MERN Web App',
        org: 'Cloud Maintain',
        linktoorg: 'http://cloudmaintain.sheikhtabarak.me',
        projects: [{ name: 'github', url: 'https://github.com/sheikh-tabarak/cloud-maintain' }, { name: 'cloudmaintain.link', url: 'http://cloudmaintain.sheikhtabarak.me' }],
        intro: 'Dashboard that provides an efficient way for organizations to manage their assets and maintenance tasks. The system allows users to track equipment, assign maintenance activities, and generate reports for the organization’s assets. It supports multiple user roles, authentication, and maintenance tracking with a user-friendly interface on both desktop and mobile.',
        skills: ['React.js', 'Tailwind Css', 'node js', 'cros', 'stripe', 'Mongo db', 'Git', 'Git Versioning', 'API Integration', 'Webpack', 'Deployment'],
      },

      {
        img: 'https://raw.githubusercontent.com/sheikh-tabarak/sheikh-tabarak/refs/heads/main/project-covers/Go%20Pay%20Here.png',
        title: 'Full Stack MERN Web App',
        org: 'Go Pay here',
        linktoorg: 'http://gopayhere.link/',
        projects: [{ name: 'github', url: 'https://github.com/sheikh-tabarak/gopayhere' }, { name: 'gopayhere.link', url: 'https://gopayhere.link' }],
        intro: 'Go Pay here provides an efficient way for users to share payment information and show their social profile. The platform allows users to create a personalized payment link, add multiple payment methods, and share social media profiles with clients.',
        skills: ['React.js', 'Tailwind Css', 'node js', 'Mongo db', 'Git', 'Git Versioning', 'API Integration', 'Webpack', 'Deployment'],
      },
      {
        img: 'https://raw.githubusercontent.com/sheikh-tabarak/sheikh-tabarak/refs/heads/main/project-covers/JSM.png',
        title: 'Full Stack React and Django API Web App',
        org: 'Jewellery Store Dashboard',
        linktoorg: 'https://www.fiverr.com/users/sheikhtabarak/portfolio/NjZkOGY0ZWMyYTY2ZTQwMDAxNzQzOGNm',
        projects: [{ name: 'github', url: 'https://github.com/sheikh-tabarak/jewellery_store_dashboard' }],
        intro: 'The React-based Jewelry Management System streamlines inventory tracking and sales management. Built with React.js, Tailwind CSS, Django, and SQL/PostgreSQL, it empowers jewelry businesses with real-time insights and user-friendly tools.',
        skills: ['React.js', 'Tailwind Css', 'Django', 'SQL', 'PostgreSQL', 'Python', 'Git', 'Git Versioning', 'API Integration', 'Webpack', 'Deployment'],
      },
      {
        img: 'https://raw.githubusercontent.com/sheikh-tabarak/sheikh-tabarak/refs/heads/main/project-covers/Which%20AI.png',
        title: 'Full Stack Next js Web App',
        org: 'Which AI',
        linktoorg: 'https://www.fiverr.com/users/sheikhtabarak/portfolio/NjcyMjI4NTU5YTJmNTIwMDAxNWMzZGRm',
        projects: [{ name: 'github', url: 'https://github.com/sheikh-tabarak/whichai' }, { name: 'whichai.link', url: 'https://whichai.sheikhtabarak.me' }],
        intro: 'Which AI that provides your ultimate directory for discovering useful and innovative AI tools from around the globe. With the rapid pace of AI development, countless tools are released daily, making it challenging to find the perfect solution for your specific needs. Our mission is to simplify this process by curating a comprehensive and easily navigable collection of AI tools, ensuring you find exactly what you need.',
        skills: ['Next.js', 'Tailwind Css', 'Mongo db', 'Git', 'Git Versioning', 'Server side Rendering', 'AI Directory', 'Deployment'],

      },

    ],

    wordpressProjects: [
      {
        logo: 'https://aspireturkey.com/wp-content/uploads/2020/07/Aspire-Turkey-Logo-without-background-1536x1536.png',
        name: 'Aspire Turkey',
        link: 'https://aspireturkey.com/'
      },
      {
        logo: 'https://www.andorrah.com/cdn/shop/files/Untitled_design.png?v=1706403185&width=150',
        name: 'Andorrah',
        link: 'https://www.andorrah.com/'
      },
      {
        logo: 'https://beyondgravityltd.co.uk/wp-content/uploads/2024/02/cropped-beyond-gravity-high-resolution-logo-transparent.png',
        name: 'Beyond Gravity',
        link: 'https://beyondgravityltd.co.uk/'

      },
      {
        logo: 'https://logo.clearbit.com/https://iuvenis.co.uk/',
        name: 'Iuvenis Co.',
        link: 'https://iuvenis.co.uk/'
      },
      {
        logo: 'https://logo.clearbit.com/https://josephrubay.com/',
        name: 'Joseph Rubay',
        link: 'https://josephrubay.com/'
      },
      {
        logo: 'https://maashea.com/cdn/shop/files/MaaShea_Primary_Logo_Brugundy_1.png?v=1698243511&width=255'
      }
    ]

  }
  return (
    <div className="scroll-smooth bg-background-100 dark:bg-background-500 select-none">
      <Head>
        <title>Muhammad Tabarak - Top Rated Developer</title>
        <meta name="description" content={profile.about.herodesc} />
        <meta property="og:title" content="Muhammad Tabarak - Top Rated Web app developer" />
        <meta property="og:description" content="Explore the portfolio of Muhammad Tabarak, a software engineer with over 4 years of experience working as a Full-stack developer, building scalable and efficient solutions. Check out my latest projects and services!" />
        <meta property="og:url" content="https://sheikhtabarak.me/" />
        <meta property="og:image" content="https://sheikhtabarak.me/_next/image?url=%2Flogoicon.png&w=128&q=75" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Third Version of Muhammad Tabarak's Portfolio" />
        <link rel="canonical" href="https://sheikhtabarak.me/" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
