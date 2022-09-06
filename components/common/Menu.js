import { PrismicLink, PrismicText } from '@prismicio/react';
import LanguageSwitcher from './LanguageSwitcher';

export const Header = ({ menu, altLangs, localeLang }) => (
  <header>
    <PrismicText field={menu.data?.title} />

    <div>
      <LanguageSwitcher altLangs={altLangs} menu={menu} localeLang={localeLang} />
    </div>
  </header>
);
