import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver, repositoryName } from '../prismicio';

import GlobalStyles from '../configs/theme';
import GlobalContextProvider from '../context/GlobalContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, locale, ...props }) => (
          <Link href={href} locale={locale}>
            <a {...props}>{children}</a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <GlobalStyles />
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </GlobalContextProvider>
  );
}
