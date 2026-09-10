import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import { FaBars, FaDownload, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { profile } from '../../data/profile';

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
`;

const NavInner = styled.div`
  display: flex;
  width: min(1180px, 100%);
  min-height: 70px;
  margin: 0 auto;
  padding: 0.75rem clamp(1rem, 4vw, 2rem);
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Brand = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-size: 1.05rem;
  font-weight: 850;
  letter-spacing: -0.025em;
  text-decoration: none;

  span {
    color: ${({ theme }) => theme.primary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
`;

const NavMenu = styled.ul`
  display: flex;
  gap: 0.2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 760px) {
    display: none;
  }
`;

const NavItem = styled.li`
  a {
    display: block;
    padding: 0.6rem 0.7rem;
    border-radius: 0.55rem;
    text-decoration: none;
    color: ${({ theme }) => theme.textMuted};
    font-size: 0.9rem;
    font-weight: 700;

    &:hover,
    &.active {
      background: ${({ theme }) => theme.primarySoft};
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const IconButton = styled.button`
  display: grid;
  width: 42px;
  height: 42px;
  padding: 0;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.65rem;
  background: transparent;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

const MobileMenuButton = styled(IconButton)`
  display: none;

  @media (max-width: 760px) {
    display: grid;
  }
`;

const MobileMenu = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.5rem clamp(1rem, 4vw, 2rem) 1rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};

  a {
    padding: 0.75rem;
    border-radius: 0.55rem;
    color: ${({ theme }) => theme.textMuted};
    text-decoration: none;
    font-weight: 700;

    &:hover,
    &.active {
      background: ${({ theme }) => theme.primarySoft};
      color: ${({ theme }) => theme.primary};
    }
  }

  @media (min-width: 761px) {
    display: none;
  }
`;

const CVButton = styled.a`
  display: inline-flex;
  min-height: 42px;
  padding: 0.55rem 0.8rem;
  align-items: center;
  gap: 0.45rem;
  border: 1px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.onPrimary};
  border-radius: 0.65rem;
  text-decoration: none;
  font-size: 0.86rem;
  font-weight: 750;

  &:hover {
    background: ${({ theme }) => theme.primaryStrong};
  }

  @media (max-width: 520px) {
    display: none;
  }
`;

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const navigation = [
    { to: '/portfolio', label: 'Projects' },
    { to: '/resume', label: 'Résumé' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <NavContainer aria-label='Primary navigation'>
      <NavInner>
        <Brand to='/' aria-label='Mirul Khanal, home'>
          <span>Mirul</span> Khanal
        </Brand>

        <NavLinks>
          <NavMenu>
            {navigation.map((item) => (
              <NavItem key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </NavItem>
            ))}
          </NavMenu>

          <IconButton
            type='button'
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}>
            {isDark ? (
              <FaSun aria-hidden='true' />
            ) : (
              <FaMoon aria-hidden='true' />
            )}
          </IconButton>

          <CVButton href={profile.resumePath} download>
            PDF <FaDownload aria-hidden='true' />
          </CVButton>

          <MobileMenuButton
            type='button'
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls='mobile-navigation'
            aria-label={`${isMobileMenuOpen ? 'Close' : 'Open'} navigation menu`}>
            {isMobileMenuOpen ? (
              <FaTimes aria-hidden='true' />
            ) : (
              <FaBars aria-hidden='true' />
            )}
          </MobileMenuButton>
        </NavLinks>
      </NavInner>

      <MobileMenu id='mobile-navigation' $isOpen={isMobileMenuOpen}>
        {navigation.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label}
          </NavLink>
        ))}
        <a href={profile.resumePath} download>
          Download résumé PDF
        </a>
      </MobileMenu>
    </NavContainer>
  );
};

export default Navbar;
