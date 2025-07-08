import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface WalletContextType {
  // TON Wallet
  tonWallet: any;
  tonConnected: boolean;
  connectTon: () => Promise<void>;
  disconnectTon: () => Promise<void>;
  
  // MetaMask
  metamaskWallet: any;
  metamaskConnected: boolean;
  connectMetamask: () => Promise<void>;
  disconnectMetamask: () => Promise<void>;
  
  // Common
  isConnecting: boolean;
  error: string | null;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  // TON Wallet State
  const [tonWallet, setTonWallet] = useState<any>(null);
  const [tonConnected, setTonConnected] = useState(false);
  const [tonConnectUI, setTonConnectUI] = useState<any>(null);

  // MetaMask State
  const [metamaskWallet, setMetamaskWallet] = useState<any>(null);
  const [metamaskConnected, setMetamaskConnected] = useState(false);
  
  // Common State
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize TON Connect UI safely
  useEffect(() => {
    const initTonConnect = async () => {
      try {
        const { TonConnectUI } = await import('@tonconnect/ui-react');
        const tonUI = new TonConnectUI({
          manifestUrl: 'https://l3trament0web3.vercel.app/tonconnect-manifest.json',
          buttonRootId: 'ton-connect-button'
        });
        setTonConnectUI(tonUI);
      } catch (err) {
        console.warn('TON Connect UI not available:', err);
      }
    };

    initTonConnect();
  }, []);

  // TON Wallet Functions
  const connectTon = async () => {
    if (!tonConnectUI) {
      setError('TON Connect não está disponível');
      return;
    }

    try {
      setIsConnecting(true);
      setError(null);
      
      const connectedWallet = await tonConnectUI.connectWallet();
      setTonWallet(connectedWallet);
      setTonConnected(true);
      
      // Store connection in localStorage
      localStorage.setItem('tonWalletConnected', 'true');
      
    } catch (err) {
      setError('Erro ao conectar TON Wallet');
      console.error('TON connection error:', err);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectTon = async () => {
    if (!tonConnectUI) return;

    try {
      await tonConnectUI.disconnect();
      setTonWallet(null);
      setTonConnected(false);
      localStorage.removeItem('tonWalletConnected');
    } catch (err) {
      setError('Erro ao desconectar TON Wallet');
      console.error('TON disconnection error:', err);
    }
  };

  // MetaMask Functions
  const connectMetamask = async () => {
    try {
      setIsConnecting(true);
      setError(null);

      // Check if MetaMask is available
      if (typeof window === 'undefined' || !window.ethereum) {
        throw new Error('MetaMask não encontrado. Por favor, instale a extensão.');
      }

      const ethereum = window.ethereum as any;
      
      // Request account access
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (accounts.length > 0) {
        setMetamaskWallet({
          address: accounts[0],
          provider: ethereum
        });
        setMetamaskConnected(true);
        
        // Store connection in localStorage
        localStorage.setItem('metamaskWalletConnected', 'true');
      }

    } catch (err: any) {
      setError(err.message || 'Erro ao conectar MetaMask');
      console.error('MetaMask connection error:', err);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectMetamask = async () => {
    try {
      setMetamaskWallet(null);
      setMetamaskConnected(false);
      localStorage.removeItem('metamaskWalletConnected');
    } catch (err) {
      setError('Erro ao desconectar MetaMask');
      console.error('MetaMask disconnection error:', err);
    }
  };

  // Initialize connections on mount
  useEffect(() => {
    // Check for existing connections only after component mounts
    if (typeof window === 'undefined') return;

    // Check for existing TON connection
    const tonConnectedStored = localStorage.getItem('tonWalletConnected');
    if (tonConnectedStored && tonConnectUI?.wallet) {
      setTonWallet(tonConnectUI.wallet);
      setTonConnected(true);
    }

    // Check for existing MetaMask connection
    const metamaskConnectedStored = localStorage.getItem('metamaskWalletConnected');
    if (metamaskConnectedStored && window.ethereum) {
      // Try to reconnect MetaMask silently
      window.ethereum.request({ method: 'eth_accounts' })
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            setMetamaskWallet({
              address: accounts[0],
              provider: window.ethereum
            });
            setMetamaskConnected(true);
          }
        })
        .catch(() => {
          // Silent fail - just don't auto-reconnect
        });
    }
  }, [tonConnectUI]);

  // Listen for TON wallet changes
  useEffect(() => {
    if (!tonConnectUI) return;

    const unsubscribe = tonConnectUI.onStatusChange((wallet: any) => {
      if (wallet) {
        setTonWallet(wallet);
        setTonConnected(true);
      } else {
        setTonWallet(null);
        setTonConnected(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [tonConnectUI]);

  // Listen for MetaMask account changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.ethereum) return;

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnectMetamask();
      } else {
        setMetamaskWallet((prev: any) => ({
          ...prev,
          address: accounts[0]
        }));
      }
    };

    const handleChainChanged = () => {
      // Reload page on chain change
      window.location.reload();
    };

    if (metamaskConnected) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
      
      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      };
    }
  }, [metamaskConnected]);

  const value: WalletContextType = {
    // TON
    tonWallet,
    tonConnected,
    connectTon,
    disconnectTon,
    
    // MetaMask
    metamaskWallet,
    metamaskConnected,
    connectMetamask,
    disconnectMetamask,
    
    // Common
    isConnecting,
    error
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};

// Extend window interface for MetaMask
declare global {
  interface Window {
    ethereum?: any;
  }
}