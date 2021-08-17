import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

import * as themes from '../models/themes.json';
import { setToLS } from '../util/storage/LocalStorage';
import { useEffect } from 'react';

function MyApp({ Component, pageProps, themesData }) {
    useEffect(() => {
        const fetchThemesData = async () => {
            try {
                const response = await fetch('/api/themes');

                if (!response.ok) {
                    throw new Error('Fetch themes failed!');
                }

                const themesData = await response.json();

                if (!themesData) {
                    throw new Error('No theme provided!');
                }

                //if themes is default, keep theme
                //else variable an id for theme to match source course in useTheme (find id)
                const themes = themesData.map((item) => {
                    if (!item.default) {
                        return {
                            ...item,
                            id: item._id.toString(),
                        };
                    } else {
                        return item;
                    }
                });

                console.log(themes);
            } catch (error) {
                console.log(error);
            }
        };

        fetchThemesData();

        setToLS('all-themes', themes.default);
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
