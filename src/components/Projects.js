import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectsSection = styled.section`
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-3xl);
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: var(--spacing-sm) var(--spacing-lg);
  border: 1px solid var(--border-color);
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
  border-radius: var(--radius-lg);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);

  &.active {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
`;

const ProjectCard = styled(motion.div)`
  background-color: var(--bg-secondary);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all var(--transition-fast);
  animation: projectReveal 260ms ease both;

  @keyframes projectReveal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary-color);
  }
`;

const ProjectContent = styled.div`
  padding: var(--spacing-xl);
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  font-family: var(--font-secondary);
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
`;

const TechTag = styled.span`
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: var(--bg-tertiary);
  color: var(--text-muted);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

const ProjectButton = styled.a`
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border-color);
  background-color: transparent;
  color: var(--text-secondary);
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  transition: all var(--transition-fast);

  &:hover {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }
`;

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'soc', label: 'SOC' },
    { id: 'network', label: 'Network & Cybersecurity' }
  ];

  const projects = [
    {
      id: 1,
      title: "Detection Rules",
      description: "Elastic SIEM detection rules written against real telemetry, validated by reproducing each technique, and mapped to MITRE ATT&CK.",
      category: "soc",
      technologies: ["Elastic SIEM", "KQL", "MITRE ATT&CK", "Sysmon"],
      github: "https://github.com/basellmostaffa/detection-rules"
    },
    {
      id: 2,
      title: "Elastic SIEM Deployment",
      description: "An end-to-end home SOC build with Fleet-managed log ingestion across a Windows domain and a brute-force detection validated through attack reproduction.",
      category: "soc",
      technologies: ["Elastic", "Fleet", "Windows Server", "Active Directory"],
      github: "https://github.com/basellmostaffa/elastic-siem-deployment"
    },
    {
      id: 3,
      title: "Multi-Branch University Network",
      description: "A two-branch enterprise network in Cisco Packet Tracer using OSPF, VLANs, inter-VLAN routing, and ACL security.",
      category: "network",
      technologies: ["Cisco Packet Tracer", "OSPF", "VLANs", "ACLs"],
      github: "https://github.com/basellmostaffa/Multi-Branch-University"
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>My Projects</SectionTitle>
          <SectionSubtitle>
            Selected work from my GitHub profile, with the strongest focus on detection engineering,
            SOC lab building, and network security foundations.
          </SectionSubtitle>
        </SectionHeader>

        <FilterContainer>
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              className={activeFilter === filter.id ? 'active' : ''}
              onClick={() => setActiveFilter(filter.id)}
              whileTap={{ scale: 0.97 }}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid>
          {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                whileHover={{ y: -6 }}
              >
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>

                  <ProjectTech>
                    {project.technologies.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </ProjectTech>

                  <ProjectLinks>
                    <ProjectButton href={project.github} target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </ProjectButton>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 