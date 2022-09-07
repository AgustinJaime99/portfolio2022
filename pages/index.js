import Head from 'next/head';
import Image from 'next/image';

import { SliceZone } from '@prismicio/react';
import { createClient } from '../prismicio';
import { components } from '../slices';
import Layout from '../components/common/Layout';

export default function Home({ menu, test, localeLang, doc }) {
  console.log(test?.data);
  return (
    <>
      <Head>
        <title>Agus Dev</title>
      </Head>
      <Layout altLangs={test.alternate_languages} menu={menu} localeLang={localeLang}>
        <SliceZone slices={test?.data.slices} components={components} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData });

  // const doc = await client.getSingle('mainhero', { lang: locale });
  const menu = await client.getSingle('menu', { lang: locale });
  const test = await client.getSingle('work', { lang: locale });
  const localeLang = locale;

  return {
    props: {
      menu,
      test,
      localeLang,
    },
  };
}
