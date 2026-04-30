const projects = [
  {
    title: "Bodhayu – Air Quality Awareness Platform",
    stack: "MERN, APIs, JWT, OAuth2",
    description: "A real-world platform to monitor and spread awareness about air quality with authentication and API-driven data.",
    live: "https://bodhayu.vercel.app/",
    github: "https://github.com/vishakhatiti/Bodhayu",
  },
  {
    title: "Airbnb Clone – Property Booking Platform",
    stack: "MERN Stack",
    description: "A clean property booking platform featuring listings, secure auth flow, and full booking lifecycle.",
    github: "https://github.com/vishakhatiti/Airbnb",
  },
];

function Projects() {
  return (
    <section id="projects" className="section container fade-in">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-stack">{project.stack}</p>
            <p>{project.description}</p>
            <div className="card-actions">
              {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">Live</a>}
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
