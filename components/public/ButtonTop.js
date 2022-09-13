import styled from 'styled-components';
import Arrowup from '../../public/icons/Arrowup';
import { motion } from 'framer-motion';

const ButtonTop = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,

        transition: {
          duration: 0.5,
          delay: 0.5,
        },
      }}
      exit={{ opacity: 0 }}
    >
      <Anchor href='#home'>
        <Arrowup />
      </Anchor>
    </motion.div>
  );
};

export default ButtonTop;

const Anchor = styled.a`
  width: 60px;
  height: 60px;
  background: var(--variant1);
  position: fixed;
  z-index: 100;
  bottom: 3em;
  right: 3em;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease-in-out 0.2s;

  &:hover {
    bottom: 3.8em;
  }
`;
