import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = styled.section`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
`;

const ContactInfo = styled(motion.div)`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  padding: var(--spacing-lg);
  background-color: var(--bg-primary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  transition: all var(--transition-fast);

  &:hover {
    transform: translateX(10px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
  }
`;

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
`;

const ContactValue = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
`;

const ContactForm = styled(motion.form)`
  background-color: var(--bg-primary);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-lg);

  @media (max-width: 768px) {
    order: 1;
  }
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-lg);
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
`;

const FormInput = styled.input`
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &.error {
    border-color: var(--error-color);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &.error {
    border-color: var(--error-color);
  }
`;

const ErrorMessage = styled.span`
  color: var(--error-color);
  font-size: 0.8rem;
  margin-top: var(--spacing-xs);
  display: block;
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: var(--spacing-md) var(--spacing-xl);
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: var(--radius-lg);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: var(--success-color);
  color: white;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  text-align: center;
  margin-top: var(--spacing-lg);
`;

const SubmitErrorMessage = styled(SuccessMessage)`
  background-color: var(--error-color);
`;

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "baselmostafa16@gmail.com",
      link: "mailto:baselmostafa16@gmail.com"
    },
    {
      icon: FaPhone,
      label: "Mobile",
      value: "01009474449",
      link: "tel:01009474449"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/baselmostafa",
      link: "https://www.linkedin.com/in/baselmostafa/"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Cairo, Egypt",
      link: "#"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/basellmostaffa",
      link: "https://github.com/basellmostaffa"
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setIsSuccess(false);
    setSubmitError('');

    try {
      const response = await fetch('https://formspree.io/f/xrpgyolj', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Portfolio inquiry: ${formData.subject}`
        })
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Something went wrong. Please email me directly at baselmostafa16@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Get In Touch</SectionTitle>
          <SectionSubtitle>
            Open to conversations about SOC operations, detection engineering, cybersecurity projects, and collaboration.
          </SectionSubtitle>
        </SectionHeader>

        <ContactContent>
          <ContactInfo
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <ContactItem
                key={info.label}
                as="a"
                href={info.link}
                style={{ textDecoration: 'none' }}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <ContactIcon>
                  <info.icon />
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel>{info.label}</ContactLabel>
                  <ContactValue>{info.value}</ContactValue>
                </ContactDetails>
              </ContactItem>
            ))}
          </ContactInfo>

          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FormGroup>
              <FormLabel htmlFor="name">Name *</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? 'error' : ''}
                placeholder="Your name"
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">Email *</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'error' : ''}
                placeholder="your.email@example.com"
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="subject">Subject *</FormLabel>
              <FormInput
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={errors.subject ? 'error' : ''}
                placeholder="Project inquiry"
              />
              {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">Message *</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={errors.message ? 'error' : ''}
                placeholder="Tell me about your project..."
              />
              {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner" style={{ width: '20px', height: '20px', border: '2px solid transparent', borderTop: '2px solid white', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </SubmitButton>

            {isSuccess && (
              <SuccessMessage
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Your message was sent successfully. I will get back to you soon.
              </SuccessMessage>
            )}

            {submitError && (
              <SubmitErrorMessage
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {submitError}
              </SubmitErrorMessage>
            )}
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact; 