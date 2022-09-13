import styled from 'styled-components';
import { PrismicRichText } from '@prismicio/react';

const Contact = ({ slice }) => (
  <Container>
    <section id='contact'>
      <span className='title'>{slice.primary.title && <PrismicRichText field={slice.primary.title} />}</span>
      <span className='description'>{slice.primary.description && <PrismicRichText field={slice.primary.description} />}</span>
      <span className='button'>
        <a href='mailto:agustindiegojaime@gmail.com'>{slice?.primary?.button && <PrismicRichText field={slice.primary.button} />}</a>
      </span>
    </section>
  </Container>
);

export default Contact;

const Container = styled.div`
  width: 100%;
  color: var(--mainBg);
  background-color: var(--mainBlack);
  section {
    scroll-behavior: smooth;
    padding: 3em 0 6em;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      h1 {
        font-size: 6.5rem;
        text-shadow: -3.5px 3.5px 0px var(--primaryColor3);
      }
    }
    .description {
      margin: 2em 0 0 0;
      p {
        font-weight: 400;
        font-size: 2.5rem;
      }
    }
    .button {
      margin: 2em 0 0 0;
      cursor: pointer;
      transition: all ease-in-out 0.3s;
      a {
        text-decoration: none;
        color: var(--mainBg);
      }
      p {
        font-size: 2.5rem;
        font-weight: 600;
      }
      &:hover {
        color: var(--mainBg);
        text-shadow: -2.5px 2.5px 1px var(--variant3);
      }
    }
  }
`;
