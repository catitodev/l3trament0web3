import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Globe, Heart, Code, ArrowRight, CheckCircle } from 'lucide-react';

const PublicGoods: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-teal-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-green-400" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-6">
              Bens Públicos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Construindo um futuro mais justo através de recursos compartilhados e acessíveis
            </p>
          </div>
        </div>
      </section>

      {/* What Are Public Goods */}
      <section className="py-16 bg-white bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            O que são Bens Públicos Digitais?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                Bens públicos digitais são recursos de software, dados, modelos de IA, padrões e conteúdos
                que são de código aberto, gratuitos e acessíveis a todos.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Acessíveis a todos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Não-excludentes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Sustentáveis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Colaborativos</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-xl p-8 border border-green-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Exemplos Práticos</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Wikipedia e conteúdo educacional</li>
                <li>• Linux e sistemas operacionais</li>
                <li>• Protocolos de internet abertos</li>
                <li>• Bibliotecas de código open source</li>
                <li>• Datasets públicos para pesquisa</li>
                <li>• Ferramentas de desenvolvimento</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Áreas de Impacto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/30">
              <div className="flex items-center gap-4 mb-4">
                <Code className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Educação</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Democratizando o acesso ao conhecimento através de recursos educacionais abertos.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Plataformas de ensino online</li>
                <li>• Cursos gratuitos e certificações</li>
                <li>• Bibliotecas digitais</li>
              </ul>
            </div>

            {/* Healthcare */}
            <div className="p-6 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-xl border border-red-500/30">
              <div className="flex items-center gap-4 mb-4">
                <Heart className="w-8 h-8 text-red-400" />
                <h3 className="text-xl font-bold text-white">Saúde</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Melhorando os cuidados de saúde através de dados e ferramentas abertas.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Pesquisa médica colaborativa</li>
                <li>• Sistemas de saúde digitais</li>
                <li>• Dados epidemiológicos</li>
              </ul>
            </div>

            {/* Environment */}
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-xl border border-green-500/30">
              <div className="flex items-center gap-4 mb-4">
                <Globe className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-bold text-white">Meio Ambiente</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Combatendo as mudanças climáticas com dados e soluções colaborativas.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Monitoramento ambiental</li>
                <li>• Modelos climáticos</li>
                <li>• Soluções sustentáveis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Contribute */}
      <section className="py-16 bg-gradient-to-br from-green-900/50 to-teal-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Como Contribuir
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Identifique Necessidades</h3>
                  <p className="text-gray-300">
                    Encontre problemas em sua comunidade que podem ser resolvidos coletivamente.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Colabore e Construa</h3>
                  <p className="text-gray-300">
                    Participe de projetos existentes ou inicie novos com foco no bem comum.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Compartilhe Conhecimento</h3>
                  <p className="text-gray-300">
                    Documente processos e compartilhe aprendizados com a comunidade.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Sustente Projetos</h3>
                  <p className="text-gray-300">
                    Apoie a manutenção e evolução de bens públicos digitais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Faça Parte da Transformação
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se a uma comunidade global dedicada a criar um futuro mais justo e acessível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/community"
              className="btn-primary flex items-center gap-2 justify-center"
            >
              Participar da Comunidade <Users className="w-5 h-5" />
            </Link>
            <Link
              to="/commons-life"
              className="btn-secondary flex items-center gap-2 justify-center"
            >
              Cultura Commons <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicGoods;