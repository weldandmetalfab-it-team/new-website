import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/aboutus';

const AppContent = () => {
  const location = useLocation();

 
  const noHeaderFooterRoutes = [];
  const showHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Header />}

      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<About />} />
        
      </Routes>

      {showHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
