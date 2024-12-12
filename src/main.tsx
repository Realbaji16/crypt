import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppKitProvider } from './AppKitProvider'; // Import your AppKit provider

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppKitProvider>
        <App />
      </AppKitProvider>
    </Router>
  </React.StrictMode>
);
