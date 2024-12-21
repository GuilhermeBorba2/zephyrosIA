import React from 'react';
import { motion } from 'framer-motion';

interface ContentSectionProps {
  title: string;
  content: string;
  isVisible: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, content, isVisible }) => {
  return (
    <motion.div
      className="max-w-4xl mx-auto mt-24 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white shadow-xl border border-white/20">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-lg leading-relaxed">{content}</p>
      </div>
    </motion.div>
  );
};

export default ContentSection;