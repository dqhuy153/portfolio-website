import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

import { useEffect } from 'react';
import { setThemeToLS } from '../util/projects/theme/fetchThemeData';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setThemeToLS();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
