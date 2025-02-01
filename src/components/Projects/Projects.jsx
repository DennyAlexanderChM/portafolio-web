import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInAnimation, scaleAnimation } from "../../utils/animation";
import { useTheme } from "../../context/ThemeContext";
import "./Projects.css";

function Projects() {
  const [filter, setFilter] = useState("all");
  const { theme } = useTheme();

  const projects = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Descripción breve del Proyecto 1.",
      category: "React",
      image: "https://placehold.co/300x300", // Reemplaza con la URL de tu imagen
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Descripción breve del Proyecto 2.",
      category: "JavaScript",
      image: "https://placehold.co/300x300", // Reemplaza con la URL de tu imagen
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Descripción breve del Proyecto 3.",
      category: "React",
      image: "https://placehold.co/300x300", // Reemplaza con la URL de tu imagen
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <motion.section
      id="projects"
      className={`projects ${theme ? "dark-mode" : "light-mode"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInAnimation}
    >
      <h2>Proyectos</h2>
      <div className="filters">
        <button onClick={() => setFilter("all")}>Todos</button>
        <button onClick={() => setFilter("React")}>React</button>
        <button onClick={() => setFilter("JavaScript")}>JavaScript</button>
      </div>
      <motion.div
        className="projects-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-item"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }} // Animación al desaparecer
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}

export default Projects;
