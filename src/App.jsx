import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useTheme } from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import "./App.css";

/*
  *
  * App component
  * This is the main component of the application
  * It contains all the components of the application
  * 
  * ScrollToTop: Component that allows to scroll to the top of the page
  * ToastContainer: Component that allows to show toast messages
  * useTheme: Custom hook that allows to get the theme of the application
  * 
*/

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme ? "dark-mode" : "light-mode"}`}>
      <ScrollToTop />
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
