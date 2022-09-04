import { PrismicLink, PrismicText } from '@prismicio/react';

export const Header = ({ menu }) => (
  <header>
    <PrismicLink href='/'>
      <PrismicText field={menu.data?.title} />
    </PrismicLink>
    <nav>
      <ul>
        {menu.data?.menu_links.map((menuLink) => (
          <li key={menuLink.label}>
            <PrismicLink field={menuLink.link}>
              <PrismicText field={menuLink.label} />
            </PrismicLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
