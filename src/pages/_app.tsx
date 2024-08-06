import Layout from 'components/Layout';

import '../styles/body/body.scss';
import '../styles/body/reset.scss';

import { AppProps } from 'next/app';
import type { FC } from 'react';

const InstaSite: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default InstaSite;
