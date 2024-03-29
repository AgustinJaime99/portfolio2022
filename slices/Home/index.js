import styled from 'styled-components';
import { PrismicRichText } from '@prismicio/react';
import { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLottie } from 'lottie-react';
import animationData from '../../public/animations/95348-coding-boy.json';
import { motion } from 'framer-motion';
import { GlobalContext } from '../../context/GlobalContext';

const Home = ({ slice }) => {
  const [ref, inView] = useInView();
  const { contextDataGlobal, setContextDataGlobal } = useContext(GlobalContext);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  useEffect(() => {
    if (inView) {
      setContextDataGlobal({ ...contextDataGlobal, showButton: false });
    }
  }, [inView]);

  const { View } = useLottie(defaultOptions);

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

  const spanVariant = {
    initial: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    transition: {
      type: 'spring',
      stiffness: 10,
      damping: 300,
    },
  };

  return (
    <Container variants={sectionVariant} initial='hidden' animate='visible' ref={ref} id='home'>
      <div className='home'>
        <div className='section-action'>
          <div className='text-main'>
            <motion.span className='title' variants={spanVariant}>
              {slice.primary.title && <PrismicRichText field={slice.primary.title} />}
            </motion.span>
            <motion.span variants={spanVariant}> {slice.primary.description && <PrismicRichText field={slice.primary.description} />}</motion.span>
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
          {View}
          {/* <View options={defaultOptions} height={800} width={800} /> */}
        </div>
      </div>
    </Container>
  );
};
export default Home;

const Container = styled(motion.div)`
  background-color: var(--mainBlack);
  display: flex;
  scroll-behavior: smooth;
  min-height: 100%;
  width: 100%;
  height: 95vh;
  border-bottom: 0;
  font-weight: 400;
  padding: 0 30rem;
  margin-bottom: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  .link {
    text-decoration: none;
    display: inline-block;

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
      font-weight: 600;

      span {
        color: #ffffff47;
        transition: all ease-in 0.2s;
        z-index: 100;
        text-shadow: -5px 5px 0px transparent;
      }

      &:hover {
        background-color: transparent;
        box-shadow: 0px 0px 0px 0px var(--secondaryColor2);
        border: 1px solid var(--secondaryColor3);
        color: var(--secondaryColor3);
        span {
          color: transparent;
          text-shadow: 0px 0px 0px var(--secondaryColor3);
        }
      }
    }
  }

  h1 {
    color: var(--mainBg);
    font-size: 4.7rem;
  }

  p {
    background: -webkit-linear-gradient(45deg, var(--mainBg), var(--secondaryColor1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 5.7rem;
    font-weight: 700;
  }
  .text-main {
    position: relative;
    z-index: 10;
  }
  .home {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    .img {
      max-width: 800px;
      position: absolute;
      right: 0;
      z-index: 8;
    }
  }

  @media (max-width: 1615px) {
    padding: 0 10rem;
    .home {
      .img {
        div {
          width: 500px !important;
          height: 600px !important;
        }
      }
    }
    svg {
      width: 500px !important;
      height: 600px !important;
    }
  }

  @media (max-width: 1025px) {
    padding: 0 5rem;
    p {
      font-size: 4rem;
    }
    h1 {
      font-size: 4rem;
    }
    .home {
      .img {
        div {
          width: 600px !important;
          height: 600px !important;
        }
      }
    }
    svg {
      width: 600px !important;
      height: 600px !important;
    }
  }

  @media (max-width: 768px) {
    padding: 0rem 1em 0;
    h1 {
      text-align: center;
      font-size: 3.7rem;
    }

    p {
      text-align: center;
      font-size: 3.7rem;
    }

    .section-action {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2em;
    }
    .home {
      justify-content: center;
      .img {
        display: none;
        div {
          width: 300px !important;
          height: 500px !important;
        }
      }
    }
    svg {
      width: 300px !important;
      height: 500px !important;
    }
  }
`;
