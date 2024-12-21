import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Code, Bot, Search, LineChart } from 'lucide-react';

const services = [
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Modelos preditivos e algoritmos de aprendizado',
    Icon: Brain,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Análise e visualização avançada de dados',
    Icon: Database,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ia-development',
    title: 'Desenvolvimento IA',
    description: 'Sistemas inteligentes customizados',
    Icon: Code,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'automation',
    title: 'Automação',
    description: 'Processos automatizados com IA',
    Icon: Bot,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'predictive-analysis',
    title: 'Análise Preditiva',
    description: 'Previsões baseadas em dados históricos',
    Icon: Search,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    description: 'Insights estratégicos para negócios',
    Icon: LineChart,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  }
];

const Sections = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <section id="services" className="min-h-screen py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          Nossos Serviços
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 rounded-2xl overflow-hidden backdrop-blur-lg border border-white/10"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <service.Icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-cyan-200/80">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sections;