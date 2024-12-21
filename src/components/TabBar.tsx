import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Mail } from 'lucide-react';

interface TabProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabBar: React.FC<TabProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'about', label: 'About', Icon: Brain },
    { id: 'services', label: 'Services', Icon: Cpu },
    { id: 'contact', label: 'Contact', Icon: Mail }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        <nav className="flex">
          {tabs.map(({ id, label, Icon }) => (
            <motion.button
              key={id}
              className={`flex items-center gap-2 px-6 py-4 text-white transition-colors ${
                activeTab === id ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
              onClick={() => onTabChange(id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </motion.button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TabBar;