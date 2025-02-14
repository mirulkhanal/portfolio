// src/components/testimonials/Testimonials.js
import React from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';

const TestimonialsContainer = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background: ${({ theme }) => theme.body};
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid ${({ theme }) => theme.primary + '20'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const TestimonialContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
  color: ${({ theme }) => theme.text + 'cc'};
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorDetails = styled.div`
  flex: 1;
`;

const AuthorName = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.primary};
`;

const AuthorRole = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text + 'aa'};
`;

const LinkedInLink = styled.a`
  color: ${({ theme }) => theme.text};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Shashank Adhikari',
      role: 'CEO at TechTemple IT Solutions',
      text: 'Mirul demonstrated exceptional technical skills and leadership during his time with us. His ability to handle full-stack development while managing client relationships was invaluable to our projects.',
      image: '/testimonials/shashank.jpg',
      linkedin: 'https://linkedin.com/in/shashank-adhikari',
    },
    {
      name: 'Mark Fox',
      role: 'Professor at Latrobe University',
      text: 'Mirul showed remarkable aptitude in software development during his studies. His project work consistently exceeded expectations and showed deep understanding of complex concepts.',
      image: '/testimonials/mark.jpg',
      linkedin: 'https://linkedin.com/in/mark-fox',
    },
    {
      name: 'John Doe',
      role: 'Client at Bhumidev Furniture',
      text: 'The e-commerce platform developed by Mirul helped us increase online sales by 300%. His attention to detail and communication throughout the project was outstanding.',
      image: '/testimonials/john.jpg',
      linkedin: 'https://linkedin.com/in/john-doe',
    },
  ];

  return (
    <TestimonialsContainer>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Testimonials
      </h2>
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <TestimonialContent>"{testimonial.text}"</TestimonialContent>
            <AuthorInfo>
              <AuthorImage src={testimonial.image} alt={testimonial.name} />
              <AuthorDetails>
                <AuthorName>{testimonial.name}</AuthorName>
                <AuthorRole>{testimonial.role}</AuthorRole>
              </AuthorDetails>
              <LinkedInLink
                href={testimonial.linkedin}
                target='_blank'
                rel='noopener noreferrer'>
                <FaLinkedin size={24} />
              </LinkedInLink>
            </AuthorInfo>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
};

export default Testimonials;
