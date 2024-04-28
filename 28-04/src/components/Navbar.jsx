import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx'

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <nav className={`navbar ${theme}`}>
            <div className="navbar-brand">
                <h1>My App</h1>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </nav>
    );
};

export default Navbar;