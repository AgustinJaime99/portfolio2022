import React, { useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Header } from './Menu';
import { GlobalContext } from '../../context/GlobalContext';
import ButtonTop from '../public/ButtonTop';
import Footer from './Footer';

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.BgColor && props.BgColor};
`;

const Layout = ({ children, altLangs, menu, localeLang }) => {
  const { contextDataGlobal } = useContext(GlobalContext);
  return (
    <PageContainer BgColor={contextDataGlobal?.backgroundColor}>
      <Header altLangs={altLangs} menu={menu} localeLang={localeLang} />
      <AnimatePresence mode='wait'>{children}</AnimatePresence>
      <AnimatePresence mode='wait'>{contextDataGlobal?.showButton && <ButtonTop />}</AnimatePresence>
      <Footer />
    </PageContainer>
  );
};

export default Layout;
