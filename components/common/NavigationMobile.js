import { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import CrossIcon from '../../public/icons/Cross';
import MenuMobileIcon from '../../public/icons/MenuMobile';
import LanguageSwitcher from './LanguageSwitcher';

const NavigationMobile = ({ menu, altLangs, localeLang }) => {
  const [show, setShow] = useState(false);

  return (
    <MainMenu>
      <MenuMobileIcon onClick={() => setShow(!show)} />
      <AnimatePresence mode='exit'>
        {show && (
          <motion.div
            className='hidden'
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backdropFilter: 'blur(10px)',
              transition: {
                duration: 0.3,
              },
            }}
            exit={{ opacity: 0 }}
          >
            <div className='cross'>
              <CrossIcon onClick={() => setShow(!show)} />
            </div>
            <ul>
              {menu.data?.menu_links.map((menuLink, inx) => (
                <motion.li
                  key={'liNavigation' + inx}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      delay: 0.5,
                    },
                  }}
                  exit={{ opacity: 0 }}
                >
                  <MenuLink href={menuLink['anchorlink'][0].text}>{menuLink.label[0].text}</MenuLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    delay: 0.5,
                  },
                }}
                exit={{ opacity: 0 }}
              >
                <LanguageSwitcher altLangs={altLangs} mobile={true} localeLang={localeLang} />
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </MainMenu>
  );
};
export default NavigationMobile;

const MainMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  z-index: 120;

  .hidden {
    position: absolute;
    background-color: #02020270;
    height: 100vh;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cross {
    align-self: flex-end;
    margin: 1em 1em 0 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.5em;
    margin-top: 4em;
    li {
      margin: 0 1rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.4rem;
    ul {
      li {
        margin: 0 0.5rem;
      }
    }
  }
`;
const MenuLink = styled.a`
  font-size: 1.8rem;
  text-decoration: none;
  color: var(--mainBg);
  transition: all ease-in-out 0.2s;
  text-shadow: -2px 2px 0px var(--mainBlack);
  :hover {
    color: var(--mainBg);
    text-shadow: -3.5px 3.5px 0px var(--secondaryColor2);
  }
`;
