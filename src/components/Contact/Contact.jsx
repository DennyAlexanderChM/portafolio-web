import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { fadeInAnimation, slideInFromLeft, slideInFromRight } from "../../utils/animation";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import "react-toastify/ReactToastify.css";
import "./Contact.css";

function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toastifyConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  // Validar el formulario
  const validate = () => {
    const errors = [];
    if (!formData.name.trim()) errors.push("El nombre es requerido.");
    if (!formData.email.trim()) {
      errors.push("El correo es requerido.");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.push("El correo no es válido.");
    }
    if (!formData.message) errors.push("El mensaje es requerido.");

    // Mostrar errores con Toastify
    if (errors.length > 0) {
      errors.forEach((error) => {
        toast.error(<div>{error}</div>, toastifyConfig);
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        console.log(formData);
        // Simular el envío del formulario (reemplaza con tu lógica real)
        const response = await fetch("https://formspree.io/f/your-form-id", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success("¡Mensaje enviado correctamente!", toastifyConfig);
          setFormData({ name: "", email: "", message: "" }); // Limpiar el formulario
        } else {
          toast.error(
            "Hubo un error al enviar el mensaje. Inténtalo de nuevo.",
            toastifyConfig
          );
        }
      } catch (error) {
        toast.error(
          "Hubo un error al enviar el mensaje. Inténtalo de nuevo.",
          toastifyConfig
        );
      }
    }
  };

  return (
    <motion.section
      id="contact"
      className={`contact ${theme ? "dark-mode" : "light-mode"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInAnimation}
    >
      <h2>Contacto</h2>
      <div className="contact-container">
        {/* Sección de Datos Personales y Formulario */}
        <div className="contact-content">
          {/* Datos Personales */}
          <motion.div className="contact-info" variants={slideInFromLeft}>
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h3>Correo</h3>
                <p>alexanderchali195@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h3>Teléfono</h3>
                <p>+502 51710204</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h3>Dirección</h3>
                <p>Ciudad de Guatemala, Guatemala.</p>
              </div>
            </div>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.form
            onSubmit={handleSubmit}
            className="contact-form"
            variants={slideInFromRight}
          >
            <input
              type="text"
              value={formData.name}
              name="name"
              required
              placeholder="Tu nombre"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              value={formData.email}
              name="email"
              required
              placeholder="Tu email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              name="message"
              value={formData.message}
              placeholder="Tu mensaje"
              required
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            <button type="submit">Enviar</button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
