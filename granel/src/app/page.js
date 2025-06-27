"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const whatsappNumber = "5566968956261";
  
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de falar com um especialista da Granel Corretora sobre comercialização agrícola.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        className="bg-green-800 text-white py-4 px-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/logo.jpg"
              alt="Granel Corretora"
              width={120}
              height={60}
              className="rounded-lg"
            />
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            <motion.a 
              href="#servicos" 
              className="hover:text-yellow-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Serviços
            </motion.a>
            <motion.a 
              href="#contato" 
              className="hover:text-yellow-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contato
            </motion.a>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Granel Corretora 💰
              </motion.h1>
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-400"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Comercialização agrícola ágil, segura e transparente
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl mb-8 text-green-100"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Conte com uma equipe de especialistas para as melhores estratégias e resultados no mercado de grãos.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(234, 179, 8, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Fale com um Especialista Agora!
                </motion.button>
                <motion.a 
                  href="#servicos" 
                  className="border-2 border-white text-white hover:bg-white hover:text-green-800 py-4 px-8 rounded-lg text-lg transition-colors inline-block text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Saiba Mais sobre Nossos Serviços
                </motion.a>
              </motion.div>
            </div>
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 gap-4">
                <motion.div className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/foto.jpg"
                    alt="Granel Corretora - Comercialização Agrícola"
                    width={450}
                    height={300}
                    className="rounded-lg shadow-xl object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent rounded-lg"></div>
                </motion.div>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problema/Solução */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">O Desafio da Comercialização Agrícola</h2>
              <ul className="space-y-4 text-gray-600">
                <motion.li 
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-red-500 mr-3">❌</span>
                  Processos complexos e burocráticos
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-red-500 mr-3">❌</span>
                  Falta de transparência nas operações
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-red-500 mr-3">❌</span>
                  Dificuldade em encontrar as melhores oportunidades
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="text-red-500 mr-3">❌</span>
                  Tomadas de decisão lentas e imprecisas
                </motion.li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-green-800 mb-6">Nossa Solução</h2>
              <p className="text-gray-600 mb-6">
                A Granel Corretora simplifica o processo, garantindo agilidade, segurança e clareza nas operações de comercialização agrícola.
              </p>
              <ul className="space-y-4 text-gray-600">
                <motion.li 
                  className="flex items-start"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-green-500 mr-3">✅</span>
                  Processos otimizados e desburocratizados
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-green-500 mr-3">✅</span>
                  Total transparência em todas as operações
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-green-500 mr-3">✅</span>
                  Acesso às melhores oportunidades do mercado
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="text-green-500 mr-3">✅</span>
                  Decisões rápidas e estratégicas
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefícios Principais */}
      <section id="servicos" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Por que escolher a Granel Corretora?
          </motion.h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: "⚡", title: "Agilidade", description: "Processos otimizados para decisões rápidas" },
              { icon: "🔒", title: "Segurança", description: "Transações confiáveis e regulamentadas" },
              { icon: "🔍", title: "Transparência", description: "Informações claras e acessíveis sobre suas operações" },
              { icon: "👥", title: "Especialistas", description: "Equipe dedicada para as melhores estratégias" },
              { icon: "🎯", title: "Personalização", description: "Foco nas suas necessidades específicas" }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-3xl">{benefit.icon}</span>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      {/* Footer */}
      <motion.footer 
        className="bg-gray-800 text-white py-12 px-6"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/logo.jpg"
                alt="Granel Corretora"
                width={120}
                height={60}
                className="rounded-lg mb-4"
              />
              <p className="text-gray-300 mb-4">
                Seu parceiro ideal para otimizar a comercialização agrícola com agilidade, segurança e transparência.
              </p>
              <p className="text-sm text-gray-400">
                CNPJ: 33.386.313/0001-89
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-300">
                <p>📧 contato@granelcorretora.com.br</p>
                <motion.p 
                  className="cursor-pointer hover:text-yellow-400"
                  whileHover={{ scale: 1.05 }}
                  onClick={handleWhatsAppClick}
                >
                  📱 (66) 96895-6261
                </motion.p>
                <p>🏢 Piso Superior, Av dos Tarumãs, 430</p>
                <p className="text-sm">St. Res. Sul, Sinop - MT, 78550-001</p>
                <p>🕒 Segunda a Sexta: 07:30-17:00</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4">Navegação</h3>
              <div className="space-y-2">
                <div><a href="#servicos" className="text-gray-300 hover:text-yellow-400 transition-colors">Serviços</a></div>
                <div><a href="#contato" className="text-gray-300 hover:text-yellow-400 transition-colors">Contato</a></div>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2024 Granel Corretora. Todos os direitos reservados.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
