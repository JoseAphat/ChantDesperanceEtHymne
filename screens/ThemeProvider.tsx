import React, { createContext, useState, useContext } from 'react';

// Créer le contexte
const ThemeContext = createContext({
  isNightMode: false,
  toggleNightMode: () => {},
});

// Créer le fournisseur
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => setIsNightMode(!isNightMode);

  return (
    <ThemeContext.Provider value={{ isNightMode, toggleNightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Exporter le fournisseur et le hook personnalisé
export const useTheme = () => useContext(ThemeContext);

// Exporter par défaut
export default ThemeProvider;
