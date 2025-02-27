import React, { useState, useEffect } from 'react';
import { useAppKit } from '@reown/appkit/react';
import { useAccount } from 'wagmi';
import { Logo } from '../Logo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faDollarSign, faInfoCircle, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'; // Import Link for internal routing

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { open } = useAppKit();
  const { address, isConnected } = useAccount();
  const [displayAddress, setDisplayAddress] = useState(null);

  useEffect(() => {
    if (isConnected && address) {
      setDisplayAddress(`${address.slice(0, 6)}...${address.slice(-4)}`);
    } else {
      setDisplayAddress(null);
    }
  }, [isConnected, address]);

  return (
<nav className="bg-800 text-black fixed bottom-0 w-full md:relative md:bottom-auto md:w-auto">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="hidden md:block">
      <div className="flex items-center">
            <Logo />
          </div>
      </div>
      <div className="hidden md:flex space-x-8 ml-10">
        <Link to="/" className="text-black-300 flex items-center">
          <FontAwesomeIcon icon={faBolt} />
          <span className="ml-2">Stake</span>
        </Link>
        <Link to="/mining" className="text-black-300  flex items-center">
          <FontAwesomeIcon icon={faDollarSign} />
          <span className="ml-2">Mining</span>
        </Link>
        <Link to="/withdrawal" className="text-black-300  flex items-center">
          <FontAwesomeIcon icon={faInfoCircle} />
          <span className="ml-2">Withdrawal</span>
        </Link>
        <Link to="/rewards" className="text-black-300  flex items-center">
          <FontAwesomeIcon icon={faTrophy} />
          <span className="ml-2">Rewards</span>
        </Link>
      </div>

      <div className="hidden md:flex space-x-4">
        {isConnected ? (
          <span className="font-bold text-white">{displayAddress}</span>
        ) : (
          <button
            onClick={() => open()}
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Connect Wallet
          </button>
        )}
      </div>

      <div className="-mr-2 flex md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="fixed bottom-0 left-0 w-full bg-white flex justify-around py-3 md:hidden">
    <Link to="/" className="text-black-300 hover:text-white flex flex-col items-center">
      <FontAwesomeIcon icon={faBolt} className="text-xl" />
      <span className="text-xs mt-1">Stake</span>
    </Link>
    <Link to="/mining" className="text-black-300 hover:text-white flex flex-col items-center">
      <FontAwesomeIcon icon={faDollarSign} className="text-xl" />
      <span className="text-xs mt-1">Wrap</span>
    </Link>
    <Link to="/withdrawal" className="text-black-300 hover:text-white flex flex-col items-center">
      <FontAwesomeIcon icon={faInfoCircle} className="text-xl" />
      <span className="text-xs mt-1">Withdrawal</span>
    </Link>
    <Link to="/rewards" className="text-black-300 hover:text-white flex flex-col items-center">
      <FontAwesomeIcon icon={faTrophy} className="text-xl" />
      <span className="text-xs mt-1">Rewards</span>
    </Link>
  </div>
</nav>

  );
};

export default Navbar;
