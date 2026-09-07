import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSearch, FaShieldAlt, FaBullseye, FaNetworkWired, FaServer, FaCode } from 'react-icons/fa';

const SkillsSection = styled.section`
  padding: var(--spacing-3xl) 0;
  background-color: var(--bg-primary);
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
`;

const SkillCard = styled(motion.div)`
  background-color: var(--bg-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  transition: all var(--transition-fast);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
`;

const SkillIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
`;

const SkillLevel = styled.p`
  font-size: 0.9rem;
  color: var(--text-muted);
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: var(--bg-tertiary);
  border-radius: var(--radius-sm);
  overflow: hidden;
  margin-bottom: var(--spacing-sm);
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: var(--radius-sm);
  transform-origin: left;
`;

const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: var(--text-muted);
`;

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skills = [
    {
      name: "Detection Engineering",
      level: 75,
      description: "Elastic SIEM, KQL, Sysmon telemetry, rule validation, false-positive tuning",
      icon: FaSearch,
      color: "#0ea5e9"
    },
    {
      name: "SOC & Incident Response",
      level: 70,
      description: "Alert triage, phishing analysis, SPF/DKIM/DMARC, sandbox analysis",
      icon: FaShieldAlt,
      color: "#14b8a6"
    },
    {
      name: "MITRE ATT&CK",
      level: 70,
      description: "Technique mapping, attack reproduction, indicators, detection coverage",
      icon: FaBullseye,
      color: "#f59e0b"
    },
    {
      name: "Networking (CCNA)",
      level: 65,
      description: "TCP/IP, VLANs, OSPF, ACLs, subnetting, Cisco Packet Tracer",
      icon: FaNetworkWired,
      color: "#2563eb"
    },
    {
      name: "Systems & Infrastructure",
      level: 70,
      description: "Windows Server 2022, Active Directory, Fleet-managed agents, Linux",
      icon: FaServer,
      color: "#8b5cf6"
    },
    {
      name: "Web Development",
      level: 60,
      description: "HTML, CSS, JavaScript, Bootstrap, responsive interfaces",
      icon: FaCode,
      color: "#64748b"
    }
  ];

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>My Skills</SectionTitle>
          <SectionSubtitle>
            A practical toolbox for investigating activity, building visibility, and turning telemetry
            into detections that can be tested and trusted.
          </SectionSubtitle>
        </SectionHeader>

        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <SkillHeader>
                <SkillIcon style={{ background: `linear-gradient(135deg, ${skill.color}, var(--secondary-color))` }}>
                  <skill.icon />
                </SkillIcon>
                <SkillInfo>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel>{skill.description}</SkillLevel>
                </SkillInfo>
              </SkillHeader>

              <ProgressContainer>
                <ProgressBar
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: skill.level / 100 } : { scaleX: 0 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </ProgressContainer>

              <ProgressText>
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </ProgressText>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 