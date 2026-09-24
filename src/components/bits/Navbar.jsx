import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/white.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();

    const section = document.querySelector(id);

    if (section) {
      const navbar = document.querySelector(".navbar");
      const navbarHeight = navbar?.offsetHeight || 0;

      const sectionPosition =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a
          href="#home"
          className="brand"
          onClick={(e) => scrollToSection(e, "#home")}
        >
          <img
            src={logo}
            alt="Just Us Boys"
            className="logo"
          />
        </a>
      </div>

      <div className={`navbar-right ${isMenuOpen ? "open" : ""}`}>
        <ul className="items-list">
          <li>
            <a
              href="#home"
              className="navbar-link"
              onClick={(e) => scrollToSection(e, "#home")}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#story"
              className="navbar-link"
              onClick={(e) => scrollToSection(e, "#story")}
            >
              Our Mission
            </a>
          </li>

          <li>
            <a
              href="#community"
              className="navbar-link"
              onClick={(e) => scrollToSection(e, "#community")}
            >
              Events
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="navbar-link"
              onClick={(e) => scrollToSection(e, "#contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;