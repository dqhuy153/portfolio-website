import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

import { useEffect } from 'react';
import fetchThemesData from '../util/projects/theme/fetchThemeData';

function MyApp({ Component, pageProps, themesData }) {
    useEffect(() => {
        fetchThemesData();
    }, []);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;

// export async function getStaticProps() {
//     try {
//         const response = await fetch('/api/themes');

//         if (!response.ok) {
//             throw new Error('Fetch themes failed!');
//         }

//         const themesData = await response.json();

//         if (!themesData) {
//             throw new Error('No theme provided!');
//         }

//         return {
//             props: {
//                 themesData,
//             },
//         };
//     } catch (error) {
//         console.log(error);
//     }
// }
