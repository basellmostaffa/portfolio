import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  position: relative;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-xl);
  }
`;

const HeroContent = styled(motion.div)`
  z-index: 2;
`;

const Greeting = styled(motion.h1)`
  font-size: 1.2rem;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  font-family: var(--font-secondary);
`;

const Name = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  font-family: var(--font-secondary);
  line-height: 1.1;
`;

const Title = styled(motion.h3)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  font-weight: 600;
  font-family: var(--font-secondary);
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: var(--spacing-xl);
  line-height: 1.7;
  max-width: 500px;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  margin-bottom: var(--spacing-xl);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 var(--spacing-xl) var(--spacing-sm);
  transition: all var(--transition-fast);

  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const StoryNote = styled(motion.p)`
  color: var(--text-secondary);
  border-left: 3px solid var(--accent-color);
  padding-left: var(--spacing-md);
  margin: 0 0 var(--spacing-xl);
  max-width: 540px;
  line-height: 1.7;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--bg-tertiary);
  color: var(--text-secondary);
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

const HeroImage = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-xl);

  &::before {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: var(--bg-primary);
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const ProfileImage = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 50%;
  object-fit: cover;
  z-index: 2;
  position: relative;
  border: 4px solid var(--border-color);
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, var(--primary-color) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, var(--secondary-color) 0%, transparent 50%);
  opacity: 0.1;
  z-index: 1;
`;


const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "SOC Analyst Candidate | Blue Team | Detection Engineering";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/basellmostaffa', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/baselmostafa/', label: 'LinkedIn' },
    // { icon: FaTwitter, url: 'https://twitter.com/lilnouby', label: 'Twitter' },
    // { icon: FaInstagram, url: 'https://www.instagram.com/basellmostaffa/', label: 'Instagram' },
    // { icon: FaFacebook, url: 'https://www.facebook.com/basellmostafaa/', label: 'Facebook' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <BackgroundDecoration />

      <HeroContainer>
        <HeroContent>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            👋 Hello, I'm
          </Greeting>
          
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Basel Mostafa
          </Name>
          
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {text}
            <span style={{ color: 'var(--primary-color)' }}>|</span>
          </Title>
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I am a cybersecurity student building a practical path into Blue Team operations.
            My work connects the real-world discipline of supporting 600+ users with the investigative
            mindset of a SOC analyst: collect the evidence, understand the behavior, and test the detection.
          </Description>

          <StoryNote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            From imaging endpoints and troubleshooting networks at Pinnacle Misr, to building a
            multi-VM SOC lab with Wazuh, Elastic, and FortiGate, I document the full path from signal to story.
          </StoryNote>
          
          <CTAButton
            onClick={() => scrollToSection('projects')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </CTAButton>

          <SecondaryButton
            href="/Basel_Mostafa_Ibrahim_CV.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <FaDownload />
            Download CV
          </SecondaryButton>
          
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
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
                transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
              >
                <social.icon />
              </SocialLink>
            ))}
          </SocialLinks>
        </HeroContent>

        <HeroImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ImageContainer>
            <ProfileImage 
              src="/images/profile-image.jpg" 
              alt="Basel Mostafa"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div style={{ 
              display: 'none', 
              position: 'absolute', 
              zIndex: 2, 
              fontSize: '4rem',
              color: 'var(--primary-color)'
            }}>
              👨‍💻
            </div>
          </ImageContainer>
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero; 