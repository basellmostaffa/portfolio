import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: var(--bg-primary);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  transition: all var(--transition-normal);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 42px;
  height: 42px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: var(--text-secondary);
  font-weight: 500;
  transition: color var(--transition-fast);
  cursor: pointer;
  position: relative;

  &:hover {
    color: var(--primary-color);
  }

  &.active {
    color: var(--primary-color);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width var(--transition-fast);
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;

  &.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
`;

const MobileNavLink = styled.a`
  color: var(--text-secondary);
  font-weight: 500;
  padding: var(--spacing-sm) 0;
  transition: color var(--transition-fast);
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }

  &.active {
    color: var(--primary-color);
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'soc-lab', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        boxShadow: isScrolled ? 'var(--shadow-lg)' : 'none'
      }}
    >
      <Nav>
        <Logo
          onClick={() => scrollToSection('home')}
          role="button"
          aria-label="Go to home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/favicon.svg?v=3" alt="" />
        </Logo>

        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={activeSection === item.id ? 'active' : ''}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>

        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Nav>

      <MobileMenu className={isMobileMenuOpen ? 'open' : ''}>
        {navItems.map((item) => (
          <MobileNavLink
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={activeSection === item.id ? 'active' : ''}
          >
            {item.label}
          </MobileNavLink>
        ))}
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header; 
