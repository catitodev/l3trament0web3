import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Shield, Code, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const DigitalLiteracy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Letramento Digital
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Desenvolva as habilidades essenciais para prosperar no mundo digital moderno
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 bg-white bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Habilidades Fundamentais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Security */}
            <div className="p-6 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-xl border border-red-500/30">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-8 h-8 text-red-400" />
                <h3 className="text-xl font-bold text-white">Segurança Digital</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Gestão de senhas seguras
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Identificação de phishing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Proteção de dados pessoais
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Navegação segura na web
                </li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/30">
              <div className="flex items-center gap-4 mb-4">
                <Code className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Desenvolvimento Web</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  HTML, CSS e JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Frameworks modernos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Versionamento com Git
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Deploy e hospedagem
                </li>
              </ul>
            </div>

            {/* Web3 Basics */}
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30">
              <div className="flex items-center gap-4 mb-4">
                <Globe className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Web3 Básico</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Carteiras digitais
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Blockchain básico
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Tokens e NFTs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  DeFi introdutório
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 bg-gradient-to-br from-purple-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Sua Jornada de Aprendizado
          </h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4 p-6 bg-white bg-opacity-10 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Fundamentos</h3>
                <p className="text-gray-300">
                  Comece com os conceitos básicos de segurança digital e navegação web.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-white bg-opacity-10 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Habilidades Práticas</h3>
                <p className="text-gray-300">
                  Desenvolva competências técnicas através de projetos práticos.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-white bg-opacity-10 rounded-xl">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Web3 Avançado</h3>
                <p className="text-gray-300">
                  Explore tecnologias emergentes e participe do ecossistema descentralizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Pronto para Começar sua Jornada?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se a milhares de pessoas que já estão transformando suas vidas através do letramento digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/journey"
              className="btn-primary flex items-center gap-2 justify-center"
            >
              Começar Agora <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/community"
              className="btn-secondary flex items-center gap-2 justify-center"
            >
              Participar da Comunidade <BookOpen className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalLiteracy;