import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          Entre em Contato
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 text-cyan-200">
              <Mail className="w-6 h-6" />
              <span>contato@zephyros.ai</span>
            </div>
            <div className="flex items-center gap-4 text-cyan-200">
              <Phone className="w-6 h-6" />
              <span>(95) 99999-9999</span>
            </div>
            <div className="flex items-center gap-4 text-cyan-200">
              <MapPin className="w-6 h-6" />
              <span>Boa Vista, RR - Brasil</span>
            </div>
            <div className="flex gap-4 pt-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-cyan-400 hover:text-cyan-300"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-cyan-400 hover:text-cyan-300"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-cyan-400 hover:text-cyan-300"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-cyan-400 hover:text-cyan-300"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Nome"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-cyan-500/20 text-cyan-200 placeholder-cyan-200/50 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-cyan-500/20 text-cyan-200 placeholder-cyan-200/50 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Mensagem"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-cyan-500/20 text-cyan-200 placeholder-cyan-200/50 focus:outline-none focus:border-cyan-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium"
            >
              Enviar Mensagem
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
