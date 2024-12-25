import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 right-6 w-[400px] h-[600px] bg-gradient-to-b from-purple-900/90 to-blue-900/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 flex flex-col z-50"
          >
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h3 className="text-white font-medium">Chat with AI Assistant</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 w-full h-full">
              <iframe 
                src="https://dash.superagentes.ai/agents/cm285669l01ws10iwlbrjzjd9/iframe"
                className="w-full h-full rounded-b-2xl"
                frameBorder="0"
                allow="clipboard-write"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;