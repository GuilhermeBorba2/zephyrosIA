import React from "react";
import { motion } from "framer-motion";
import { Brain, Rocket, Users, Target } from "lucide-react";

const features = [
    {
        icon: Brain,
        title: "Expertise em IA",
        description: "Desenvolvemos soluções avançadas de IA que transformam dados em insights acionáveis."
    },
    {
        icon: Rocket,
        title: "Inovação Constante",
        description: "Mantemos-nos na vanguarda da tecnologia para oferecer as soluções mais avançadas."
    },
    {
        icon: Users,
        title: "Equipe Especializada",
        description: "Nossa equipe combina experiência técnica com visão estratégica de negócios."
    },
    {
        icon: Target,
        title: "Foco em Resultados",
        description: "Comprometidos em entregar valor mensurável para nossos clientes."
    }
];

const About = () => {
    return (
        <section id="about" className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                >
                    Sobre Nós
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-white">
                            Transformando o Futuro com Inteligência Artificial
                        </h3>
                        <p className="text-lg text-cyan-200/80 leading-relaxed">
                            Na <span className="text-cyan-400 font-bold">Zephyros IA</span>,
                            acreditamos no poder transformador da inteligência artificial.
                            Nossa missão é tornar a IA acessível e impactante, ajudando
                            empresas a alcançarem seu máximo potencial através de soluções
                            inovadoras e personalizadas.
                        </p>
                        <p className="text-lg text-cyan-200/80 leading-relaxed">
                            Com uma combinação única de expertise técnica e compreensão
                            profunda dos desafios empresariais, desenvolvemos soluções
                            que não apenas resolvem problemas atuais, mas também preparam
                            nossos clientes para o futuro.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
                                alt="AI Technology"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
                        >
                            <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                            <h4 className="text-xl font-semibold text-white mb-2">
                                {feature.title}
                            </h4>
                            <p className="text-cyan-200/80">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-white/10"
                >
                    <p className="text-xl text-center text-cyan-200/80 leading-relaxed">
                        "Junte-se a nós nessa jornada de inovação e descubra como a
                        inteligência artificial pode revolucionar seu negócio. Estamos
                        prontos para transformar desafios em oportunidades e ideias em
                        realidade."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
