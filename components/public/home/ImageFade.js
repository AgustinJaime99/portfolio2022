import { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

const ImageFade = ({ src, customRef, customInView, widthImg, isDesktop, borderRadius, alingSelf, isMobile, delay = 0.3, maxHeight }) => {
  const controls = useAnimation();
  const variants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      width: widthImg,
      display: isDesktop ? 'none' : 'inherit',
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };

  useEffect(() => {
    if (customInView) {
      controls.start('animate');
    }
  }, [controls, customInView]);

  return (
    <ImageContainer
      ref={customRef}
      animate={controls}
      variants={variants}
      initial='initial'
      isdesktop={isDesktop}
      border={borderRadius}
      aling={alingSelf}
      ismobile={isMobile}
      maxheight={maxHeight}
    >
      <Image src={src} alt='work-image' layout='responsive' />
    </ImageContainer>
  );
};

export default ImageFade;

// const ImageContainer = styled(motion.div)`
//   display: inline-block;
//   width: 450px;
// `;

const ImageContainer = styled.div`
  width: 550px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
