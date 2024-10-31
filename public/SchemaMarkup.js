// components/SchemaMarkup.js
import Head from 'next/head';

const SchemaMarkup = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Muhammad Tabarak",
        "jobTitle": "Top Rated Software Engineer",
        "url": "https://sheikhtabarak.me",
        "image": "https://ugc.production.linktr.ee/b36f6acd-0b1c-4283-8542-5e2da6f9a39d_profile-pic--3-.png?io=true&size=avatar-v3_0",
        "description": "A software engineer with over 4 years of experience working as a Full-stack developer, building scalable and efficient solutions.",
        "telephone": "+923154706237",
        "email": "mailto:admin@sheikhtabarak.me",
        "sameAs": [
            "https://www.linkedin.com/in/sheikhtabarak",
            "https://github.com/sheikh-tabarak",
            "https://www.instagram.com/sheikh_tabarak",
            "https://www.facebook.com/iamsheikhtabarak/",
            "https://www.upwork.com/freelancers/~017ed24f96b80d5bca",
            "https://www.fiverr.com/sheikhtabarak",
            "https://linktr.ee/sheikhtabarak"
        ],
        "knowsAbout": [
            "Web Development",
            "JavaScript",
            "HTML",
            "CSS",
            "React",
            "Node.js",
            "Mongo db",
            "React js",
            "Tailwind CSS",
            "Tailwind",
            "Git Versioning",
            "React Native",
            "Wordpress",
            "Elementor",
            "WP Forms",
            "WP"
        ],
        "serviceType": "Web Development Services, Mobile App Development",
        "offers": {
            "@type": "Service",
            "serviceType": "Full Stack MERN Development",
            "provider": {
                "@type": "Person",
                "name": "Muhammad Tabarak"
            }
        }
    };

    return (
        <Head>
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Head>
    );
};

export default SchemaMarkup;