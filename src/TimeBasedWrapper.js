import React, { useState, useEffect } from 'react';

export default function TimeBasedWrapper({ children }) {
  const [timeClass, setTimeClass] = useState('bg-afternoon'); // Default fallback

  useEffect(() => {
    const updateBackground = () => {
      const hour = new Date().getHours();
      
      if (hour >= 6 && hour < 11) {
        setTimeClass('bg-morning');
      } else if (hour >= 11 && hour < 17) {
        setTimeClass('bg-afternoon');
      } else if (hour >= 17 && hour < 21) {
        setTimeClass('bg-evening');
      } else {
        setTimeClass('bg-night');
      }
    };

    // Run once when the component mounts
    updateBackground();

    // Optional: Check every 15 minutes in case the user leaves the page open
    const interval = setInterval(updateBackground, 60000 * 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-1000 ${timeClass}`}>
      {children}
    </div>
  );
}