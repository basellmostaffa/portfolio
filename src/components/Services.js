import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaShieldAlt, 
  FaBug,
  FaSearch,
  FaLock,
  FaNetworkWired,
  FaTerminal
} from 'react-icons/fa';

const ServicesSection = styled.section`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
`;

const ServiceCard = styled(motion.div)`
  background-color: var(--bg-primary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  text-align: center;
  transition: all var(--transition-fast);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transform: scaleX(0);
    transition: transform var(--transition-fast);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary-color);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  margin: 0 auto var(--spacing-lg);
  transition: all var(--transition-fast);

  ${ServiceCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  font-family: var(--font-secondary);
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  text-align: left;
  margin-top: var(--spacing-lg);
`;

const ServiceFeature = styled.li`
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-sm);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);

  &::before {
    content: '✓';
    color: var(--success-color);
    font-weight: bold;
  }
`;

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const services = [
    {
      title: "Detection Engineering",
      description: "Writing, testing, and tuning detections against real telemetry in an Elastic SIEM home lab.",
      icon: FaSearch,
      features: ["KQL Queries", "Sysmon Telemetry", "ATT&CK Mapping", "False-Positive Tuning"]
    },
    {
      title: "SOC Incident Response",
      description: "Practicing the investigation workflow from alert triage through phishing and malware analysis.",
      icon: FaShieldAlt,
      features: ["Alert Triage", "Phishing Analysis", "Sandbox Analysis", "Investigation Notes"]
    },
    {
      title: "Home SOC Lab",
      description: "Building the visibility layer across a Windows domain with Fleet-managed agents and Elastic SIEM.",
      icon: FaLock,
      features: ["Windows Server", "Active Directory", "Elastic Fleet", "Attack Validation"]
    },
    {
      title: "Network Security",
      description: "Applying CCNA networking foundations to design and secure small enterprise network topologies.",
      icon: FaNetworkWired,
      features: ["VLANs", "OSPF Routing", "ACLs", "Cisco Packet Tracer"]
    },
    {
      title: "Phishing & Malware Analysis",
      description: "Examining suspicious messages, URLs, attachments, and samples while documenting indicators and behavior.",
      icon: FaBug,
      features: ["SPF/DKIM/DMARC", "URL Analysis", "Attachment Analysis", "IOC Documentation"]
    },
    {
      title: "Security Automation & Scripting",
      description: "Using scripting fundamentals to make security investigations and lab tasks more repeatable.",
      icon: FaTerminal,
      features: ["Python Fundamentals", "PowerShell Basics", "CMD", "Git Workflows"]
    }
  ];

  return (
    <ServicesSection id="services" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>My Services</SectionTitle>
          <SectionSubtitle>
            The areas I am actively building through labs, training, and documented projects.
          </SectionSubtitle>
        </SectionHeader>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <ServiceIcon>
                <service.icon />
              </ServiceIcon>
              
              <ServiceTitle>{service.title}</ServiceTitle>
              
              <ServiceDescription>{service.description}</ServiceDescription>
              
              <ServiceFeatures>
                {service.features.map((feature, featureIndex) => (
                  <ServiceFeature key={featureIndex}>
                    {feature}
                  </ServiceFeature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services; 