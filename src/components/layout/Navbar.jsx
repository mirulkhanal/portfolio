// src/components/layout/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Brand = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.text};

  span {
    color: ${({ theme }) => theme.primary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavMenu = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${({ theme }) => theme.background};
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 99;

  a {
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  margin-left: 1rem;
`;

const CVButton = styled.a`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <NavContainer>
      <Brand to='/'>
        <span>Mirul</span> Khanal
      </Brand>

      <NavLinks>
        <NavMenu>
          <NavItem>
            <Link to='/portfolio'>Portfolio</Link>
          </NavItem>
          <NavItem>
            <Link to='/contact'>Contact</Link>
          </NavItem>
        </NavMenu>

        <ThemeToggle onClick={toggleTheme}>
          {isDark ? <FaSun /> : <FaMoon />}
        </ThemeToggle>

        <CVButton href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
          Preview CV
        </CVButton>

        <MobileMenuButton onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentColor'>
            <path d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </MobileMenuButton>
      </NavLinks>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <Link to='/portfolio' onClick={() => setMobileMenuOpen(false)}>
          Portfolio
        </Link>
        <Link to='/contact' onClick={() => setMobileMenuOpen(false)}>
          Contact
        </Link>
      </MobileMenu>
    </NavContainer>
  );
};

export default Navbar;
