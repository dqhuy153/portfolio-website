import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

import * as themes from '../models/themes.json';
import { setToLS } from '../util/storage/LocalStorage';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        setToLS('all-themes', themes.default);
    }, []);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
