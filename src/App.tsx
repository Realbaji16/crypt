import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ChatWidget } from './components/Chat/ChatWidget';
import Stake from './components/Stake/Stake';
import { Hero } from './components/Hero/Hero';
import { EarningStepsSection } from './sections/EarningStepsSection';
import { MonthlyEarningsSection } from './sections/MonthlyEarningsSection';
import { AnalyticsSection } from './sections/AnalyticsSection';
import { SupportedWalletsSection } from './sections/SupportedWalletsSection';
import { TrustpilotSection } from './sections/TrustpilotSection';
import Withdrawal from './components/Stake/Withdrawal';
import Rewards from './components/Stake/Rewards';
import Mining from './components/Stake/Mining';

// Home layout with Header, Footer, and ChatWidget
const HomeLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
    <ChatWidget />
  </>
);

// HomePage Component
const HomePage = () => (
  <HomeLayout>
    <Hero />
    <EarningStepsSection />
    <MonthlyEarningsSection />
    <SupportedWalletsSection />
    <AnalyticsSection />
    <TrustpilotSection />
  </HomeLayout>
);

// App Component without <Router>
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stake" element={<Stake />} />
      <Route path="/withdrawal" element={<Withdrawal />} />
      <Route path="/mining" element={<Mining />} />
      <Route path="/rewards" element={<Rewards />} />
    </Routes>
  );
};

export default App;
