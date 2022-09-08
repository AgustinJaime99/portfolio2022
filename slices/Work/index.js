import Image from 'next/image';
import styled from 'styled-components';
import { PrismicRichText } from '@prismicio/react';
import WaveSVG from '../../public/wavewhite.svg';
import { useEffect, useContext, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { GlobalContext } from '../../context/GlobalContext';
import ImageFade from '../../components/public/home/ImageFade';
import { motion, useAnimation } from 'framer-motion';

import PhoneB21 from '../../public/B21phone.png';
import NoteBookB21 from '../../public/Notebook.png';
import TabletB21 from '../../public/tabletB21.png';
import PhonePulsar from '../../public/iPhone-Apple-PNG.png';
import PcPulsar from '../../public/Pulsar-pc.png';

import Button from '../../components/common/Button';

const Work = ({ slice }) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const variants = {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate_text: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  useEffect(() => {
    console.log(inView);
    if (inView) {
      controls.start('animate_text');
    }
  }, [controls, inView]);

  return (
    <Container>
      <Image src={WaveSVG} layout='responsive' alt='wave' />
      <section id='work'>
        <ContainerAbout ref={ref}>
          <span className='title'>{slice.primary.title && <PrismicRichText field={slice.primary.title} />}</span>
          <ContainerB21Img>
            <div className='info'>
              <motion.span animate={controls} className='company-title' style={{ display: 'inline-block' }} variants={variants} initial='initial'>
                {slice.primary.title_company2 && <PrismicRichText field={slice.primary.title_company2} />}
              </motion.span>
              <motion.span variants={variants} initial='initial' animate={controls} className='description-company1'>
                {slice.primary.description_company2 && <PrismicRichText field={slice.primary.description_company2} />}
              </motion.span>
              {slice.primary.link_company2 && (
                <motion.span variants={variants} initial='initial' animate={controls}>
                  <Button
                    href={'https://www.b21.com/'}
                    margin='6em 0 0 0'
                    shadowColor={'#a63c3a'}
                    colorText={'#e1e2dc'}
                    secondaryColor='#a63c3a'
                    primaryColor={'#ca6a68'}
                  >
                    <PrismicRichText field={slice.primary.link_company2} />
                  </Button>
                </motion.span>
              )}
            </div>
            <ImageFade
              src={PhoneB21}
              minWidth='70%'
              minHeight='70%'
              customInView={inView}
              customRef={ref}
              isMobile='none'
              className='image'
              zIndex={30}
              leftEm='1.3em'
              botEm='0.5em'
            />
            <ImageFade
              src={TabletB21}
              minWidth='70%'
              minHeight='70%'
              customInView={inView}
              customRef={ref}
              isMobile='none'
              className='image'
              zIndex={20}
              leftEm='9.5em'
              botEm='3.9em'
              delay={0.5}
            />
            <ImageFade
              src={NoteBookB21}
              customInView={inView}
              customRef={ref}
              isMobile='none'
              className='image'
              zIndex={10}
              leftEm='0em'
              botEm='6em'
              delay={0.7}
            />
          </ContainerB21Img>
          <ContainerB21Img>
            <ImageFade
              src={PhonePulsar}
              minWidth='100%'
              minHeight='100%'
              customInView={inView}
              customRef={ref}
              isMobile='none'
              className='image'
              zIndex={30}
              leftEm='3em'
              botEm='11em'
            />
            <div className='info'>
              <motion.span className='company-title' animate={controls} style={{ display: 'inline-block' }} variants={variants} initial='initial'>
                {slice.primary.title_company1 && <PrismicRichText field={slice.primary.title_company1} />}
              </motion.span>
              <motion.span variants={variants} initial='initial' animate={controls} className='description-company1'>
                {slice.primary.description_company1 && <PrismicRichText field={slice.primary.description_company1} />}
              </motion.span>
              {slice.primary.link_company1 && (
                <motion.span variants={variants} initial='initial' animate={controls}>
                  <Button
                    href={'https://www.campuspulsar.gob.ar/'}
                    margin='6em 0 0 0'
                    shadowColor={'#a63c3a'}
                    colorText={'#e1e2dc'}
                    secondaryColor='#a63c3a'
                    primaryColor={'#ca6a68'}
                  >
                    <PrismicRichText field={slice.primary.link_company1} />
                  </Button>
                </motion.span>
              )}
            </div>
          </ContainerB21Img>
        </ContainerAbout>
      </section>
    </Container>
  );
};
export default Work;

const Container = styled.div`
  width: 100%;
  section {
    scroll-behavior: smooth;
    width: 100%;
    background-color: var(--mainBlack);
    color: var(--mainBg);
    padding: 0 5em 10em;
  }
`;

const ContainerB21Img = styled.div`
  margin: 6em 0 3em 0;
  position: relative;
  padding: 1rem;
  height: 450px;
  width: 1200px;
  max-width: 1200px;
  .info {
    position: absolute;
    z-index: 40;

    .company-title {
      font-weight: 600;
      text-shadow: -4px 4px 0px var(--variant3);
      h3 {
        font-size: 8rem;
      }
    }
    strong {
      font-weight: 600;
      text-shadow: -2.5px 2.5px 0.5px var(--variant3);
    }

    h5 {
      text-shadow: -2.5px 2.5px 0px var(--variant2);
      font-size: 2.8rem;
      max-width: 500px;
      color: var(--mainBg);
      font-weight: 600;
    }
  }
`;

const ContainerAbout = styled.div`
  margin: auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .title {
    text-align: center;
    text-shadow: -4px 4px 0px var(--variant3);
  }

  .img-container {
    border-radius: 10px;
    width: 450px;
    box-shadow: -10px 10px 0px #2e93dc;

    img {
      border-radius: 10px;
    }
  }
`;
