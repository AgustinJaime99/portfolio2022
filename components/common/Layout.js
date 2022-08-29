import React from 'react';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { GlobalContext } from '../../context/GlobalContext';
import 'react-toastify/dist/ReactToastify.css';

const PageContainer = styled.div`
  background-color: var(--mainBg);
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <PageContainer>
      {/* TODO: MENU <Navbar /> */}
      <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
      {/* TODO:  <Footer /> */}
    </PageContainer>
  );
};

export default Layout;
