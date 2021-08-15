import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

import * as themes from '../models/themes.json';
import { setToLS } from '../util/storage/LocalStorage';

function MyApp({ Component, pageProps }) {
    setToLS('all-themes', themes.default);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
