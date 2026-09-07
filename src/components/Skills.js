import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSearch, FaShieldAlt, FaBullseye, FaNetworkWired, FaServer, FaCode, FaArrowRight } from 'react-icons/fa';

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
  grid-template-columns: minmax(280px, 0.8fr) minmax(320px, 1.2fr);
  gap: var(--spacing-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Workflow = styled.div`
  display: grid;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
`;

const WorkflowStep = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-size: 0.9rem;

  svg {
    color: var(--accent-color);
  }
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

const WorkflowCard = styled(SkillCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const ToolList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-top: auto;
`;

const ToolTag = styled.span`
  padding: var(--spacing-xs) var(--spacing-sm);
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
`;

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skills = [
    {
      name: "Detection Engineering",
      description: "Turn endpoint telemetry into tested, explainable detections.",
      icon: FaSearch,
      color: "#0ea5e9",
      tools: ["Wazuh", "Elastic", "KQL", "Sysmon"]
    },
    {
      name: "SOC & Incident Response",
      description: "Triage alerts, investigate behavior, and document the finding.",
      icon: FaShieldAlt,
      color: "#14b8a6",
      tools: ["Alert triage", "IR notes", "IoCs", "Reporting"]
    },
    {
      name: "MITRE ATT&CK",
      description: "Map observed behavior to techniques and validate coverage.",
      icon: FaBullseye,
      color: "#f59e0b",
      tools: ["ATT&CK", "Attack validation", "IoC enrichment"]
    },
    {
      name: "Networking (CCNA)",
      description: "Understand the network context behind every suspicious event.",
      icon: FaNetworkWired,
      color: "#2563eb",
      tools: ["VLANs", "OSPF", "ACLs", "FortiGate"]
    },
    {
      name: "Systems & Infrastructure",
      description: "Build and operate the systems that generate useful security signals.",
      icon: FaServer,
      color: "#8b5cf6",
      tools: ["Windows Server", "AD", "Linux", "VMware"]
    },
    {
      name: "Web Development",
      description: "A supporting skill for clear security tooling and documentation.",
      icon: FaCode,
      color: "#64748b",
      tools: ["Python", "PowerShell", "Git", "JavaScript"]
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
          <SectionTitle>How I Work in a SOC</SectionTitle>
          <SectionSubtitle>
            My skills connect as an investigation loop: visibility creates evidence, evidence creates
            detections, and validation turns a rule into something a team can trust.
          </SectionSubtitle>
        </SectionHeader>

        <SkillsGrid>
          <WorkflowCard
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div>
              <SkillHeader>
                <SkillIcon><FaShieldAlt /></SkillIcon>
                <SkillInfo>
                  <SkillName>Signal to Story</SkillName>
                  <SkillLevel>My practical Blue Team workflow</SkillLevel>
                </SkillInfo>
              </SkillHeader>
              <Workflow>
                {['Collect telemetry', 'Triage the alert', 'Investigate behavior', 'Map the technique', 'Test the detection'].map((step) => (
                  <WorkflowStep key={step}><FaArrowRight />{step}</WorkflowStep>
                ))}
              </Workflow>
            </div>
          </WorkflowCard>

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

              <ToolList>
                {skill.tools.map((tool) => <ToolTag key={tool}>{tool}</ToolTag>)}
              </ToolList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 