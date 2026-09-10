import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDesktop, FaNetworkWired, FaShieldAlt, FaServer, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Section = styled.section`padding: var(--spacing-3xl) 0; background: var(--bg-primary);`;
const Container = styled.div`max-width: 1200px; margin: 0 auto; padding: 0 var(--spacing-md); text-align: center;`;
const Title = styled.h2`font: 800 clamp(2rem, 4vw, 3rem) var(--font-secondary); color: var(--text-primary); margin-bottom: var(--spacing-md);`;
const Subtitle = styled.p`max-width: 700px; margin: 0 auto var(--spacing-2xl); color: var(--text-muted); font-size: 1.1rem;`;
const Architecture = styled(motion.div)`display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--spacing-md); align-items: stretch; @media(max-width: 800px){grid-template-columns: 1fr 1fr;} @media(max-width: 480px){grid-template-columns: 1fr;}`;
const Node = styled.div`padding: var(--spacing-xl); border: 1px solid var(--border-color); border-radius: var(--radius-xl); background: var(--bg-secondary); color: var(--text-secondary); svg { color: var(--accent-color); font-size: 1.8rem; margin-bottom: var(--spacing-md); } strong { display:block; color: var(--text-primary); margin-bottom: var(--spacing-sm); }`;
const Flow = styled.p`margin-top: var(--spacing-xl); padding: var(--spacing-lg); border-left: 3px solid var(--accent-color); background: var(--bg-secondary); color: var(--text-secondary); text-align: start; border-radius: 0 var(--radius-md) var(--radius-md) 0;`;

const SOCLab = () => {
  const { t } = useLanguage();
  const nodes = [[FaDesktop, t.endpoints, t.endpointDetail], [FaNetworkWired, t.telemetry, t.telemetryDetail], [FaServer, t.siem, t.siemDetail], [FaShieldAlt, t.firewall, t.firewallDetail]];
  return <Section id="soc-lab"><Container><Title>{t.labTitle}</Title><Subtitle>{t.labSubtitle}</Subtitle><Architecture initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}}>{nodes.map(([Icon,title,detail]) => <Node key={title}><Icon /><strong>{title}</strong><span>{detail}</span></Node>)}</Architecture><Flow><FaArrowRight aria-hidden="true" /> {t.labFlow}</Flow></Container></Section>;
};
export default SOCLab;
