import React, { useState, useEffect } from 'react';
import './ThemeSwitcher.css';

export default function ThemeSwitcher({ theme: externalTheme, onThemeChange }) {
  // Keep local state for standalone usage; App can control this component via props.
  const [internalTheme, setInternalTheme] = useState(() => {
    return localStorage.getItem('devotional-theme') || 'light';
  });

  const theme = externalTheme ?? internalTheme;
  const setTheme = onThemeChange ?? setInternalTheme;

  // Whenever the theme state changes, update the DOM and localStorage
  useEffect(() => {
    // Apply the custom attribute to the root HTML tag
    document.documentElement.setAttribute('color-theme', theme);
    localStorage.setItem('devotional-theme', theme);
  }, [theme]);

  return (
    <div className="theme-switcher-container">
      <span className="theme-label">Reading Mode:</span>
      <div className="button-group">
        <button 
          onClick={() => setTheme('default')}
          className={`theme-btn light ${theme === 'default' ? 'active' : ''}`}
        >
           🕰 Default
        </button>
        <button 
          onClick={() => setTheme('light')}
          className={`theme-btn light ${theme === 'light' ? 'active' : ''}`}
        >
          ☀️ Light
        </button>
        
        <button 
          onClick={() => setTheme('dark')}
          className={`theme-btn dark ${theme === 'dark' ? 'active' : ''}`}
        >
          🌙 Dark
        </button>
        
        <button 
          onClick={() => setTheme('sepia')}
          className={`theme-btn sepia ${theme === 'sepia' ? 'active' : ''}`}
        >
          📜 Sepia
        </button>
      </div>
    </div>
  );
}