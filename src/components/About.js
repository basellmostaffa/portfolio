import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const HighlightText = styled.span`
  color: var(--primary-color);
  font-weight: 600;
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

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
  width: 100%;
  max-width: 360px;
`;

const ImageCard = styled(motion.div)`
  background-color: var(--logo-surface);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
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
  height: 155px;
  padding: var(--spacing-lg);
  object-fit: contain;
  filter: var(--logo-filter);
  mix-blend-mode: var(--logo-blend-mode);
  transition: filter var(--transition-normal);
`;

const ImageOverlay = styled.div`
  background-color: var(--bg-tertiary);
  color: var(--text-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
`;

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    { number: "600+", label: "Users Supported" },
    { number: "20+", label: "Workstations Deployed" },
    { number: "4", label: "Malware Reports" },
    { number: "2027", label: "Expected Graduation" }
  ];

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
          <SectionTitle>About Me</SectionTitle>
          <SectionSubtitle>
              Cybersecurity undergraduate, SOC Analyst candidate, and IT Support &amp; System Administration
              Intern building practical experience across security operations and live IT environments.
          </SectionSubtitle>
        </SectionHeader>

        <AboutContent>
          <AboutText
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AboutDescription>
              I'm a <HighlightText>cybersecurity undergraduate</HighlightText> at Arab Open University building
              a practical path into <HighlightText>Blue Team security operations</HighlightText>. My foundation
              includes the <HighlightText>CCNA curriculum</HighlightText>, Windows Server, Active Directory,
              and Linux administration.
            </AboutDescription>
            
            <AboutDescription>
              In my home SOC lab, I build visibility with <HighlightText>Sysmon and Elastic SIEM</HighlightText>,
              write and tune detection rules, reproduce techniques to validate coverage, and map findings to
              <HighlightText>MITRE ATT&amp;CK</HighlightText>.
            </AboutDescription>

            <AboutDescription>
              I am currently a <HighlightText>Cyber Security Incident Response Analyst Trainee at DEPI</HighlightText>,
              covering network and OS fundamentals, security and attack techniques, incident response,
              digital forensics, and SIEM/SOC operations. I was selected as group leader for a five-member capstone team.
            </AboutDescription>

            <AboutDescription>
              Alongside DEPI, I work as an <HighlightText>IT Support &amp; System Administration Intern at Pinnacle Misr</HighlightText>,
              supporting 600+ users across two Cairo offices and a Saudi branch. I deploy workstations, troubleshoot
              endpoints and IP phones, assist with Active Directory, and work with switches, routers, and the perimeter firewall.
            </AboutDescription>

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
            <ImageGrid>
              {organizations.map((org, index) => (
                <ImageCard
                  key={org.name}
                  whileHover={{ scale: 1.05 }}
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
                    height: '150px', 
                    backgroundColor: 'var(--bg-tertiary)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem'
                  }}>
                    🏢
                  </div>
                  <ImageOverlay>{org.name}</ImageOverlay>
                </ImageCard>
              ))}
            </ImageGrid>
          </AboutImage>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About; 