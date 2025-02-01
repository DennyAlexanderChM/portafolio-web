# Portafolio Web

Este es el repositorio del portafolio web de Denny Alexander. Este proyecto está construido utilizando React y varias librerías para mejorar la funcionalidad y el diseño.

## Componentes

El proyecto está organizado en varios componentes, cada uno con su propio archivo CSS para estilos específicos:

- **Navbar**: Barra de navegación que incluye enlaces a las diferentes secciones del portafolio y un botón para cambiar el tema.
  - Archivos: [`Navbar.jsx`](src/components/Navbar/Navbar.jsx), [`Navbar.css`](src/components/Navbar/Navbar.css)
  
- **Header**: Sección de encabezado que incluye una breve introducción y enlaces a proyectos y contacto.
  - Archivos: [`Header.jsx`](src/components/Header/Header.jsx), [`Header.css`](src/components/Header/Header.css), [`Type.jsx`](src/components/Header/Type.jsx)
  
- **About**: Sección sobre mí que incluye una breve descripción y un botón para descargar el CV.
  - Archivos: [`About.jsx`](src/components/About/About.jsx), [`About.css`](src/components/About/About.css)
  
- **Projects**: Sección de proyectos que muestra una lista de proyectos filtrables por categoría.
  - Archivos: [`Projects.jsx`](src/components/Projects/Projects.jsx), [`Projects.css`](src/components/Projects/Projects.css)
  
- **Skills**: Sección de habilidades que muestra una lista de habilidades con iconos.
  - Archivos: [`Skills.jsx`](src/components/Skills/Skills.jsx), [`Skills.css`](src/components/Skills/Skills.css)
  
- **Contact**: Sección de contacto que incluye un formulario para enviar mensajes y datos de contacto.
  - Archivos: [`Contact.jsx`](src/components/Contact/Contact.jsx), [`Contact.css`](src/components/Contact/Contact.css)
  
- **Footer**: Pie de página que incluye enlaces a redes sociales y derechos de autor.
  - Archivos: [`Footer.jsx`](src/components/Footer/Footer.jsx), [`Footer.css`](src/components/Footer/Footer.css)
  
- **ScrollToTop**: Botón para volver al inicio de la página.
  - Archivos: [`ScrollToTop.jsx`](src/components/ScrollToTop/ScrollToTop.jsx), [`ScrollToTop.css`](src/components/ScrollToTop/ScrollToTop.css)

## Librerías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Framer Motion**: Utilizada para animaciones.
- **React Icons**: Proporciona iconos para la interfaz.
- **React Scroll**: Permite el desplazamiento suave entre secciones.
- **React Toastify**: Utilizada para mostrar notificaciones.
- **Typewriter Effect**: Añade un efecto de máquina de escribir en el encabezado.

## Contexto

El proyecto utiliza un contexto para manejar el tema (claro/oscuro) de la aplicación.

- Archivos: [`ThemeContext.jsx`](src/context/ThemeContext.jsx)

## Animaciones

Las animaciones están definidas en un archivo de utilidades.

- Archivos: [`animation.jsx`](src/utils/animation.jsx)

## Configuración

El proyecto está configurado con Vite para el desarrollo y construcción.

- Archivos: [`vite.config.js`](vite.config.js)

## Scripts

- `dev`: Inicia el servidor de desarrollo.
- `build`: Construye el proyecto para producción.
- `lint`: Ejecuta ESLint para encontrar y arreglar problemas en el código.
- `preview`: Previsualiza la construcción de producción.

## Instalación

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Inicia el servidor de desarrollo con `npm run dev`.

## Licencia

Este proyecto está bajo la licencia MIT.