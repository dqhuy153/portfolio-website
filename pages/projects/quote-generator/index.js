import Head from 'next/head';
import { useEffect, useState } from 'react';

import QuoteBox from '../../../components/quote-generator/quote-box';
import styles from './quote-generator.module.scss';

export default function QuoteGenerator(props) {
    const { quoteInit, error, message } = props;

    const [quote, setQuote] = useState(quoteInit);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (error) {
            alert(`Something goes wrong! [Message: ${message}]`);
            return;
        }
    }, [error, message]);

    const tweetHandler = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`;

        const newWindow = window.open(
            twitterUrl,
            '_blank',
            'noopener,noreferrer'
        );

        if (newWindow) newWindow.opener = null;
    };

    const newQuoteHandler = async () => {
        const apiUrl = 'https://type.fit/api/quotes';

        setIsLoading(true);

        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Fetch failed!');
            }

            const quotes = await response.json();

            //pick random quote from quotes array
            const randomQuote =
                quotes[Math.floor(Math.random() * quotes.length)];

            //check quote length to determine styling
            let longText = randomQuote.text.length > 100 ? true : false;

            setQuote({
                text: randomQuote.text
                    ? randomQuote.text
                    : 'Happy day, my friend!',
                author: randomQuote.author ? randomQuote.author : 'Unknown',
                longText,
            });
        } catch (error) {
            console.log(error);

            alert(`Something goes wrong! [Message: ${message}]`);
        }

        setIsLoading(false);
    };

    return (
        <div>
            <Head>
                <title>Quote generator</title>
                <meta name="description" content="Quote generator." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.body}>
                <QuoteBox
                    text={quote.text}
                    author={quote.author}
                    longText={props.longText}
                    onTweet={tweetHandler}
                    onNewQuote={newQuoteHandler}
                    isLoading={isLoading}
                />
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Fetch failed!');
        }

        const quotes = await response.json();

        //pick random quote from quotes array
        const quote = quotes[Math.floor(Math.random() * quotes.length)];

        //check quote length to determine styling
        let longText = quote.text.length > 100 ? true : false;

        return {
            props: {
                quoteInit: {
                    text: quote.text ? quote.text : 'Happy day, my friend!',
                    author: quote.author ? quote.author : 'Unknown',
                    longText,
                },
            },
        };
    } catch (err) {
        return {
            props: {
                quote: {
                    text: 'Happy day, my friend!',
                    author: 'huyy',
                    longText: false,
                },
                error: true,
                message: err.message,
            },
        };
    }
}
