import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Starts faint and slightly lower down
      whileInView={{ opacity: 1, y: 0 }} // Animates to full opacity and original position
      viewport={{ 
        once: true,      // Only animate once per page load (so it doesn't re-hide when scrolling up)
        amount: 0.25     // Triggers when 25% of the element is visible in the viewport
      }}
      transition={{ 
        duration: 0.8,   // Smooth, unhurried 0.8-second transition
        ease: [0.215, 0.610, 0.355, 1.000] // Custom cubic-bezier for a graceful "deceleration" effect
      }}
      style={{ marginBottom: '4rem' }} // Ensures healthy spacing between spiritual beats
    >
      {children}
    </motion.div>
  );
}