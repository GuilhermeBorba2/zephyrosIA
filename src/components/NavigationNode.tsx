import React from 'react';
import { motion } from 'framer-motion';

interface NavigationNodeProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavigationNode: React.FC<NavigationNodeProps> = ({ label, isActive, onClick }) => {
  return (
    <motion.div
      className={`
        relative cursor-pointer rounded-full p-4 w-24 h-24
        flex items-center justify-center text-white font-medium
        bg-gradient-to-br from-purple-600 to-blue-500
        ${isActive ? 'ring-4 ring-purple-300' : ''}
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={isActive ? { boxShadow: '0 0 20px rgba(110, 84, 255, 0.8)' } : {}}
      onClick={onClick}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/50 to-blue-500/50 animate-pulse" />
      <span className="relative z-10">{label}</span>
    </motion.div>
  );
};

export default NavigationNode;