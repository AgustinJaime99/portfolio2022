import styled from 'styled-components';
import { PrismicRichText } from '@prismicio/react';
import { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import WaveSVG from '../../public/waveblue.svg';
import Me from '../../public/me.jpeg';
import { GlobalContext } from '../../context/GlobalContext';

const AboutMe = ({ slice }) => {
  const [ref, inView] = useInView();
  const { contextDataGlobal, setContextDataGlobal } = useContext(GlobalContext);

  useEffect(() => {
    if (inView) {
      setContextDataGlobal({ ...contextDataGlobal, backgroundColor: '#020202' });
    }
  }, [inView]);

  return (
    <Container>
      <div ref={ref}>
        <Image src={WaveSVG} layout='responsive' alt='wave' />
      </div>
      <section id='about'>
        <ContainerAbout>
          <span className='title'>{slice.primary.title && <PrismicRichText field={slice.primary.title} />}</span>
          <InfoSection>
            <div className='text'>
              <div>{slice.primary.item && <PrismicRichText field={slice.primary.item} />}</div>
              <div>{slice.primary.aboutdescription && <PrismicRichText field={slice.primary.aboutdescription} />}</div>
              <div>{slice.primary.skills && <PrismicRichText field={slice.primary.skills} />}</div>
              <div>{slice.primary.skillsdescription && <PrismicRichText field={slice.primary.skillsdescription} />}</div>
            </div>
            <div className='img-container'>
              <Image src={Me} layout='responsive' alt='Agustin Diego Jaime' />
            </div>
          </InfoSection>
          <a href='https://drive.google.com/file/d/1d67Fcnu_fGYWfW2Zy49xLWYdQUWUWilR/view' className='link' target='blank'>
            <button className='button'>
              <span>{slice.primary.button && <PrismicRichText field={slice?.primary?.button} />}</span>
            </button>
          </a>
        </ContainerAbout>
      </section>
    </Container>
  );
};
export default AboutMe;

const Container = styled.div`
  width: 100%;
  section {
    scroll-behavior: smooth;
    width: 100%;
    background-color: var(--primaryColor1);
    color: var(--mainBg);
    padding: 0 0 2em 0;
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
    text-shadow: -4px 4px 0px #2e93dc;
  }

  .img-container {
    border-radius: 10px;
    width: 450px;
    box-shadow: -10px 10px 0px #2e93dc;

    img {
      border-radius: 10px;
    }
  }
  .link {
    margin-top: 5em;
    text-decoration: none;
    display: inline-block;
    .button {
      border: 1px solid var(--mainBg);
      max-width: 180px;
      display: flex;
      height: 42px;
      background-color: transparent;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 6px;
      width: 180px;
      text-align: center;
      align-self: center;
      color: var(--mainBg);
      transition: all ease-in 0.2s;
      box-shadow: -5px 5px 0px 2px var(--primaryColor2);
      font-weight: 600;

      span {
        color: #ffffff47;
        transition: all ease-in 0.2s;
        z-index: 100;
        text-shadow: -5px 5px 0px transparent;
      }

      &:hover {
        background-color: transparent;
        box-shadow: 0px 0px 0px 0px var(--variant3);
        border: 1px solid var(--primaryColor3);
        color: var(--primaryColor3);
        span {
          color: transparent;
          text-shadow: 0px 0px 0px var(--primaryColor3);
        }
      }
    }
  }
`;

const InfoSection = styled.div`
  display: flex;
  margin: 5rem 0 0 0;

  .text {
    max-width: 800px;
    padding: 0 25rem 0 0;

    h4 {
      font-size: 3.5rem;
      margin-bottom: 1em;
      text-shadow: -4px 4px 0px #2e93dc;
    }
    p {
      font-size: 1.8rem;
      margin-bottom: 1.5em;
    }
  }
`;
