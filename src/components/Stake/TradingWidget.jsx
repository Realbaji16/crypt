import React, { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    const widgetContainer = document.getElementById('tradingview-widget');
    
    // Clear the widget container to prevent duplicates
    if (widgetContainer) {
      widgetContainer.innerHTML = '';
    }

    // Append the TradingView script to the DOM
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500 Index" },
        { "proName": "FOREXCOM:NSXUSD", "title": "US 100 Cash CFD" },
        { "proName": "FX_IDC:EURUSD", "title": "EUR to USD" },
        { "proName": "BITSTAMP:BTCUSD", "title": "Bitcoin" },
        { "proName": "BITSTAMP:ETHUSD", "title": "Ethereum" }
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "displayMode": "compact",
      "colorTheme": "light",
      "locale": "en"
    });
    widgetContainer.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview-widget" className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewWidget;
