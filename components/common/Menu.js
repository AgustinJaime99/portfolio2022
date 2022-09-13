import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Logo from '../../public/Logo.png';
import LanguageSwitcher from './LanguageSwitcher';
import Navigation from './Navigation';

export const Header = ({ menu, altLangs, localeLang }) => {
  return (
    <HeaderContainer>
      <div className='container'>
        <MainLogo>
          <Link href='/' passHref>
            <a>
              <Image src={Logo} width='100%' height='100%' alt='logo-agustin-jaime-dev' />
            </a>
          </Link>
        </MainLogo>
        <div className='menu'>
          <Navigation menu={menu} />
          <LanguageSwitcher altLangs={altLangs} menu={menu} localeLang={localeLang} />
        </div>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: var(--mainBlack);
  width: 100%;
  height: 40px;
  z-index: 10;

  .menu {
    display: flex;
    align-items: center;
  }

  .container {
    padding: 24px 0;
    display: flex;
    margin: auto;
    width: 79%;
    justify-content: space-between;
    align-items: center;
  }
`;

const MainLogo = styled.div`
  cursor: pointer;
  width: 60px;
  height: 60px;
  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }
`;
