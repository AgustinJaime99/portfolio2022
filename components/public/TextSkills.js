import { PrismicRichText } from '@prismicio/react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import styled from 'styled-components';
import CssIcon from '../../public/icons/CssIcon';
import GraphQLIcon from '../../public/icons/GraphQLIcon';
import HtmlIcon from '../../public/icons/HtmlIcon';
import JavascriptIcon from '../../public/icons/Javascript';
import NextIcon from '../../public/icons/NextIcon';
import ReactIcon from '../../public/icons/React';
import ReduxIcon from '../../public/icons/ReduxIcon';
import StyledComponentsIcon from '../../public/icons/StyledCompIcon';

const TextSkills = ({ selected, text }) => {
  return (
    <Container>
      <AnimatePresence mode='wait'>
        {selected === 1 && (
          <DivMotion
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            }}
            exit={{ opacity: 0, x: 0 }}
          >
            <PrismicRichText field={text?.jstext} />
            <JavascriptIcon color={'#0d324d50'} width={'15em'} height={'15em'} box={true} />
          </DivMotion>
        )}
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        {selected === 2 && (
          <DivMotion
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            }}
            exit={{ opacity: 0, x: 0 }}
          >
            <PrismicRichText field={text?.reacttext} />
            <ReactIcon color={'#0d324d50'} width={'15em'} height={'15em'} box={true} />
          </DivMotion>
        )}
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        {selected === 3 && (
          <DivMotion
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            }}
            exit={{ opacity: 0, x: -20 }}
          >
            <PrismicRichText field={text?.nexttext} />
            <NextIcon color={'#0d324d50'} width={'15em'} height={'15em'} box={true} />
          </DivMotion>
        )}
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        {selected === 4 && (
          <DivMotion
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            }}
            exit={{ opacity: 0, x: -20 }}
          >
            <PrismicRichText field={text?.graphqltext} />
            <GraphQLIcon color={'#0d324d50'} width={'15em'} height={'15em'} box={true} />
          </DivMotion>
        )}
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        {selected === 5 && (
          <DivMotion
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            }}
            exit={{ opacity: 0, x: -20 }}
          >
            <PrismicRichText field={text?.styledtext} />
            <StyledComponentsIcon color={'#0d324d50'} width={'15em'} height={'15em'} box={true} />
          </DivMotion>
        )}
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        {selected === 6 && (
          <DivMotion
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            }}
            exit={{ opacity: 0, x: -20 }}
          >
            <PrismicRichText field={text?.htmltext} />
            <HtmlIcon color={'#0d324d50'} width={'15em'} height={'15em'} box={true} />
          </DivMotion>
        )}
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        {selected === 7 && (
          <DivMotion
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            }}
            exit={{ opacity: 0, x: -20 }}
          >
            <PrismicRichText field={text?.csstext} />
            <CssIcon color={'#0d324d50'} width={'15em'} height={'15em'} box={true} />
          </DivMotion>
        )}
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        {selected === 8 && (
          <DivMotion
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            }}
            exit={{ opacity: 0, x: -20 }}
          >
            <PrismicRichText field={text?.reduxtext} />
            <ReduxIcon color={'#0d324d50'} width={'15em'} height={'15em'} box={true} />
          </DivMotion>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default TextSkills;

const Container = styled.div`
  p {
    color: #020202;
    font-size: 1em;
    strong {
      color: var(--primaryColor2);
    }
  }
`;

const DivMotion = styled(motion.div)`
  position: relative;

  p {
    position: absolute;
  }
`;
