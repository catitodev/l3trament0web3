import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Users, Heart, Share2, ArrowRight } from 'lucide-react';

const CommonsLife: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Globe className="w-16 h-16 mx-auto mb-6 text-purple-400" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Cultura Commons
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Construindo comunidades baseadas em colaboração, compartilhamento e sustentabilidade
            </p>
          </div>
        </div>
      </section>

      {/* What is Commons Culture */}
      <section className="py-16 bg-white bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            O que é Cultura Commons?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                A cultura commons é baseada na ideia de que recursos e conhecimentos podem ser
                compartilhados de forma sustentável, criando valor para toda a comunidade.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Share2 className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Compartilhamento de recursos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Governança coletiva</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Cuidado mútuo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Sustentabilidade</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Princípios Fundamentais</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Acesso equitativo aos recursos</li>
                <li>• Tomada de decisão participativa</li>
                <li>• Responsabilidade compartilhada</li>
                <li>• Preservação para futuras gerações</li>
                <li>• Diversidade e inclusão</li>
                <li>• Transparência e accountability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commons in Practice */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Commons na Prática
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Commons */}
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/30">
              <div className="flex items-center gap-4 mb-4">
                <Globe className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Commons Digitais</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Plataformas e recursos digitais gerenciados coletivamente.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Wikipedia e wikis colaborativos</li>
                <li>• Software livre e open source</li>
                <li>• Redes sociais descentralizadas</li>
                <li>• Bibliotecas digitais abertas</li>
              </ul>
            </div>

            {/* Urban Commons */}
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-xl border border-green-500/30">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-bold text-white">Commons Urbanos</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Espaços e recursos urbanos gerenciados pela comunidade.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Jardins comunitários</li>
                <li>• Espaços de coworking</li>
                <li>• Bibliotecas de ferramentas</li>
                <li>• Bike sharing comunitário</li>
              </ul>
            </div>

            {/* Knowledge Commons */}
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30">
              <div className="flex items-center gap-4 mb-4">
                <Heart className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Commons do Conhecimento</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Conhecimento e educação compartilhados livremente.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Recursos educacionais abertos</li>
                <li>• Pesquisa colaborativa</li>
                <li>• Comunidades de aprendizado</li>
                <li>• Documentação compartilhada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Building Commons */}
      <section className="py-16 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Como Construir Commons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Identifique Recursos</h3>
                  <p className="text-gray-300">
                    Mapie recursos que podem ser compartilhados na sua comunidade.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Envolva a Comunidade</h3>
                  <p className="text-gray-300">
                    Crie espaços para diálogo e tomada de decisão coletiva.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Estabeleça Regras</h3>
                  <p className="text-gray-300">
                    Defina acordos claros sobre uso e manutenção dos recursos.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Implemente Estruturas</h3>
                  <p className="text-gray-300">
                    Crie sistemas para monitoramento e resolução de conflitos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Mantenha e Evolua</h3>
                  <p className="text-gray-300">
                    Adapte-se às mudanças e mantenha o commons saudável.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  6
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Conecte com Outros</h3>
                  <p className="text-gray-300">
                    Forme redes com outros commons para fortalecer o movimento.
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
            Viva a Cultura Commons
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transforme sua comunidade através da colaboração e do compartilhamento responsável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/community"
              className="btn-primary flex items-center gap-2 justify-center"
            >
              Participar da Comunidade <Users className="w-5 h-5" />
            </Link>
            <Link
              to="/abundant-relationships"
              className="btn-secondary flex items-center gap-2 justify-center"
            >
              Relações Abundantes <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommonsLife;