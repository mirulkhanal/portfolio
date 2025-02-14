// src/pages/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactHeader = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 2rem;
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
      <ContactHeader>Contact Me</ContactHeader>
      {status && (
        <FormMessage success={status.success}>{status.message}</FormMessage>
      )}
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type='text'
            placeholder='Your Name'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
    </ContactContainer>
  );
};

export default Contact;
