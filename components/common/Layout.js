import React from 'react';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Menu, { Header } from './Menu';

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

const Layout = ({ children, altLangs, menu, footer, localeLang }) => {
  console.log(menu);
  return (
    <PageContainer>
      <Header altLangs={altLangs} menu={menu} />
      <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
      {/* TODO:  <Footer /> */}
    </PageContainer>
  );
};

export default Layout;
