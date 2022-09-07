import styled from 'styled-components';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import WaveSVG from '../../public/waveblue.svg';
import Me from '../../public/me.jpeg';

const AboutMe = ({ slice }) => {
  return (
    <Container>
      <Image src={WaveSVG} layout='responsive' alt='wave' />
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
    padding: 0 0 10em 0;
  }
`;

const ContainerAbout = styled.div`
  margin: auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;

  .title {
    text-align: center;
  }

  .img-container {
    width: 450px;
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
