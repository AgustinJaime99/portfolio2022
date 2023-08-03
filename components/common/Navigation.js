import styled from 'styled-components';

const Navigation = ({ menu }) => {
  return (
    <MainMenu>
      <ul>
        {menu.data?.menu_links.map((menuLink, inx) => (
          <li key={'liNavigation' + inx}>
            <MenuLink href={menuLink['anchorlink'][0].text}>{menuLink.label[0].text}</MenuLink>
          </li>
        ))}
      </ul>
    </MainMenu>
  );
};
export default Navigation;

const MainMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
      margin: 0 1rem;
      padding: 0.5rem 1rem;
    }
  }
  @media (max-width: 768px) {
    display: none;
    padding: 0.5rem 0.4rem;
    ul {
      li {
        margin: 0 0.5rem;
      }
    }
  }
`;
const MenuLink = styled.a`
  cursor: pointer;
  font-size: 1.8rem;
  text-decoration: none;
  color: var(--mainBg);
  transition: all ease-in-out 0.1s;
  :hover {
    color: var(--mainBg);
    text-shadow: -3.5px 3.5px 0px var(--secondaryColor2);
  }
`;
