import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook
import { NavLink } from './NavLink';
import { Logo } from '../Logo';
import { Button } from '../common/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the hook

  const handleConnectWallet = () => {
    navigate('/stake'); // Navigate to the /stake route
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/5 backdrop-blur-xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="#earning-steps">How It Works</NavLink>
            <NavLink href="#monthly-earnings">Earnings</NavLink>
            <NavLink href="#wallets">Wallets</NavLink>
            <NavLink href="#analytics">Analytics</NavLink>
          </nav>

          {/* Desktop Connect Button */}
          <div className="hidden md:block">
            <Button
              variant="connect"
              onClick={handleConnectWallet} // Add the click handler
              className="px-6 py-2.5 text-sm font-semibold bg-black text-white hover:bg-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6 text-gray-600" />
              ) : (
                <FaBars className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              <nav className="flex flex-col space-y-4">
                <NavLink href="#earning-steps">How It Works</NavLink>
                <NavLink href="#monthly-earnings">Earnings</NavLink>
                <NavLink href="#wallets">Wallets</NavLink>
                <NavLink href="#analytics">Analytics</NavLink>
              </nav>
              <div className="pt-4 border-t border-gray-100">
                <Button
                  variant="connect"
                  onClick={handleConnectWallet} // Add the click handler
                  className="w-full px-6 py-3 text-base font-semibold bg-black text-white hover:bg-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Connect Wallet
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
