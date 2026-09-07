import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaTerminal, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const ConsoleSection = styled.section`
  padding: var(--spacing-3xl) 0;
  background-color: var(--bg-secondary);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

const ConsoleWindow = styled(motion.div)`
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--bg-primary);
  box-shadow: var(--shadow-xl);
`;

const ConsoleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--bg-tertiary);
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const WindowTitle = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--text-primary);
  font-family: monospace;
  font-size: 0.85rem;

  svg {
    color: var(--accent-color);
  }
`;

const Status = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--success-color);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.14);
  }
`;

const ConsoleBody = styled.div`
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: var(--spacing-xl);
  padding: var(--spacing-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: var(--spacing-lg);
  }
`;

const Identity = styled.div`
  padding-right: var(--spacing-xl);
  border-right: 1px solid var(--border-color);

  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: var(--spacing-lg);
    border-right: 0;
    border-bottom: 1px solid var(--border-color);
  }
`;

const Eyebrow = styled.p`
  margin-bottom: var(--spacing-sm);
  color: var(--accent-color);
  font-family: monospace;
  font-size: 0.78rem;
  text-transform: uppercase;
`;

const ConsoleTitle = styled.h2`
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
  font-family: var(--font-secondary);
  font-size: clamp(1.6rem, 3vw, 2.35rem);
  line-height: 1.15;
`;

const ConsoleCopy = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
`;

const ProfileMeta = styled.div`
  display: grid;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
`;

const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px dashed var(--border-color);
  color: var(--text-muted);
  font-size: 0.85rem;

  strong {
    color: var(--text-secondary);
    font-weight: 600;
    text-align: right;
  }
`;

const Operations = styled.div``;

const OperationsHeading = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  color: var(--text-primary);
  font-weight: 700;

  svg {
    color: var(--primary-color);
  }
`;

const Workflow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--spacing-sm);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const WorkflowStep = styled.div`
  min-height: 105px;
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background: var(--bg-secondary);
  color: var(--text-secondary);
  font-size: 0.82rem;

  span {
    display: block;
    margin-bottom: var(--spacing-md);
    color: var(--accent-color);
    font-family: monospace;
    font-size: 0.72rem;
  }

  strong {
    display: block;
    color: var(--text-primary);
    font-size: 0.9rem;
  }
`;

const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
`;

const Tool = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  font-size: 0.78rem;

  svg {
    color: var(--success-color);
    font-size: 0.7rem;
  }
`;

const SOCConsole = () => (
  <ConsoleSection aria-label="SOC analyst console">
    <Container>
      <ConsoleWindow
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <ConsoleHeader>
          <WindowTitle><FaTerminal /> soc-analyst-console / profile</WindowTitle>
          <Status>Profile operational</Status>
        </ConsoleHeader>

        <ConsoleBody>
          <Identity>
            <Eyebrow>Analyst profile</Eyebrow>
            <ConsoleTitle>Built to turn signals into clear security decisions.</ConsoleTitle>
            <ConsoleCopy>
              A practical Blue Team profile shaped by live IT support, incident-response training,
              and a home SOC lab where detections are tested against real telemetry.
            </ConsoleCopy>
            <ProfileMeta>
              <MetaRow><span>role</span><strong>SOC Analyst Candidate</strong></MetaRow>
              <MetaRow><span>focus</span><strong>Detection Engineering</strong></MetaRow>
              <MetaRow><span>environment</span><strong>Home SOC Lab</strong></MetaRow>
            </ProfileMeta>
          </Identity>

          <Operations>
            <OperationsHeading><FaShieldAlt /> Investigation workflow</OperationsHeading>
            <Workflow>
              {['Collect', 'Triage', 'Investigate', 'Map', 'Validate'].map((step, index) => (
                <WorkflowStep key={step}>
                  <span>0{index + 1}</span>
                  <strong>{step}</strong>
                  {index < 4 && <FaArrowRight aria-hidden="true" />}
                </WorkflowStep>
              ))}
            </Workflow>
            <Tools>
              {['Wazuh', 'Elastic SIEM', 'Sysmon', 'MITRE ATT&CK', 'FortiGate'].map((tool) => (
                <Tool key={tool}><FaCheckCircle />{tool}</Tool>
              ))}
            </Tools>
          </Operations>
        </ConsoleBody>
      </ConsoleWindow>
    </Container>
  </ConsoleSection>
);

export default SOCConsole;
