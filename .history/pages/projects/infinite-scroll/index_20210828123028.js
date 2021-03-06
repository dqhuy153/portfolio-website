import Head from 'next/head';
import React, { useCallback, useEffect, useState } from 'react';
import ImagesList from '../../../components/infinite-scroll/ImagesList';

import Loader from '../../../components/infinite-scroll/Loader';

import styles from './infinite-scroll.module.scss';

//env here
const ACCESS_UNSPLASH_KEY = process.env.ACCESS_UNSPLASH_KEY;

const NUMBER_OF_IMAGES_RETURN = 25;

let readyToFetchNew = false;

export default function InfiniteScrollPage(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [photos, setPhotos] = useState([]);

    //Fetch photos from Unflash
    const fetchImagesData = useCallback(async (fetchOption) => {
        const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${ACCESS_UNSPLASH_KEY}&count=${NUMBER_OF_IMAGES_RETURN}`;

        setIsLoading(true);

        try {
            const response = await fetch(apiUrl, fetchOption);

            if (!response.ok) {
                throw new Error('Fetch failed!');
            }

            const photosData = await response.json();

            setPhotos((prevState) => [...prevState, ...photosData]);

            readyToFetchNew = true;
        } catch (error) {
            alert(`Something goes wrong! [Message ${error.message}]`);
        }

        setIsLoading(false);
    }, []);

    //fetch Data for first time loading page
    useEffect(() => {
        //abort controller to get rid of fetch() method when finish the fetch method
        //Fix this problem
        //https://stackoverflow.com/questions/54954385/react-useeffect-causing-cant-perform-a-react-state-update-on-an-unmounted-comp
        const ac = new AbortController();
        fetchImagesData({ signal: ac.signal });

        return () => {
            ac.abort();

            setPhotos([]);
        };
    }, [fetchImagesData]);

    //fetch Data every time user scroll to the ready point

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (
                window.innerHeight + window.scrollY >=
                    document.body.offsetHeight - 1000 &&
                readyToFetchNew
            ) {
                readyToFetchNew = false;
                fetchImagesData();
            }
        });
    }, [fetchImagesData]);

    return (
        <>
            <Head>
                <title>Infinite images</title>
                <meta name="description" content="Infinite images" />
            </Head>
            <main className={styles['infinite-scroll-container']}>
                <h1 className={styles['main-title']}>
                    Discover unslash images
                </h1>
                {isLoading && <Loader className={styles.loader} />}
                <ImagesList className={styles['images-list']} data={photos} />
            </main>
        </>
    );
}
