function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Vishakha Mane. All rights reserved.</p>
        <div>
          <a href="https://github.com/vishakhatiti" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/vishakha-mane-070053280" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:vishakhasm1234@gmail.com">Email</a>
          <a href="tel:7499752467">Call</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
