import React, { useState } from 'react';
import { ArrowRight, Play, CheckCircle, Globe, Heart, Target, Users, Sparkles, FileText, Award, Send, Lock, Leaf, Lightbulb, MessageCircle, Compass, Book, Video, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const Bloco1 = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [reportContent, setReportContent] = useState('');
  const [reflection, setReflection] = useState('');
  const [perfilSelecionado, setPerfilSelecionado] = useState('');

  const sections = [
    {
      id: 1,
      title: "O Despertar Digital",
      subtitle: "Reconhecendo o momento de transformação",
      content: "Vivemos um momento único na história da humanidade. A tecnologia não é mais apenas uma ferramenta, mas está se tornando a base de como nos relacionamos, criamos valor e construímos o futuro.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Sua Relação com a Tecnologia",
      subtitle: "Entendendo onde você está agora",
      content: "Antes de embarcar nesta jornada, é importante refletir: como você se relaciona com a tecnologia hoje? Você consome passivamente ou participa ativamente da criação do futuro digital?",
      icon: <Heart className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      title: "O Protagonismo Regenerativo",
      subtitle: "Tornando-se um agente de transformação",
      content: "Protagonismo regenerativo significa assumir um papel ativo na construção de um futuro digital que regenera comunidades, ecossistemas e relações humanas, ao invés de apenas extrair valor.",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600"
    },
    {
      id: 4,
      title: "Aprendizado Descentralizado",
      subtitle: "Uma nova forma de aprender e ensinar",
      content: "O aprendizado descentralizado coloca você no centro do processo. Não há hierarquias rígidas, mas uma rede colaborativa onde todos ensinam e aprendem simultaneamente.",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const handleReportSubmit = () => {
    if (reportContent.trim() && reflection.trim()) {
      setReportSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-800">Bloco 1</h1>
                <p className="text-sm text-slate-600">Protagonismo Regenerativo</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-slate-600">
                Seção {currentSection} de {sections.length}
              </div>
              <Link to="/" className="text-slate-600 hover:text-slate-800 transition-colors">
                ← Voltar
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white/50 backdrop-blur-sm border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentSection / sections.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
              Protagonismo Regenerativo
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Desperte para seu papel ativo na construção de um futuro digital 
              que regenera comunidades e ecossistemas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-slate-200/50">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Visão Global</h3>
              <p className="text-sm text-slate-600">Compreenda o contexto maior da transformação digital</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-slate-200/50">
              <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Propósito Pessoal</h3>
              <p className="text-sm text-slate-600">Defina sua intenção e motivação para esta jornada</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-slate-200/50">
              <Leaf className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Impacto Regenerativo</h3>
              <p className="text-sm text-slate-600">Aprenda a criar valor que regenera, não apenas extrai</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setCurrentSection(section.id)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSection === section.id
                      ? 'bg-blue-600 w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-slate-200/50 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${sections[currentSection - 1].color} rounded-xl flex items-center justify-center`}>
                {sections[currentSection - 1].icon}
                <span className="text-white">{sections[currentSection - 1].icon}</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">{sections[currentSection - 1].title}</h2>
                <p className="text-slate-600">{sections[currentSection - 1].subtitle}</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                {sections[currentSection - 1].content}
              </p>

              {/* Section-specific content */}
              {currentSection === 1 && (
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200/50">
                    <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-blue-600" />
                      Reflexão Inicial
                    </h3>
                    <p className="text-slate-700">
                      Pense em como a tecnologia impactou sua vida nos últimos 5 anos. 
                      Quais mudanças você observou? Como você se sente em relação a essas transformações?
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50">
                      <h4 className="font-semibold text-slate-800 mb-3">🌱 Oportunidades</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• Conexão global instantânea</li>
                        <li>• Acesso democratizado ao conhecimento</li>
                        <li>• Novas formas de criar valor</li>
                        <li>• Participação em comunidades globais</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200/50">
                      <h4 className="font-semibold text-slate-800 mb-3">⚠️ Desafios</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• Concentração de poder em big techs</li>
                        <li>• Perda de privacidade e autonomia</li>
                        <li>• Desinformação e polarização</li>
                        <li>• Exclusão digital e desigualdade</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {currentSection === 2 && (
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200/50">
                    <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                      Autoavaliação
                    </h3>
                    <p className="text-slate-700 mb-4">
                      Responda honestamente: Em qual categoria você se encaixa melhor hoje?
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                        <div>
                          <span className="font-medium text-slate-800">Consumidor Passivo:</span>
                          <span className="text-slate-600"> Uso tecnologia apenas para consumir conteúdo</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                        <div>
                          <span className="font-medium text-slate-800">Usuário Ativo:</span>
                          <span className="text-slate-600"> Participo de redes sociais e crio conteúdo ocasionalmente</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        <div>
                          <span className="font-medium text-slate-800">Criador Consciente:</span>
                          <span className="text-slate-600"> Crio conteúdo com propósito e impacto positivo</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <div>
                          <span className="font-medium text-slate-800">Protagonista Digital:</span>
                          <span className="text-slate-600"> Participo ativamente da construção do futuro digital</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentSection === 3 && (
                <div className="space-y-6">
                  <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200/50">
                    <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <Leaf className="w-5 h-5 text-emerald-600" />
                      Os Pilares do Protagonismo Regenerativo
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-slate-800 mb-2">🌱 Consciência</h4>
                        <p className="text-sm text-slate-700">
                          Entender o impacto de suas ações digitais no mundo
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-slate-800 mb-2">🎯 Intenção</h4>
                        <p className="text-sm text-slate-700">
                          Definir propósitos claros para sua participação digital
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-slate-800 mb-2">🤝 Colaboração</h4>
                        <p className="text-sm text-slate-700">
                          Trabalhar junto com outros para criar valor coletivo
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-slate-800 mb-2">🔄 Regeneração</h4>
                        <p className="text-sm text-slate-700">
                          Criar sistemas que se renovam e fortalecem com o tempo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentSection === 4 && (
                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-xl p-6 border border-purple-200/50">
                    <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      Características do Aprendizado Descentralizado
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <span className="font-medium text-slate-800">Autonomia:</span>
                          <span className="text-slate-700"> Você define seu ritmo e caminho de aprendizado</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <span className="font-medium text-slate-800">Reciprocidade:</span>
                          <span className="text-slate-700"> Todos ensinam e aprendem simultaneamente</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <span className="font-medium text-slate-800">Prática:</span>
                          <span className="text-slate-700"> Aprendizado baseado em experiências reais</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <span className="font-medium text-slate-800">Comunidade:</span>
                          <span className="text-slate-700"> Suporte mútuo e construção coletiva</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() => setCurrentSection(Math.max(1, currentSection - 1))}
                disabled={currentSection === 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentSection === 1
                    ? 'text-slate-400 cursor-not-allowed'
                    : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                ← Anterior
              </button>
              
              <button
                onClick={() => setCurrentSection(Math.min(sections.length, currentSection + 1))}
                disabled={currentSection === sections.length}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                  currentSection === sections.length
                    ? 'text-slate-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Próximo <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Glocal - Ação Prática */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-blue-200/50">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Compass className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              🎯 Ação Prática: Definindo Sua Intenção
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Antes de avançar, é fundamental definir sua intenção para esta jornada. 
              Esta reflexão será a base de todo seu aprendizado.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <Book className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Reflita</h3>
                <p className="text-sm text-slate-600">
                  Pense profundamente sobre suas motivações e objetivos
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <FileText className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Escreva</h3>
                <p className="text-sm text-slate-600">
                  Documente suas reflexões de forma clara e honesta
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                <Send className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Compartilhe</h3>
                <p className="text-sm text-slate-600">
                  Envie seu report para desbloquear o próximo bloco
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200/50 mb-8">
              <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
                Perguntas Guia para sua Reflexão
              </h3>
              <div className="text-left space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Por que decidi explorar a Web3 e tecnologias descentralizadas?</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Que mudança quero ver no mundo digital?</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Como posso contribuir para um futuro digital mais regenerativo?</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Que habilidades quero desenvolver nesta jornada?</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-6">
              ⏱️ Tempo estimado: 15-20 minutos de reflexão profunda
            </p>

            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg">
              <Play className="w-5 h-5 mr-2 inline" />
              Fazer Minha Reflexão
            </button>
          </div>
        </div>
      </section>

      {/* Report Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-slate-200/50">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                📝 Report do Bloco 1
              </h2>
              <p className="text-lg text-slate-600">
                Compartilhe suas reflexões para desbloquear o próximo bloco
              </p>
            </div>

            {!reportSubmitted ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-800 font-medium mb-3">
                    🌟 Sua Reflexão sobre Protagonismo Regenerativo
                  </label>
                  <textarea
                    value={reportContent}
                    onChange={(e) => setReportContent(e.target.value)}
                    placeholder="Compartilhe suas reflexões sobre as perguntas guia acima. Seja honesto e autêntico - não há respostas certas ou erradas, apenas sua jornada única..."
                    className="w-full h-40 bg-white border border-slate-300 rounded-lg p-4 text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-800 font-medium mb-3">
                    🎯 Seu Perfil Exploratório
                  </label>
                  <p className="text-slate-600 text-sm mb-4">
                    Com base em suas reflexões, qual perfil melhor representa seu interesse na Web3?
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {[
                      { id: 'regenerativo', name: '🌱 Regenerativo', desc: 'Impacto ambiental e sustentabilidade' },
                      { id: 'comunitario', name: '🤝 Comunitário', desc: 'Desenvolvimento social e inclusão' },
                      { id: 'inovador', name: '💡 Inovador', desc: 'Tecnologia e soluções criativas' },
                      { id: 'estrategico', name: '🎯 Estratégico', desc: 'Governança e políticas públicas' },
                      { id: 'netweaver', name: '🌐 Netweaver', desc: 'Conecta perfis e comunidades' }
                    ].map((perfil) => (
                      <button
                        key={perfil.id}
                        type="button"
                        onClick={() => setPerfilSelecionado(perfil.id)}
                        className={`p-3 text-left border rounded-lg transition-all ${
                          perfilSelecionado === perfil.id
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-slate-300 hover:border-slate-400 text-slate-700'
                        }`}
                      >
                        <div className="font-medium text-sm">{perfil.name}</div>
                        <div className="text-xs opacity-75">{perfil.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-800 font-medium mb-3">
                    💭 Principal Insight ou Aprendizado
                  </label>
                  <textarea
                    value={reflection}
                    onChange={(e) => setReflection(e.target.value)}
                    placeholder="Qual foi seu principal insight ou aprendizado neste bloco? O que mais te marcou?"
                    className="w-full h-24 bg-white border border-slate-300 rounded-lg p-4 text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleReportSubmit}
                    disabled={!reportContent.trim() || !reflection.trim() || !perfilSelecionado}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                      reportContent.trim() && reflection.trim() && perfilSelecionado
                        ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl'
                        : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    <Send className="w-5 h-5" />
                    Enviar Report
                  </button>
                  <Link
                    to="/"
                    className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Salvar e Continuar Depois
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  🎉 Parabéns! Bloco 1 Concluído
                </h3>
                <p className="text-lg text-slate-600 mb-8">
                  Você plantou a primeira semente de sua transformação digital. 
                  Agora é hora de criar sua identidade na Web3!
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50 mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Award className="w-8 h-8 text-green-600" />
                    <span className="text-lg font-semibold text-slate-800">Conquista Desbloqueada</span>
                  </div>
                  <p className="text-slate-700 mb-2">🌱 Semente do Protagonismo</p>
                  <p className="text-sm text-slate-600">+100 XP • Primeiro passo na jornada regenerativa</p>
                </div>

                <Link
                  to="/trilha/bloco-2"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg hover:shadow-xl"
                >
                  <Play className="w-5 h-5" />
                  Continuar para Bloco 2: Identidade Digital
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bloco1;