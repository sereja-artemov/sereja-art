import React, {createContext, useContext, useEffect, useState} from 'react';

const DarkModeContext = createContext(undefined);

const DarkModeProvider = ({ children }) => {

  const theme = {
    darkTheme: 'dark',
    lightTheme: 'light',
  }

  const [currentTheme, setCurrentTheme] = useState(theme.lightTheme);

  useEffect(() => {
    updateTheme();
  }, [currentTheme])

  const updateTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === theme.darkTheme) {
      document.body.setAttribute('data-theme', theme.darkTheme);
      setDarkTheme();
    } else {
      document.body.setAttribute('data-theme', theme.lightTheme);
      setLightTheme();
    }
  }

  const setDarkTheme = () => {
    setCurrentTheme(theme.darkTheme);
    localStorage.setItem('theme', theme.darkTheme);
  }

  const setLightTheme = () => {
    setCurrentTheme(theme.lightTheme);
    localStorage.setItem('theme', theme.lightTheme);
  }

  return (
    <DarkModeContext.Provider value={{theme, currentTheme, setDarkTheme, setLightTheme}}>
      {children}
    </DarkModeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { DarkModeProvider, useTheme};
