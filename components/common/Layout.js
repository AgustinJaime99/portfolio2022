import React from 'react';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Header } from './Menu';

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--mainBlack);
`;

const Layout = ({ children, altLangs, menu, footer, localeLang }) => {
  return (
    <PageContainer>
      <Header altLangs={altLangs} menu={menu} localeLang={localeLang} />
      <AnimatePresence mode='wait'>{children}</AnimatePresence>
      {/* TODO:  <Footer /> */}
    </PageContainer>
  );
};

export default Layout;
