import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("header"); // Sección activa en la que se encuentra el usuario

  // Función para manejar el cambio de sección
  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const navItems = [
    { id: "header", name: "Inicio" },
    { id: "about", name: "Sobre Mí" },
    { id: "projects", name: "Proyectos" },
    { id: "skills", name: "Habilidades" },
    { id: "contact", name: "Contacto" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${theme ? "dark-mode" : "light-mode"}`}>
      <div className="navbar-container">
        {/* Logo o nombre */}
        <Link
          to="header"
          smooth={true}
          duration={500}
          className="navbar-logo"
          onClick={closeMobileMenu}
        >
          Denny Alexander
        </Link>

        {/* Menú Hamburguesa (Mobile) */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Lista de enlaces */}
        <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li className="nav-item" key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                className={`nav-links ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={closeMobileMenu}
                spy={true} // Activa la detección de la sección
                onSetActive={handleSetActive} // Maneja la sección activa
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="nav-item">
            {/* Botón de cambio de tema */}
            <button
              className="theme-toggle"
              onClick={() => toggleTheme()}
              aria-label="Toggle theme"
            >
              {theme ? (
                <FaSun className="theme-icon" />
              ) : (
                <FaMoon className="theme-icon" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
