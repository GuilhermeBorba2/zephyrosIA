import React from 'react';
import { Brain, Database, Mail } from 'lucide-react';

const Header = () => {
  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 via-black/20 to-transparent backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent tracking-wider">
            Zephyros IA
          </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8">
            <a
                href="#about"
                className="flex items-center gap-2 text-cyan-200/80 hover:text-cyan-100 hover:scale-105 transition-all duration-200"
            >
              <Brain className="w-5 h-5" />
              <span>Sobre</span>
            </a>
            <a
                href="#services"
                className="flex items-center gap-2 text-cyan-200/80 hover:text-cyan-100 hover:scale-105 transition-all duration-200"
            >
              <Database className="w-5 h-5" />
              <span>Serviços</span>
            </a>
            <a
                href="#contact"
                className="flex items-center gap-2 text-cyan-200/80 hover:text-cyan-100 hover:scale-105 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>Contato</span>
            </a>
          </nav>
        </div>
      </header>
  );
};

export default Header;
