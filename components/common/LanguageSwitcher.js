import { PrismicLink, PrismicText } from '@prismicio/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { linkResolver } from '../../prismicio';
import Mundi from '../../public/mundi.svg';

export const LanguageSwitcher = ({ altLangs = [], localeLang, menu }) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <div onClick={() => setShow(!show)} className='lang-controller'>
        <Image src={Mundi} alt='collapsable-arrow-down' width={32} height={32} />
        <span>{localeLang.slice(0, 2).toUpperCase()}</span>
      </div>
      <AnimatePresence mode='wait'>
        {show &&
          altLangs.map((altLang) => {
            return (
              <Languages initial={{ height: 0 }} animate={{ height: 'auto', transition: { duration: 0.2 } }} exit={{ height: 0 }} key={altLang.lang}>
                <PrismicLink href={linkResolver(altLang)} locale={altLang.lang} className='link'>
                  {altLang && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.2 } }}
                      exit={{ opacity: 0, transition: { duration: 0.1 } }}
                      onClick={() => setShow(!show)}
                    >
                      {altLang.lang.toUpperCase()}
                    </motion.span>
                  )}
                </PrismicLink>
              </Languages>
            );
          })}
      </AnimatePresence>
    </Container>
  );
};

export default LanguageSwitcher;

const Container = styled.div`
  color: var(--mainBg);
  font-size: 1.6rem;
  user-select: none;
  z-index: 10;
  .lang-controller {
    display: flex;
    cursor: pointer;
    width: 60px;
    align-items: center;
    justify-content: space-between;
  }

  .link {
    color: var(--mainBg);
    text-decoration: none;
  }
`;

const Languages = styled(motion.div)`
  background-color: #ffffff47;
  display: flex;
  align-items: center;
  justify-content: center;
`;
