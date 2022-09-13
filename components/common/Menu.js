import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Logo from '../../public/Logo.png';
import LanguageSwitcher from './LanguageSwitcher';
import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';

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
        <div className='menu-mobile'>
          <NavigationMobile menu={menu} localeLang={localeLang} altLangs={altLangs} />
        </div>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: var(--mainBlack);
  width: 100%;
  height: auto;
  z-index: 110;
  position: fixed;
  top: 0;

  .menu {
    display: flex;
    align-items: center;
  }

  .menu-mobile {
    display: none;
  }

  .container {
    padding: 8px 0;
    display: flex;
    margin: auto;
    width: 79%;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 768px) {
    height: 55px;
    display: flex;
    .container {
      padding: 0;
      display: flex;
      margin: auto;
      width: 79%;
      justify-content: space-between;
      align-items: center;
    }
    .menu {
      display: none;
    }
    .menu-mobile {
      display: inherit;
    }
  }
`;

const MainLogo = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;
