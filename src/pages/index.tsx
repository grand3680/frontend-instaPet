import Head from 'next/head';
import Feeds from 'components/feeds/Feeds';
import type { FC } from 'react';

const RootLayout: FC = () => {
  return (
    <>
      <Head>
        <title>home</title>
      </Head>
      <Feeds />
    </>
  );
};

export default RootLayout;
