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
import PhonePulsar from '../../public/pulsar.png';
import Button from '../../components/common/Button';

const Work = ({ slice }) => {
  const { contextDataGlobal, setContextDataGlobal } = useContext(GlobalContext);
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const variants = {
    initial: {
      opacity: 0,
      x: -20,
    },
    second_initial: {
      opacity: 0,
      x: 20,
    },
    title: {
      opacity: 0,
      y: 20,
    },
    animate_text: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
    animate_title: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('animate_text');
      controls.start('animate_title');
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView) {
      setContextDataGlobal({ ...contextDataGlobal, backgroundColor: '#e1e2dc', showButton: true });
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <Image src={WaveSVG} layout='responsive' alt='wave' />
      <section id='work'>
        <ContainerAbout>
          <motion.span variants={variants} initial='title' animate={controls} className='title'>
            {slice.primary.title && <PrismicRichText field={slice.primary.title} />}
          </motion.span>
          <ContainerB21Img mobileColumn='column-reverse'>
            <div className='info'>
              <motion.span animate={controls} className='company-title' style={{ display: 'inline-block' }} variants={variants} initial='initial'>
                {slice.primary.title_company2 && <PrismicRichText field={slice.primary.title_company2} />}
              </motion.span>
              <motion.div variants={variants} initial='initial' animate={controls} className='description-company1'>
                {slice.primary.description_company2 && <PrismicRichText field={slice.primary.description_company2} />}
              </motion.div>
              {slice.primary.link_company2 && (
                <Button
                  href={'https://www.b21.com/'}
                  margin='0em 0 0 0'
                  shadowColor={'#0d324d'}
                  colorText={'#0d324d'}
                  secondaryColor='#e1e2dc'
                  primaryColor={'#62aee4'}
                  backgroundHover={'#62aee4'}
                  width='150px'
                  height='52px'
                >
                  <PrismicRichText field={slice.primary.link_company2} />
                </Button>
              )}
            </div>
            <ImageFade src={PhoneB21} customInView={inView} customRef={ref} />
          </ContainerB21Img>
          <ContainerB21Img>
            <ImageFade src={PhonePulsar} customInView={inView} customRef={ref} />
            <div className='info'>
              <motion.span
                className='company-title'
                animate={controls}
                style={{ display: 'inline-block' }}
                variants={variants}
                initial='second_initial'
              >
                {slice.primary.title_company1 && <PrismicRichText field={slice.primary.title_company1} />}
              </motion.span>
              <motion.div variants={variants} initial='second_initial' animate={controls} className='description-company1'>
                {slice.primary.description_company1 && <PrismicRichText field={slice.primary.description_company1} />}
              </motion.div>
              {slice.primary.link_company1 && (
                <Button
                  href={'https://www.campuspulsar.gob.ar/'}
                  margin='0em 0 0 0'
                  shadowColor={'#0d324d'}
                  colorText={'#0d324d'}
                  secondaryColor='#e1e2dc'
                  primaryColor={'#62aee4'}
                  backgroundHover={'#62aee4'}
                  width='150px'
                  height='52px'
                >
                  <PrismicRichText field={slice.primary.link_company1} />
                </Button>
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
    background-color: var(--mainBg);
    color: var(--mainBlack);
    padding: 0 30rem 10rem;
  }
  @media (max-width: 1615px) {
    section {
      padding: 0 10rem 10rem;
    }
  }
  @media (max-width: 1024px) {
    section {
      padding: 0 5rem 10rem;
    }
  }
  @media (max-width: 768px) {
    section {
      padding: 0 2rem 4em;
    }
  }
`;

const ContainerB21Img = styled.div`
  width: 100%;
  display: flex;
  gap: 6em;
  align-items: center;
  justify-content: space-between;
  .info {
    strong {
      font-size: 2.8rem;
      font-weight: 600;
      text-shadow: -2.5px 2.5px 0.5px var(--primaryColor3);
    }

    h5 {
      font-size: 1.8rem;
      max-width: 500px;
      color: var(--mainBlack);
      font-weight: 500;
      margin-bottom: 2em;
    }
  }

  .company-title {
    font-weight: 600;
    text-shadow: -4px 4px 0px var(--primaryColor2);
    h3 {
      font-size: 5rem;
    }
  }

  @media (max-width: 768px) {
    gap: 3em;
    flex-direction: ${(props) => (props.mobileColumn ? props.mobileColumn : 'column')};
    width: auto;

    .company-title {
      h3 {
        font-size: 4rem;
      }
      h5 {
        font-size: 1.8rem;
        max-width: 200px;
      }
    }
  }
`;

const ContainerAbout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5em 0;

  .title {
    text-align: center;
    text-shadow: -2.5px 2.5px 0px var(--primaryColor2);
    h1 {
      font-size: 6.5rem;
    }
  }

  @media (max-width: 768px) {
    .title {
      h1 {
        font-size: 3.5rem;
      }
    }
  }
`;
