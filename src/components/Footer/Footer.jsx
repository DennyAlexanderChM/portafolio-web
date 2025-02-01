import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import "./Footer.css";

function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className={`footer ${theme ? "dark-mode" : "light-mode"}`}>
      <div className="footer-content">
        {/* Enlaces de Contacto */}
        <div className="footer-contact">
          <h3>Denny Alexander Chalí Miza</h3>
          <p>
            "Si lo puedes imaginar, lo puedes programar" - Alejandro Taboada{" "}
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/denny-alexander-cm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/DennyAlexanderChM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:alexanderchali195@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>
          © {new Date().getFullYear()} Denny Alexander. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
