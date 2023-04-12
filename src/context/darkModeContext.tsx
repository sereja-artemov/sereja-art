import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext<DarkModeContextType | null>(null);

type DarkModeProviderProps = {
  children?: ReactNode
}

export interface DarkModeContextType {
  setDarkTheme(): void;
  setLightTheme(): void;
  theme: {[key:string]:string};
  currentTheme: string;

}
const DarkModeProvider = ({ children }:DarkModeProviderProps) => {

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

  const contextValue: DarkModeContextType = {
    theme, currentTheme, setDarkTheme, setLightTheme
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  )
}

const useTheme = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context!;
};

export { DarkModeProvider, useTheme};
