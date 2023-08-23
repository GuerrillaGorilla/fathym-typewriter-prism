import * as React from 'react';
import { motion } from "framer-motion";

interface message {
  line: string;
  startDelay: number;
  letterSpeed: number;
  letterFade: number;
}

const Sentence = (startDelay: number, letterSpeed: number) => {
  const intDelay = startDelay;
  const letterDelay = letterSpeed;

  return ({
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        delayChildren: intDelay ? intDelay : 0,
        staggerChildren: letterDelay ? letterDelay : 0.08,
      },
    },
  });
}

const Letter = (letterFade: number) => {
  const fadeDelay = letterFade;

  return ({
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: {duration: fadeDelay ? fadeDelay : 0.08}
      },
    },
  });
}

export default function Typewriter({ line, startDelay, letterSpeed, letterFade }: message) {
  return (
    <motion.span
      whileInView="visible"
      viewport={{ once: true }}
      className="load-screen--message"
      variants={Sentence(startDelay, letterSpeed)}
      initial="hidden"
    >
      {line.split("").map((char, index) => {
        return (
          <motion.span style={{ whiteSpace: 'pre-wrap' }} key={char + "-" + index} variants={Letter(letterFade)} >
            {char}
          </motion.span>
        )
      })}
    </motion.span>
  )
}