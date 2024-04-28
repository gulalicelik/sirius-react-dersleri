import { createContext, useState } from 'react';

export const ThemeContext = createContext('light');

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        console.log('theme:', theme);
        // document.body.style.backgroundColor = theme === 'light' ? 'black' : 'white';
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};