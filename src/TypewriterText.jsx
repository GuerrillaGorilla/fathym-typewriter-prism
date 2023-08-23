import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, speed, startDelay }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, speed);

    return () => clearInterval(intervalId);
  }, [speed]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplayedText(text.slice(0, currentIndex));
    }, startDelay);

    return () => clearTimeout(timeoutId);
  }, [text, currentIndex, startDelay]);

  return (
    <span>
      {displayedText.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: speed / 2 }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

export default TypewriterText;