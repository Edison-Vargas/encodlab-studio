import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const ToggleDarkMode = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="fixed top-4 right-4 p-2 bg-gray-300 dark:bg-gray-700 rounded-md shadow-md z-10 text-gray-800 dark:text-gray-200"
        >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ToggleDarkMode;