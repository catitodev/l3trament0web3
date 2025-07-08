import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AgentesAI from './pages/AgentesAI';
import Automacoes from './pages/Automacoes';
import Agentics from './pages/Agentics';
import Webdesign from './pages/Webdesign';
import DaosWeb3 from './pages/LetramentoWeb3';
import GamificationDemo from './components/gamification/GamificationDemo';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="agentes-ai" element={<AgentesAI />} />
          <Route path="automacoes" element={<Automacoes />} />
          <Route path="agentics" element={<Agentics />} />
          <Route path="webdesign" element={<Webdesign />} />
          <Route path="daos-web3" element={<DaosWeb3 />} />
        </Route>
        
        {/* Rota temporária para testar gamificação */}
        <Route path="/gamification-demo" element={<GamificationDemo />} />
      </Routes>
    </Router>
  );
};

export default App;