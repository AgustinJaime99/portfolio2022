import styled from 'styled-components';
import { PrismicRichText } from '@prismicio/react';
import { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import WaveSVG from '../../public/waveblue.svg';
import Me from '../../public/me.jpeg';
import { GlobalContext } from '../../context/GlobalContext';
import Skills from '../../components/public/Skills';

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
              <div className='description'>{slice.primary.aboutdescription && <PrismicRichText field={slice.primary.aboutdescription} />}</div>
              <a href='https://drive.google.com/file/d/1d67Fcnu_fGYWfW2Zy49xLWYdQUWUWilR/view' className='link' target='blank'>
                <button className='button'>
                  <span>{slice.primary.button && <PrismicRichText field={slice?.primary?.button} />}</span>
                </button>
              </a>
            </div>
            <div className='img-container'>
              <Image src={Me} layout='responsive' alt='Agustin Diego Jaime' />
            </div>
          </InfoSection>
          <SkillSection>
            {slice.primary.skills && <PrismicRichText field={slice.primary.skills} />}
            <Skills text={slice.primary} />
          </SkillSection>
        </ContainerAbout>
      </section>
    </Container>
  );
};
export default AboutMe;

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    text-align: center;
    font-size: 4.5rem;
    margin: 1.5em 0 1.5em;
    text-shadow: -4px 4px 0px #2e93dc;
    font-weight: 600;
  }
`;

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
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  padding: 0 30rem;

  .title {
    text-align: center;
    text-shadow: -4px 4px 0px #2e93dc;
  }

  .img-container {
    border-radius: 10px;
    width: 450px;
    span {
      border-radius: 12px;
      box-shadow: -10px 10px 0px #2e93dc;
    }
    img {
      border-radius: 10px;
    }
  }
  .link {
    margin-top: 2.5em;
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
        background-color: var(--primaryColor3);
        box-shadow: 0px 0px 0px 0px var(--primaryColor2);
        border: 1px solid var(--primaryColor3);
        color: var(--mainBg);
        span {
          color: var(--mainBg);
          text-shadow: 0px 0px 0px var(--primaryColor3);
        }
      }
    }
  }

  @media (max-width: 1615px) {
    padding: 0 10rem;
  }
  @media (max-width: 1025px) {
    padding: 0 5rem;
  }
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const InfoSection = styled.div`
  display: flex;
  margin: 5rem 0 0 0;
  width: 100%;
  justify-content: space-between;

  .text {
    max-width: 600px;

    h4 {
      font-size: 4.5rem;
      margin-bottom: 0.5em;
      text-shadow: -4px 4px 0px #2e93dc;
      font-weight: 600;
    }
    .description {
      p {
        font-size: 2.2rem;
        margin-bottom: 1em;
      }
    }
  }

  @media (max-width: 1615px) {
    align-items: center;
    gap: 5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    .img-container {
      margin-top: 2em;
      width: 100%;
    }

    .text {
      width: auto;

      h4 {
        font-size: 2.7rem;
      }
      .description {
        p {
          font-size: 2rem;
        }
      }
    }
  }
`;
