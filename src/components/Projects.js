import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

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
  grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
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

  @media (max-width: 600px) {
    padding: var(--spacing-lg);
  }
`;

const ProjectVisual = styled.div`
  height: 210px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0b1324, #102c3d);
  border-bottom: 1px solid var(--border-color);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    height: 180px;
  }
`;

const GalleryThumbs = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  overflow-x: auto;
`;

const GalleryThumb = styled.button`
  width: 56px;
  height: 40px;
  flex: 0 0 auto;
  padding: 0;
  overflow: hidden;
  border: 2px solid ${({ $active }) => ($active ? 'var(--primary-color)' : 'var(--border-color)')};
  border-radius: var(--radius-sm);
  opacity: ${({ $active }) => ($active ? 1 : 0.65)};
  transition: all var(--transition-fast);

  &:hover {
    opacity: 1;
    border-color: var(--primary-color);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Evidence = styled.div`
  position: absolute;
  inset: 0;
  padding: var(--spacing-lg);
  color: #7dd3fc;
  font-family: monospace;
  font-size: 0.82rem;
  line-height: 1.8;
  background: repeating-linear-gradient(0deg, rgba(125, 211, 252, 0.04) 0 1px, transparent 1px 5px);

  span {
    color: #86efac;
  }
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

const ProjectGallery = ({ project }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [showEvidence, setShowEvidence] = useState(false);
  const images = project.images || [project.image];

  return (
    <>
      <ProjectVisual>
        <img
          src={images[activeImage]}
          alt={`${project.title} screenshot ${activeImage + 1}`}
          loading="lazy"
          onLoad={() => setShowEvidence(false)}
          onError={(event) => {
            event.currentTarget.style.display = 'none';
            setShowEvidence(true);
          }}
        />
        {showEvidence && (
          <Evidence>
            {project.evidence.map((line) => <div key={line}>&gt; <span>{line}</span></div>)}
          </Evidence>
        )}
      </ProjectVisual>

      {images.length > 1 && (
        <GalleryThumbs aria-label={`${project.title} screenshots`}>
          {images.map((image, index) => (
            <GalleryThumb
              key={image}
              type="button"
              $active={activeImage === index}
              onClick={() => setActiveImage(index)}
              aria-label={`Show screenshot ${index + 1}`}
            >
              <img
                src={image}
                alt=""
                loading="lazy"
                onError={(event) => { event.currentTarget.style.display = 'none'; }}
              />
            </GalleryThumb>
          ))}
        </GalleryThumbs>
      )}
    </>
  );
};

const Projects = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'soc', 'network'].map((id, index) => ({ id, label: t.projectFilter[index] }));

  const projects = [
    {
      id: 1,
      title: "Detection Rules",
      description: "Elastic SIEM detection rules written against real telemetry, validated by reproducing each technique, and mapped to MITRE ATT&CK.",
      category: "soc",
      technologies: ["Elastic SIEM", "KQL", "MITRE ATT&CK", "Sysmon"],
      images: [
        "/Detection%20Rules/rule-01-alert.png.png",
        "/Detection%20Rules/rule-01-config.png",
        "/Detection%20Rules/rule-01-trigger.png",
        "/Detection%20Rules/rule-02-alert.png.png",
        "/Detection%20Rules/rule-02-config.png",
        "/Detection%20Rules/rule-02-trigger.png"
      ],
      evidence: ["rule.status: validated", "event.code: 4625", "coverage: ATT&CK"],
      github: "https://github.com/basellmostaffa/detection-rules"
    },
    {
      id: 2,
      title: "Elastic SIEM Deployment",
      description: "An end-to-end home SOC build with Fleet-managed log ingestion across a Windows domain and a brute-force detection validated through attack reproduction.",
      category: "soc",
      technologies: ["Elastic", "Fleet", "Windows Server", "Active Directory"],
      images: [
        "/SIEM%20Deployement/Deployment%20Documentation/detection-alert.jpg",
        "/SIEM%20Deployement/Deployment%20Documentation/discover-events.jpg",
        "/SIEM%20Deployement/Deployment%20Documentation/fleet-agents.png",
        "/SIEM%20Deployement/Deployment%20Documentation/service-status.png"
      ],
      evidence: ["agents: 5 endpoints", "gateway: FortiGate", "pipeline: healthy"],
      github: "https://github.com/basellmostaffa/elastic-siem-deployment"
    },
    {
      id: 3,
      title: "Multi-Branch University Network",
      description: "A two-branch enterprise network in Cisco Packet Tracer using OSPF, VLANs, inter-VLAN routing, and ACL security.",
      category: "network",
      technologies: ["Cisco Packet Tracer", "OSPF", "VLANs", "ACLs"],
      images: [
        "/Multi-Branch%20Network/topolgy.png",
        "/Multi-Branch%20Network/ping-test.png"
      ],
      evidence: ["branches: 2", "routing: OSPF", "access: hardened"],
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
          <SectionTitle>{t.projectsTitle}</SectionTitle>
          <SectionSubtitle>
            {t.projectsSubtitle}
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
                <ProjectGallery project={project} />
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
                      {t.viewGithub}
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
