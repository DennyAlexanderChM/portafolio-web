import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimation, slideInFromLeft, slideInFromRight, } from "../../utils/animation";
import profilePhoto from "../../assets/images/programador.png";
import { useTheme } from "../../context/ThemeContext";
import "./About.css";

function About() {
  const { theme } = useTheme();
  // Función para descargar el CV
  const downloadCV = () => {
    const link = document.createElement("a");
    link.download = "Denny-Alexander-CV.pdf";
    link.href = "/Denny-Alexander-CV.pdf";
    link.click();
  };

  return (
    <motion.section
      id="about"
      className={`about ${theme ? "dark-mode" : "light-mode"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInAnimation}
    >
      <div className="about-container">
        <motion.div className="about-photo" variants={slideInFromLeft}>
          <img src={profilePhoto} alt="Denny-Alexander" />
        </motion.div>
        {/* Contenido */}
        <motion.div className="about-content" variants={slideInFromRight}>
          <h2>Sobre Mí</h2>
          <p>
            Soy un desarrollador web con experiencia en <strong>React</strong>,
            <strong>HTML</strong>, <strong>CSS</strong> y
            <strong>JavaScript</strong>. Me apasiona crear aplicaciones web
            modernas y responsivas que ofrezcan una experiencia de usuario
            excepcional.
          </p>
          <p>
            Mi enfoque se centra en escribir código limpio y eficiente,
            siguiendo las mejores prácticas de desarrollo. Siempre estoy
            buscando aprender nuevas tecnologías y mejorar mis habilidades.
          </p>
          {/* Botón para Descargar CV */}
          <motion.button
            className="download-cv"
            onClick={downloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Descargar CV
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
