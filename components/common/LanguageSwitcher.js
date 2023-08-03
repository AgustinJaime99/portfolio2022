import { PrismicLink, PrismicText } from '@prismicio/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { linkResolver } from '../../prismicio';
import Mundi from '../../public/mundi.svg';

export const LanguageSwitcher = ({ altLangs = [], localeLang, mobile }) => {
  const [show, setShow] = useState(false);

  return (
    <Container mobile={mobile}>
      <div onClick={() => setShow(!show)} className='lang-controller'>
        <Image src={Mundi} alt='collapsable-arrow-down' width={mobile ? 40 : 32} height={mobile ? 40 : 32} />
        <span>
          <p>{localeLang.slice(0, 2).toUpperCase()}</p>
        </span>
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
  font-size: ${(props) => (props.mobile ? '3.6rem' : '1.6rem')};
  user-select: none;
  z-index: 10;
  .lang-controller {
    display: flex;
    cursor: pointer;
    width: ${(props) => (props.mobile ? '100px' : '60px')};
    align-items: center;
    justify-content: space-between;
    span {
      p {
        font-size: ${(props) => (props.mobile ? '3.6rem' : '1.6rem')};
        text-shadow: ${(props) => (!props.mobile ? 'none' : '-1.5px 1.5px 1px #020202')};
      }

      img {
        filter: ${(props) => (!props.mobile ? 'none' : 'drop-shadow(-1.5px 1.5px 1px #020202)')};
      }
    }
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
