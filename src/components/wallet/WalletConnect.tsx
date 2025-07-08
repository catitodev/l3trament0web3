import React, { useState } from 'react';
import { useWallet } from './WalletProvider';
import { Wallet, Zap, Shield, ChevronRight, Copy, Check, LogOut } from 'lucide-react';

const WalletConnect: React.FC = () => {
  const {
    tonWallet,
    tonConnected,
    connectTon,
    disconnectTon,
    metamaskWallet,
    metamaskConnected,
    connectMetamask,
    disconnectMetamask,
    isConnecting,
    error
  } = useWallet();

  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (tonConnected || metamaskConnected) {
    return (
      <div className="glass p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold gradient-text">Carteiras Conectadas</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Online</span>
          </div>
        </div>

        <div className="space-y-4">
          {/* TON Wallet */}
          {tonConnected && tonWallet && (
            <div className="glass-dark p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">TON Wallet</p>
                    <p className="text-sm text-gray-400">
                      {formatAddress(tonWallet.account?.address || '')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(tonWallet.account?.address || '', 'ton')}
                    className="p-2 hover:bg-glass-light rounded-lg transition-colors"
                  >
                    {copied === 'ton' ? (
                      <Check className="w-4 h-4 text-neon-green" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                  <button
                    onClick={disconnectTon}
                    className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-red-400"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* MetaMask */}
          {metamaskConnected && metamaskWallet && (
            <div className="glass-dark p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-orange to-neon-pink rounded-xl flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">MetaMask</p>
                    <p className="text-sm text-gray-400">
                      {formatAddress(metamaskWallet.address)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(metamaskWallet.address, 'metamask')}
                    className="p-2 hover:bg-glass-light rounded-lg transition-colors"
                  >
                    {copied === 'metamask' ? (
                      <Check className="w-4 h-4 text-neon-green" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                  <button
                    onClick={disconnectMetamask}
                    className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-red-400"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Rewards Section */}
        <div className="mt-6 p-4 glass-dark rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-neon-green to-neon-blue rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-white">Gotas Disponíveis</p>
                <p className="text-sm text-gray-400">Conecte-se ao gotas.social</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold gradient-text">1,250</p>
              <p className="text-xs text-gray-400">GOTAS</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass p-6 rounded-2xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold gradient-text mb-2">
          Conecte sua Carteira
        </h3>
        <p className="text-gray-400">
          Escolha sua carteira preferida para começar a jornada
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      <div className="space-y-4">
        {/* TON Wallet */}
        <button
          onClick={connectTon}
          disabled={isConnecting}
          className="wallet-btn w-full"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 text-left">
            <h4 className="font-medium text-white">TON Wallet</h4>
            <p className="text-sm text-gray-400">
              Conecte com TON Connect
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        {/* MetaMask */}
        <button
          onClick={connectMetamask}
          disabled={isConnecting}
          className="wallet-btn w-full"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-neon-orange to-neon-pink rounded-xl flex items-center justify-center">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 text-left">
            <h4 className="font-medium text-white">MetaMask</h4>
            <p className="text-sm text-gray-400">
              Conecte com sua extensão MetaMask
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {isConnecting && (
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-dark rounded-xl">
            <div className="w-4 h-4 border-2 border-neon-blue border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm text-gray-300">Conectando...</span>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 glass-dark rounded-xl">
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-neon-green" />
          <div>
            <p className="text-sm font-medium text-white">Seguro e Descentralizado</p>
            <p className="text-xs text-gray-400">
              Suas chaves privadas nunca saem do seu dispositivo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletConnect;