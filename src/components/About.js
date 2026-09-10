import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const AboutSection = styled.section`
  padding: var(--spacing-3xl) 0;
  background-color: var(--bg-secondary);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: var(--spacing-3xl);
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  font-family: var(--font-secondary);
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
`;

const AboutText = styled(motion.div)`
  max-width: 600px;
`;

const AboutDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-lg);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
`;

const StatCard = styled(motion.div)`
  background-color: var(--bg-tertiary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  text-align: center;
  border: 1px solid var(--border-color);
  transition: all var(--transition-fast);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 500;
`;

const AboutImage = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExperiencePanel = styled.div`
  width: 100%;
  max-width: 430px;
  padding: var(--spacing-lg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  background: var(--bg-primary);
`;

const ExperienceHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
  font-weight: 700;

  span {
    color: var(--success-color);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
  width: 100%;
`;

const ImageCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 96px 1fr;
  align-items: center;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border-color);
  isolation: isolate;
  transition: all var(--transition-fast);

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-lg);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 92px;
  padding: var(--spacing-md);
  object-fit: contain;
  filter: var(--logo-filter);
  mix-blend-mode: var(--logo-blend-mode);
  transition: filter var(--transition-normal);
`;

const ImageOverlay = styled.div`
  color: var(--text-primary);
  padding: var(--spacing-md);
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
`;

const About = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = ["600+", "20+", "4", "2027"].map((number, index) => ({ number, label: t.stats[index] }));

  const organizations = [
    { name: "Pinnacle Misr", image: "/images/pinnacle-misr.jpg" },
    { name: "DEPI", image: "/images/depi-logo.jpg" }
  ];

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>{t.aboutTitle}</SectionTitle>
          <SectionSubtitle>
              {t.aboutSubtitle}
          </SectionSubtitle>
        </SectionHeader>

        <AboutContent>
          <AboutText
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.aboutParagraphs.map((paragraph) => <AboutDescription key={paragraph}>{paragraph}</AboutDescription>)}

            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </AboutText>

          <AboutImage
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ExperiencePanel>
              <ExperienceHeading>
                {t.currentExperience}
                <span>{t.active}</span>
              </ExperienceHeading>
              <ImageGrid>
                {organizations.map((org, index) => (
                  <ImageCard
                    key={org.name}
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Image 
                      src={org.image} 
                      alt={org.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '92px', 
                      backgroundColor: 'var(--bg-tertiary)',
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}>
                      ?
                    </div>
                    <ImageOverlay>{org.name}</ImageOverlay>
                  </ImageCard>
                ))}
              </ImageGrid>
            </ExperiencePanel>
          </AboutImage>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About; 
