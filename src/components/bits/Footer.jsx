
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">
          Just Us <span>Boys</span>
        </h2>

        <p className="footer-text">
          Community for growth, accountability & real conversations.
        </p>

        <div className="footer-links">
          <a href="/">Privacy</a>
          <a href="/">Terms</a>
          <a href="/">Contact</a>
        </div>

        <p className="footer-copy">
          © 2025 Just Us Boys. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;