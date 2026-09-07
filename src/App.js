import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';

// Context
import { ThemeContext } from './context/ThemeContext';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: all var(--transition-normal);
`;

const MainContent = styled.main`
  padding-top: 80px; /* Account for fixed header */
`;

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <AppContainer>
          <Helmet>
            <title>Basel Mostafa | SOC Analyst Candidate</title>
            <meta name="description" content="Basel Mostafa is a cybersecurity undergraduate focused on Blue Team operations, SOC incident response, and detection engineering." />
            <meta name="keywords" content="SOC Analyst, Blue Team, Cybersecurity, Detection Engineering, Elastic SIEM, MITRE ATT&CK, Basel Mostafa" />
            <meta name="author" content="Basel Mostafa" />
          </Helmet>

          <Header />
          <ThemeToggle />
          
          <MainContent>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Services />
                  <Projects />
                  <Contact />
                </>
              } />
            </Routes>
          </MainContent>

          <Footer />
          <ScrollToTop />
        </AppContainer>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App; 