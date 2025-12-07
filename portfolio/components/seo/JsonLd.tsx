export default function JsonLd() {
  const siteUrl = process.env.NODE_ENV === "production"
    ? "https://kamio90.github.io/kamil-musial-engineering-studio"
    : "http://localhost:3000";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kamil Musiał",
    alternateName: "kamio90",
    description:
      "Senior Software Engineer with 9+ years of experience building scalable applications",
    url: siteUrl,
    image: `${siteUrl}/logo.svg`,
    email: "kmusial40@gmail.com",
    jobTitle: "Senior Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Kamil Musiał Engineering Studio",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kraków",
      addressCountry: "Poland",
    },
    sameAs: [
      "https://github.com/kamio90",
      "https://www.linkedin.com/in/kamio90/",
    ],
    knowsAbout: [
      "TypeScript",
      "JavaScript",
      "React",
      "Node.js",
      "Next.js",
      "AWS",
      "System Architecture",
      "Cloud Computing",
      "Full Stack Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "WSEI Kraków",
    },
    award: [
      "1st Place - HackYeah 2023 (Europe's largest hackathon)",
      "1st Place - Comarch Competition",
      "3rd Place - Asseco Competition",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kamil Musiał Engineering Studio",
    alternateName: "Kamil Musiał Portfolio",
    url: siteUrl,
    description:
      "Portfolio of Kamil Musiał - Senior Software Engineer with 9+ years of experience",
    author: {
      "@type": "Person",
      name: "Kamil Musiał",
    },
    inLanguage: ["pl-PL", "en-US"],
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kamil Musiał Engineering Studio",
    description:
      "Software engineering services specializing in scalable web applications, system architecture, and cloud solutions",
    url: siteUrl,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kraków",
      addressCountry: "Poland",
    },
    founder: {
      "@type": "Person",
      name: "Kamil Musiał",
    },
    areaServed: "Worldwide",
    serviceType: [
      "Software Development",
      "System Architecture",
      "Cloud Solutions",
      "Technical Consulting",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  );
}
