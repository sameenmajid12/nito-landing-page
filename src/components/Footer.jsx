import "../styles/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-wrapper">
        <img className="footer-logo" src="/assets/logo.png"></img>
      </div>
      <p className="trademark-text">© 2025, Nito. All rights reserved.</p>
      <div className="social-wrapper">
        <a
          href="https://www.linkedin.com/company/app-nito"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icon" src="/assets/linkedin.png"></img>
        </a>
        <a
          href="https://www.x.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icon" src="/assets/twitter.png"></img>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icon" src="/assets/instagram.png"></img>
        </a>
      </div>
    </footer>
  );
}
export default Footer;
