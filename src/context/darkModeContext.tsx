import React, {createContext, useEffect, useState} from 'react';

export const DarkModeContext = createContext(undefined);

export const DarkModeProvider = ({ children }) => {
  const darkTheme = 'dark';
  const lightTheme = 'light';

  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    setLightTheme();
  }, [])

  useEffect(() => {
    updateTheme();
  }, [currentTheme])

  const updateTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === darkTheme) {
      document.body.setAttribute('data-theme', darkTheme);
    } else {
      document.body.setAttribute('data-theme', lightTheme);
    }
  }

  const setDarkTheme = () => {
    setCurrentTheme(darkTheme);
    localStorage.setItem('theme', darkTheme);
  }

  const setLightTheme = () => {
    setCurrentTheme(lightTheme);
    localStorage.setItem('theme', lightTheme);
  }

  return (
    <DarkModeContext.Provider value={{setDarkTheme, setLightTheme}}>
      {children}
    </DarkModeContext.Provider>
  )

}
