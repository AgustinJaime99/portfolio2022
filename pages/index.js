import Head from 'next/head';
import Image from 'next/image';

import { SliceZone } from '@prismicio/react';
import { createClient } from '../prismicio';
import { components } from '../slices';
import Layout from '../components/common/Layout';

export default function Home({ menu, navigation, settings, test, localeLang, doc }) {
  console.log(menu);
  return (
    <>
      <Head>
        <title>Agus Dev</title>
      </Head>
      <Layout altLangs={test.alternate_languages} menu={menu}>
        {/* <HomePage /> */}
        <SliceZone slices={test.data.slices} components={components} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData });

  const doc = await client.getSingle('mainhero', { lang: locale });
  const menu = await client.getSingle('menu', { lang: locale });
  const test = await client.getSingle('work', { lang: locale });
  console.log(locale);
  return {
    props: {
      menu,
      test,
      doc,
    },
  };
}
