import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext(); // Crear el contexto

export const ThemeProvider = ({ children }) => { // Proveedor del contexto
  const savedTheme = localStorage.getItem("theme");
  const initialTheme = savedTheme ? JSON.parse(savedTheme) : false;
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return ( // Pasar el valor del contexto
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para consumir el contexto
export const useTheme = () => {
  return useContext(ThemeContext);
};