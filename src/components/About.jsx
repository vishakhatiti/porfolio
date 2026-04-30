const skills = {
  Frontend: "HTML, CSS, JavaScript, React, Tailwind",
  Backend: "Node.js, Express",
  Database: "MongoDB, MySQL",
  "APIs/Auth": "REST, JWT, OAuth2",
  Tools: "Git, Postman, VS Code",
  Deployment: "Vercel, Render",
};

function About() {
  return (
    <section id="about" className="section container fade-in">
      <h2>About</h2>
      <p className="section-copy">
        I craft high-quality web experiences with strong backend foundations, clean frontend architecture,
        and secure authentication systems. I focus on maintainability, performance, and user-first design.
      </p>
      <div className="skills-grid">
        {Object.entries(skills).map(([title, value]) => (
          <article key={title} className="skill-card">
            <h3>{title}</h3>
            <p>{value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
