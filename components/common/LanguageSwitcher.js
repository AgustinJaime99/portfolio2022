import { PrismicLink } from '@prismicio/react';
import { linkResolver } from '../../prismicio';

const LangIcon = ({ lang }) => {
  const code = lang.substring(3).toLowerCase();
  return <span className={`fi fi-${code}`} />;
};

export const LanguageSwitcher = ({ altLangs = [], localeLang }) => {
  return (
    <ul>
      {altLangs.map((altLang) => {
        return (
          <li key={altLang.lang}>
            <PrismicLink href={linkResolver(altLang)} locale={altLang.lang}>
              {altLang && (
                <a>
                  <span>{altLang.lang}</span>
                </a>
              )}
            </PrismicLink>
          </li>
        );
      })}
    </ul>
  );
};

export default LanguageSwitcher;
