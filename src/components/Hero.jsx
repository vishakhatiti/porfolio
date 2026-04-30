function Hero() {
  return (
    <section id="home" className="hero section shell fade-in-section">
      <div className="hero-copy">
        <h1>Full-Stack Developer</h1>
        <p className="subtext">MERN Stack • APIs • Authentication</p>
        <p className="intro">
          I build scalable web experiences with thoughtful UI and reliable backend systems, designed for performance,
          maintainability, and real-world impact.
        </p>
        <div className="cta-group">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      <div className="hero-image-wrap" aria-label="Profile image placeholder">
        <div className="hero-image placeholder">
          <span>Add image:</span>
          <code>src/assets/images/photo.png</code>
        </div>
      </div>
    </section>
  );
}

export default Hero;
