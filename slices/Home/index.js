import styled from 'styled-components';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import Lottie from 'react-lottie';
import animationData from '../../public/animations/95348-coding-boy.json';
import { motion } from 'framer-motion';

const Home = ({ slice }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  const sectionVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 0, 0, 0, 1],
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.4,
        duration: 1,
      },
    },
  };
  console.log(slice);
  return (
    <Container variants={sectionVariant} initial='hidden' animate='visible'>
      <div className='home'>
        <div>
          <div className='text-main'>
            <span className='title'>{slice.primary.title && <PrismicRichText field={slice.primary.title} />}</span>
            <span> {slice.primary.description && <PrismicRichText field={slice.primary.description} />}</span>
          </div>
          <a href='#about' className='link'>
            <button className='button'>
              <span>
                <PrismicRichText field={slice.primary.button} />
              </span>
            </button>
          </a>
        </div>
        <div className='img'>
          <Lottie options={defaultOptions} height={800} width={800} />
        </div>
      </div>
    </Container>
  );
};
export default Home;

const Container = styled(motion.div)`
  background-color: var(--mainBlack);
  display: flex;
  min-height: 100%;
  width: 100%;
  height: 100vh;
  align-items: center;
  border-bottom: 0;
  font-weight: 400;
  padding: 0 5.6rem;
  margin-bottom: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  .link {
    text-decoration: none;
    min-width: auto;
    .button {
      border: 1px solid var(--mainBg);
      max-width: 102px;
      display: flex;
      height: 42px;
      background-color: transparent;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 6px;
      width: 102px;
      text-align: center;
      align-self: center;
      color: var(--mainBg);
      transition: all ease-in 0.2s;
      box-shadow: -5px 5px 0px 2px var(--secondaryColor1);

      span {
        color: transparent;
        transition: all ease-in 0.2s;
        z-index: 100;
        text-shadow: -5px 5px 0px transparent;
      }

      &:hover {
        box-shadow: 0px 0px 0px 0px var(--secondaryColor2);
        border: 1px solid var(--secondaryColor3);
        color: var(--secondaryColor3);
        span {
          text-shadow: 0px 0px 0px var(--secondaryColor3);
        }
      }
    }
  }

  h1 {
    color: var(--mainBg);
    font-size: 6.7rem;
  }
  p {
    background: -webkit-linear-gradient(45deg, var(--mainBg), var(--secondaryColor1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 6.7rem;
    font-weight: 700;
  }
  .home {
    margin: auto;
    display: flex;
    align-items: center;
    min-width: 1200px;
    justify-content: space-between;
  }
`;
