// src/components/layout/Layout.js
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainContent = styled.main`
  flex: 1;
  min-height: calc(100vh - 120px);
`;

const Layout = () => {
  return (
    <>
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
};

export default Layout;
