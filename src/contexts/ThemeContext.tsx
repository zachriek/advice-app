import { useState, createContext } from 'react';

export const ThemeContext = createContext<any>('');

const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<string>('dark');

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
