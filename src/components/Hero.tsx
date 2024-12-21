import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-8">
          <Brain className="w-48 h-48 text-cyan-400" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Zephyros IA
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-cyan-200/80 max-w-2xl mx-auto mb-8">
          Inovação impulsionada por Inteligência Artificial
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
