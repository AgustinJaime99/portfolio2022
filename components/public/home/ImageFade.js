import { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

const ImageFade = ({
  src,
  customRef,
  customInView,
  widthImg,
  isDesktop,
  borderRadius,
  zIndex,
  alingSelf,
  isMobile,
  topEm,
  leftEm,
  botEm,
  minHeight,
  minWidth,
  delay = 0.3,
}) => {
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
      zindex={zIndex}
      topimg={topEm}
      leftem={leftEm}
      botem={botEm}
      minwidth={minWidth}
      minheight={minHeight}
    >
      <Image src={src} placeholder='blur' quality={100} alt='background-image' />
    </ImageContainer>
  );
};

export default ImageFade;

const ImageContainer = styled(motion.div)`
  display: block;
  position: absolute;
  z-index: ${(props) => props?.zindex};
  width: 50%;
  height: 50%;
  top: ${(props) => props.topimg};
  bottom: ${(props) => props.botem};
  right: ${(props) => props?.leftem};

  span {
    img {
      min-width: ${(props) => props.minwidth || '100%'}!important;
      min-height: ${(props) => props.minheight || '100%'} !important;
    }
  }

  .rounded {
    border-radius: ${(props) => (props.border ? props.border : '60px 0 0 60px')};
  }
  @media (max-width: 768px) {
    display: ${(props) => props.ismobile} !important;
    align-self: ${(props) => (props.aling ? props.aling : 'flex-end')};
    margin: 25px 0 0 0;
  }
`;
