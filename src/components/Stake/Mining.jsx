import React, { useState } from "react";
import { useAccount } from 'wagmi';
import { Detail } from "./Detail";
import Accordion from "./Accordion";
import Navbar from "./Navbar";
import TradingViewWidget from "./TradingWidget";

const Withdrawal = () => {
  const { address, isConnected } = useAccount();
  const [balance, setBalance] = useState(null);
  const [ethAmount, setEthAmount] = useState(0); // State to store the ETH input amount
  const [exchangeRate, setExchangeRate] = useState(2.68); // Initial exchange rate

  const handleInputChange = (value) => {
    setEthAmount(value);

    // Dynamically calculate exchange rate (example: multiply by 2 for demo purposes)
    const newRate = value * 2;
    setExchangeRate(newRate.toFixed(2)); // Update the exchange rate
  };

  return (
    <>
      <Navbar />
      <TradingViewWidget />
      <div className="bg-[#f5f5f5] min-h-screen flex justify-center items-center text-white py-16 px-4 md:px-0">
        <div className="w-full max-w-lg flex flex-col gap-10">
          <div>
            <h2 className="font-bold text-black text-2xl mx-auto w-fit">
             Mining
            </h2>
            <h3 className="font-medium text-black text-xs mx-auto w-fit text-[#b3b5b8] mt-1 mb-4">
              Mine and receive stETH while staking
            </h3>
            {isConnected && balance !== null && (
              <Dashboard address={address} balance={balance} />
            )}
            <div className="bg-white p-6 md:p-8 flex flex-col gap-6 rounded-xl">
              <NumberInput onChange={handleInputChange} /> {/* Pass the handler */}

              {/* Inner card */}
              <div className="flex gap-4">
                <div className="inn inn2 p-4 rounded-xl grid gap-6">
                  <div>
                    <p className="text-sm mt-[5px] mb-[10px]">
                      You can stake ETH in{' '}
                      <span className="text-[#00a3ff]">the DVV vault</span> to get
                      stETH rewards, gain points and help to decentralize the Lido
                      Protocol
                    </p>
                  </div>
                </div>
                <div className="inn inn2 p-4 rounded-xl grid gap-6">
                  <div>
                    <p className="text-sm mt-[5px] mb-[10px]">
                      You can stake ETH in{' '}
                      <span className="text-[#00a3ff]">the DVV vault</span> to get
                      stETH rewards, gain points and help to decentralize the Lido
                      Protocol
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="bg-[#00a3ff] text-[#f7fcff] p-4 rounded-xl text-sm font-bold"
                onClick={open}
              >
                Connect Wallet
              </button>

              <Detail title="You will receive" value="3434434.0 stETH" />
              <Detail title="Max transaction cost" value="1 ETH = 1 stETH" />
              <Detail title="Exchange rate" value={`$${exchangeRate}`} /> {/* Dynamic value */}
              <Detail title="Reward fee" value="10%" tooltip="asfasdf" />
            </div>
          </div>
          <Accordion />
        </div>
      </div>
    </>
  );
};

const NumberInput = ({ onChange }) => {
  return (
    <div className="relative flex items-center">
      <span className="bg-[#273852] absolute ml-2">
        <Icon name="eth" />
      </span>
      <input
        type="number"
        placeholder="ETH amount"
        min={0}
        className="w-full p-4 pl-10 rounded-xl bg-white text-black placeholder:text-black border border-[#46464d] focus-visible:border-[#838387] outline-none"
        onChange={(e) => onChange(Number(e.target.value))} // Call the handler with the input value
      />
      <button
        type="button"
        className="absolute right-4 text-black bg-[#00a3ff] opacity-80 p-3 rounded-xl text-xs"
      >
        MAX
      </button>
    </div>
  );
};

const Icon = ({ name }) => {
  // Your Icon component implementation
};

export default Withdrawal;
