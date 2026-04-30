const projects = [
  {
    title: "Bodhayu – Air Quality Awareness Platform",
    tech: "MERN, APIs, JWT, OAuth2",
    points: [
      "Integrated AQI & Weather APIs",
      "Browser geolocation for real-time data",
      "Built 10+ REST APIs",
      "Implemented JWT auth and OAuth2 (Gmail)",
      "Configured notifications three times/day",
      "Designed MongoDB schemas",
      "Delivered responsive UI",
      "Deployed on Vercel + Render",
    ],
    links: [
      { label: "Live", href: "https://bodhayu.vercel.app/" },
      { label: "GitHub", href: "https://github.com/vishakhatiti/Bodhayu" },
    ],
  },
  {
    title: "Airbnb Clone – Property Booking Platform",
    tech: "MERN",
    points: [
      "Developed property listing and booking system",
      "Built REST APIs with full CRUD operations",
      "Implemented JWT authentication with bcrypt",
      "Structured MongoDB schemas",
      "Crafted responsive interface",
      "Handled complete booking workflow",
    ],
    links: [{ label: "GitHub", href: "https://github.com/vishakhatiti/Airbnb" }],
  },
];

const skills = {
  Frontend: "HTML, CSS, JavaScript, React, Tailwind",
  Backend: "Node.js, Express.js",
  Database: "MongoDB, MySQL",
  "APIs & Auth": "REST APIs, JWT, OAuth2",
  Tools: "Git, GitHub, Postman, Hoppscotch, VS Code",
  Deployment: "Vercel, Render",
};

function Projects() {
  return (
    <>
      <section id="projects" className="section shell fade-in-section">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p className="tech">{project.tech}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="card-links">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section shell fade-in-section">
        <h2>Skills</h2>
        <div className="skill-grid">
          {Object.entries(skills).map(([key, value]) => (
            <article className="skill-card" key={key}>
              <h4>{key}</h4>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section shell fade-in-section">
        <h2>Education</h2>
        <div className="stack-list">
          <p><strong>BBA (Computer Applications)</strong>, Savitribai Phule Pune University (2023–2026) — SGPA: 8.7</p>
          <p><strong>HSC (Commerce)</strong>, Symbiosis Arts & Commerce College — 2023</p>
          <p><strong>SSC</strong>, S. S. Keshrai Vidyalaya — 2021 — 79%</p>
        </div>
      </section>

      <section id="achievements" className="section shell fade-in-section">
        <h2>Achievements</h2>
        <ul className="achievement-list">
          <li>Google Cloud Arcade 2025</li>
          <li>Apna College – Sigma 8.0</li>
          <li>UI/UX Design – Coursera</li>
          <li>Introduction to AI/ML – Great Learning</li>
          <li>PPT Competition Winner</li>
          <li>Avishkar Zonal Finalist (3 times)</li>
          <li>Top 50 – SPPU Startup Olympiad 2026</li>
        </ul>
      </section>
    </>
  );
}

export default Projects;
