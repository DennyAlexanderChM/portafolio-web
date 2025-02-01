import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { fadeInAnimation, slideInFromLeft, slideInFromRight } from "../../utils/animation";
import Type from "./Type"; // Importamos el componente Type (Efencto de escritura)
import "./Header.css";

function Header() {
  const { theme } = useTheme();

  return (
    <motion.header
      id="header"
      className={`header ${theme ? "dark-mode" : "light-mode"}`}
      initial="hidden" // Estado inicial
      animate="visible" // Estado final
      viewport={{ once: true }} // La animación solo se activa una vez
      variants={fadeInAnimation} // Animación a aplicar
    >
      <div className="header-content">
        <motion.h3 variants={fadeInAnimation}>Hola, mi nombre es</motion.h3>
        <motion.h1 variants={slideInFromLeft}>Denny Alexander</motion.h1>
        <Type />
        <div className="header-buttons">
          <motion.div variants={slideInFromLeft}>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={`btn-primary ${theme ? "dark-mode" : ""}`}
            >
              Ver Proyectos
            </Link>
          </motion.div>
          <motion.div variants={slideInFromRight}>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={`btn-secondary ${theme ? "dark-mode" : ""}`}
            >
              Contacto
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
