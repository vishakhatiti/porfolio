import photo from "../assets/photo.png";

const skills = ["MERN", "REST APIs", "JWT/Auth", "MongoDB", "React", "Node.js"];

function Hero() {
  return (
    <section id="home" className="hero section shell fade-in-section">
      <div className="hero-copy">
        <h1>Vishakha Mane</h1>
        <p className="subtext">Full-Stack Developer — MERN Stack — APIs — Authentication</p>
        <p className="intro">
          I build scalable digital products with clean interfaces and robust backend systems, combining usability,
          security, and maintainable architecture.
        </p>

        <div className="meta-row">
          <a href="mailto:vishakhasm1234@gmail.com">vishakhasm1234@gmail.com</a>
          <a href="https://linkedin.com/in/vishakha-mane-070053280" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/vishakhatiti" target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <div className="skill-links" aria-label="Skills and core focus areas">
          {skills.map((skill) => (
            <span key={skill} className="skill-chip">{skill}</span>
          ))}
        </div>

        <div className="cta-group">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>

      <div className="hero-image-wrap">
        <img src={photo} alt="Vishakha Mane portrait" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
