import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { TonConnectUI } from '@tonconnect/ui-react';
import detectEthereumProvider from '@metamask/detect-provider';

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
  const [tonConnectUI] = useState(new TonConnectUI({
    manifestUrl: 'https://l3trament0web3.vercel.app/tonconnect-manifest.json',
    buttonRootId: 'ton-connect-button'
  }));

  // MetaMask State
  const [metamaskWallet, setMetamaskWallet] = useState<any>(null);
  const [metamaskConnected, setMetamaskConnected] = useState(false);
  
  // Common State
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // TON Wallet Functions
  const connectTon = async () => {
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

      const provider = await detectEthereumProvider();
      
      if (!provider) {
        throw new Error('MetaMask não encontrado. Por favor, instale a extensão.');
      }

      const ethereum = provider as any;
      
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
    // Check for existing TON connection
    const tonConnected = localStorage.getItem('tonWalletConnected');
    if (tonConnected && tonConnectUI.wallet) {
      setTonWallet(tonConnectUI.wallet);
      setTonConnected(true);
    }

    // Check for existing MetaMask connection
    const metamaskConnected = localStorage.getItem('metamaskWalletConnected');
    if (metamaskConnected) {
      connectMetamask();
    }

    // Listen for TON wallet changes
    const unsubscribe = tonConnectUI.onStatusChange(wallet => {
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
  }, []);

  // Listen for MetaMask account changes
  useEffect(() => {
    if (metamaskWallet?.provider) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnectMetamask();
        } else {
          setMetamaskWallet(prev => ({
            ...prev,
            address: accounts[0]
          }));
        }
      };

      metamaskWallet.provider.on('accountsChanged', handleAccountsChanged);
      
      return () => {
        metamaskWallet.provider.removeListener('accountsChanged', handleAccountsChanged);
      };
    }
  }, [metamaskWallet]);

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