import React from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, speed, startDelay }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const transition = {
    duration: speed,
    delay: startDelay,
  };

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
    >
      {text}
    </motion.span>
  );
};

export default TypewriterText;