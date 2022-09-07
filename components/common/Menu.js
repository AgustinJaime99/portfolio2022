import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Logo from '../../public/Logo.png';
import LanguageSwitcher from './LanguageSwitcher';

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
        <LanguageSwitcher altLangs={altLangs} menu={menu} localeLang={localeLang} />
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: var(--mainBlack);
  width: 100%;
  height: 40px;

  .container {
    padding: 24px 0;
    display: flex;
    margin: auto;
    width: 79%;
    justify-content: space-between;
  }
`;

const MainLogo = styled.div`
  cursor: pointer;
  width: 45px;
  height: 45px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
