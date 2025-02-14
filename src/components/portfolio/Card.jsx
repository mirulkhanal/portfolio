// src/components/portfolio/Card.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  background: ${({ theme }) => theme.background};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  margin: 1rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const CardButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const Card = ({ repo, btnTitle }) => {
  const { name, description, html_url, image } = repo;

  return (
    <CardContainer>
      <CardImage>
        <img src={image || 'https://picsum.photos/400'} alt={name} />
      </CardImage>
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardButton href={html_url} target='_blank' rel='noopener noreferrer'>
          {btnTitle}
        </CardButton>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
