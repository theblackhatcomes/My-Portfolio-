'use client';

import { motion } from 'framer-motion';

export default function TypingName() {
  const name = "OUSSAMA HMOUTE";
  const letters = name.split('');

  return (
    <div className="flex">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: index * 0.1,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          {letter}
        </motion.span>
      ))}
      <motion.span
        className="text-2xl font-bold text-white"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        |
      </motion.span>
    </div>
  );
} 