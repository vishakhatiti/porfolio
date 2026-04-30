function Hero() {
  return (
    <section id="home" className="hero section shell fade-in-section">
      <div className="hero-copy">
        <p className="eyebrow">Vishakha Mane</p>
        <h1>Full-Stack Developer</h1>
        <p className="subtext">MERN Stack • APIs • Authentication</p>
        <p className="intro">
          I build scalable digital products with clean interfaces and robust backend systems, combining usability,
          security, and maintainable architecture.
        </p>
        <div className="meta-row">
          <a href="mailto:vishakhasm1234@gmail.com">vishakhasm1234@gmail.com</a>
          <span>•</span>
          <a href="tel:+917499752467">+91 74997 52467</a>
        </div>
        <div className="cta-group">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      <div className="hero-image-wrap" aria-label="Profile image placeholder">
        <div className="hero-image placeholder">
          <span>Add profile image at:</span>
          <code>src/assets/images/photo.png</code>
        </div>
      </div>
    </section>
  );
}

export default Hero;
