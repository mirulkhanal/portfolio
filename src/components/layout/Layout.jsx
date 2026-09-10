// src/components/layout/Layout.js
import { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Seo from '../common/Seo';

const AppShell = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const SkipLink = styled.a`
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 100;
  padding: 0.7rem 0.9rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.onPrimary};
  transform: translateY(-150%);

  &:focus {
    transform: translateY(0);
  }
`;

const MainContent = styled.main`
  flex: 1;
`;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

const Layout = () => {
  return (
    <AppShell>
      <Seo />
      <ScrollToTop />
      <SkipLink href='#main-content'>Skip to main content</SkipLink>
      <Navbar />
      <MainContent id='main-content' tabIndex='-1'>
        <Outlet />
      </MainContent>
      <Footer />
    </AppShell>
  );
};

export default Layout;
