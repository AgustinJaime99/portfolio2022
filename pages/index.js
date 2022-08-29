import Head from 'next/head';
import Image from 'next/image';

import { SliceZone } from '@prismicio/react';
import { createClient } from '../prismicio';
import { components } from '../slices';

export default function Home({ menu, navigation, settings, test }) {
  return <SliceZone slices={test.data.slices} components={components} />;
}

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData });

  const menu = await client.getSingle('mainhero', { lang: locale });
  const test = await client.getSingle('work', { lang: locale });

  return {
    props: {
      menu,
      test,
    },
  };
}
