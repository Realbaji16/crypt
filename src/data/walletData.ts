import { 
  FaWallet, 
  FaLock, 
  FaShieldAlt, 
  FaKey, 
  FaCube, 
  FaRocket, 
  FaFingerprint, 
  FaUserShield 
} from 'react-icons/fa';

export const walletData = [
  {
    name: "MetaMask",
    icon: FaFingerprint,
    description: "The most popular Ethereum wallet with seamless DApp integration"
  },
  {
    name: "Trust Wallet",
    icon: FaShieldAlt,
    description: "Secure multi-chain crypto wallet for all your digital assets"
  },
  {
    name: "Coinbase Wallet",
    icon: FaCube,
    description: "The official wallet of Coinbase with built-in exchange features"
  },
  {
    name: "WalletConnect",
    icon: FaKey,
    description: "Connect with multiple wallets using QR code scanning"
  },
  {
    name: "Ledger",
    icon: FaLock,
    description: "Hardware wallet integration for maximum security"
  },
  {
    name: "Trezor",
    icon: FaUserShield,
    description: "Advanced hardware wallet with multi-signature support"
  },
  {
    name: "Phantom",
    icon: FaRocket,
    description: "Solana's most popular wallet with NFT support"
  },
  {
    name: "Rainbow",
    icon: FaWallet,
    description: "User-friendly Ethereum wallet with beautiful interface"
  }
];