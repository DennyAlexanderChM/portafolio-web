import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaMobileAlt } from "react-icons/fa";
import { fadeInAnimation, scaleAnimation } from "../../utils/animation";
import { useTheme } from "../../context/ThemeContext";
import "./Skills.css";

function Skills() {
  const { theme } = useTheme();
  const skills = [
    {
      icon: <FaReact />,
      name: "React",
      description: "Desarrollo de interfaces modernas y dinámicas.",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
      description: "Estructura semántica y accesible para la web.",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS",
      description: "Diseño responsivo y estilos modernos.",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      description: "Funcionalidades interactivas y dinámicas.",
    },
    {
      icon: <FaMobileAlt />,
      name: "Responsive Design",
      description: "Diseño adaptable a todos los dispositivos.",
    },
  ];

  return (
    <motion.section
      id="skills"
      className={`skills ${theme ? "dark-mode" : "light-mode"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInAnimation}
    >
      <h2>Habilidades</h2>
      <motion.div
        className="skills-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }, // Retraso entre elementos
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            variants={scaleAnimation}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Skills;
