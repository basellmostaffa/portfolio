import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--bg-primary);
  border-top: 1px solid var(--border-color);
  padding: var(--spacing-3xl) 0 var(--spacing-xl);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
`;

const FooterSection = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
  font-family: var(--font-secondary);
`;

const FooterText = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-md);
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const SocialLink = styled(motion.a)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all var(--transition-fast);
  border: 1px solid var(--border-color);

  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

const QuickLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const QuickLink = styled.li`
  margin-bottom: var(--spacing-sm);
`;

const QuickLinkA = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const FooterBottom = styled.div`
  border-top: 1px solid var(--border-color);
  padding-top: var(--spacing-xl);
  text-align: center;
`;

const Copyright = styled.p`
  color: var(--text-muted);
  font-size: 0.9rem;
  margin: 0;
`;

const HeartIcon = styled(FaHeart)`
  color: var(--error-color);
  margin: 0 var(--spacing-xs);
`;

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/basellmostaffa', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/baselmostafa/', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <FooterTitle>Basel Mostafa</FooterTitle>
            <FooterText>
              SOC Analyst candidate focused on Blue Team operations, detection engineering, and
              practical cybersecurity labs.
            </FooterText>
            <SocialLinks>
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <social.icon />
                </SocialLink>
              ))}
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <QuickLinks>
              {quickLinks.map((link) => (
                <QuickLink key={link.label}>
                  <QuickLinkA onClick={() => scrollToSection(link.href.substring(1))}>
                    {link.label}
                  </QuickLinkA>
                </QuickLink>
              ))}
            </QuickLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contact Info</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <span>📍</span>
                <span>Cairo, Egypt</span>
              </ContactItem>
              <ContactItem>
                <span>📧</span>
                <span>baselmostafa16@gmail.com</span>
              </ContactItem>
              <ContactItem>
                <span>📱</span>
                <span>01009474449</span>
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} Basel Mostafa. All rights reserved. 
            Made with <HeartIcon /> using React
          </Copyright>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 