import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const AnimatedBrain = () => {
  return (
    <motion.div
      animate={{
        rotateY: 360
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
      className="text-cyan-400"
    >
      <Brain className="w-48 h-48" />
    </motion.div>
  );
};

export default AnimatedBrain;