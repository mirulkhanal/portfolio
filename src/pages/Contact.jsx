// src/pages/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.body};
  min-height: calc(100vh - 120px);
  display: flex;
  align-items: center;
`;

const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Illustration = styled.div`
  img {
    width: 100%;
    height: auto;
    .primary-color {
      fill: ${({ theme }) => theme.primary};
    }
  }
`;

const FormContainer = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ContactHeader = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.secondary};
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  font-size: 1rem;
  background: transparent;
  color: ${({ theme }) => theme.text};
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  font-size: 1rem;
  background: transparent;
  color: ${({ theme }) => theme.text};
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const FormMessage = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
  background: ${({ success, theme }) =>
    success ? theme.primary + '30' : theme.accent + '30'};
  color: ${({ success, theme }) => (success ? theme.primary : theme.accent)};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      setStatus({ success: false, message: 'Please enter a valid email' });
      return;
    }
    // Add your form submission logic here
    setStatus({ success: true, message: 'Message sent successfully!' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactContainer>
      <ContactWrapper>
        <Illustration>
          <img src='contact.svg' />
        </Illustration>

        <FormContainer>
          <ContactHeader>Get in Touch</ContactHeader>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                type='text'
                placeholder='Your Name'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type='email'
                placeholder='Your Email'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <TextArea
                placeholder='Your Message'
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </FormGroup>
            <SubmitButton type='submit'>Send Message</SubmitButton>
          </form>
        </FormContainer>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
