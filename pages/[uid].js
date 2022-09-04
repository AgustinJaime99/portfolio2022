import { SliceZone } from '@prismicio/react';

import { createClient, linkResolver } from '../prismicio';
import { components } from '../slices';

const Page = ({ page, navigation, settings }) => {
  return <SliceZone slices={page.data.slices} components={components} />;
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID('work', params.uid);

  return {
    props: {
      page,
    },
  };
}
