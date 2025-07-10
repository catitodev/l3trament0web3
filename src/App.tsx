import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WalletProvider } from './components/wallet/WalletProvider';
import Layout from './components/Layout';
import Home from './pages/Home';
import DigitalLiteracy from './pages/DigitalLiteracy';
import PublicGoods from './pages/PublicGoods';
import CommonsLife from './pages/CommonsLife';
import AbundantRelationships from './pages/AbundantRelationships';
import ReFi from './pages/ReFi';
import Journey from './pages/Journey';
import Community from './pages/Community';
import Impact from './pages/Impact';
import GamificationDemo from './components/gamification/GamificationDemo';
import Bloco1 from './pages/Bloco1';
import DAORegenerativa from './pages/DAORegenerativa';
import DAOsAtivas from './pages/DAOsAtivas';

const AppContent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="digital-literacy" element={<DigitalLiteracy />} />
          <Route path="public-goods" element={<PublicGoods />} />
          <Route path="commons-life" element={<CommonsLife />} />
          <Route path="abundant-relationships" element={<AbundantRelationships />} />
          <Route path="refi" element={<ReFi />} />
          <Route path="journey" element={<Journey />} />
          <Route path="community" element={<Community />} />
          <Route path="impact" element={<Impact />} />
          <Route path="trilha/bloco-1" element={<Bloco1 />} />
          <Route path="dao-regenerativa" element={<DAORegenerativa />} />
          <Route path="daos-ativas" element={<DAOsAtivas />} />
        </Route>
        
        {/* Rota para gamificação */}
        <Route path="/gamification-demo" element={<GamificationDemo />} />
      </Routes>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <WalletProvider>
      <AppContent />
    </WalletProvider>
  );
};

export default App;