import styled from 'styled-components';
import GithubIcon from '../../public/icons/Github';
import LinkedInIcon from '../../public/icons/LinkedIn';

const Footer = () => {
  return (
    <Container>
      <div className='social'>
        <div className='container-linkedin'>
          <a rel='noopener' target='_blank' href='https://www.linkedin.com/in/agustin-diego-jaime-4033041b7/'>
            <LinkedInIcon />
          </a>
        </div>
        <div className='container-github'>
          <a rel='noopener' target='_blank' href='https://github.com/AgustinJaime99'>
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className='divider' />
      <div className='text'>
        <p>© {new Date().getFullYear()} - Developed with 💜 by Agustin Diego Jaime</p>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  background-color: #1b1c1f;
  height: 300px;
  margin: auto;
  padding: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;

  .social {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 6em;
    transition: all ease-in-out 1s;
  }
  .divider {
    width: 500px;
    min-height: 1px;
    background-color: #ffffff39;
  }

  .text {
    text-align: center;
    p {
      font-size: 12px;
      color: var(--mainBg);
    }
  }
  .container-linkedin {
    cursor: pointer;
    opacity: 1;
    position: relative;
    transition: all ease-in-out 0.2s;
    &:hover {
      bottom: 0.2em;
    }
  }
  .container-github {
    cursor: pointer;
    opacity: 1;
    position: relative;
    transition: all ease-in-out 1s;
    &:hover {
      bottom: 0.2em;
    }
  }

  @media (max-width: 768px) {
    .divider {
      width: 250px;
    }
  }
`;
