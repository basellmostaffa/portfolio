import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';

const Button = styled.button`
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  padding: 0.45rem 0.7rem;
  font-weight: 700;
  background: var(--bg-secondary);
  &:hover { border-color: var(--primary-color); color: var(--primary-color); }
`;

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  return <Button onClick={toggleLanguage} aria-label="Switch website language">{language === 'en' ? 'العربية' : 'English'}</Button>;
};

export default LanguageToggle;
