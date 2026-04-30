import photo from "../assets/photo.png";

function Hero() {
  return (
    <section id="home" className="hero section container fade-in">
      <div>
        <p className="eyebrow">FULL-STACK DEVELOPER</p>
        <h1>Building secure, scalable and delightful digital products.</h1>
        <p className="lead">I’m Vishakha Mane — Full-Stack Developer specializing in MERN Stack, APIs and Authentication.</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#projects">View Projects</a>
          <a className="btn btn-ghost" href="#contact">Contact Me</a>
        </div>
      </div>
      <div className="hero-image-card">
        <img src={photo} alt="Vishakha Mane" className="hero-image" loading="eager" />
      </div>
    </section>
  );
}

export default Hero;
