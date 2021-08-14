import { ImQuotesLeft } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

import styles from './quote-box.module.scss';
import QuoteBoxLoader from './quote-box-loader';
import QuoteBoxLoaderMb from './qoute-box-loader-mb';

const QuoteBox = (props) => {
    const { text, author, onTweet, onNewQuote, longText, isLoading } = props;

    // const isPC = useMediaQuery({query: '(min-width: 601px)'})
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    const boxFlexDirection = isLoading ? 'row' : 'column';

    return (
        <div
            className={styles['quote-container']}
            style={{ flexDirection: !isLoading ? 'row' : 'column' }}
        >
            {/* {!isLoading && isMobile && <QuoteBoxLoaderMb />} */}
            {!isLoading && <QuoteBoxLoader />}
            {isLoading && (
                <>
                    {' '}
                    {/* Quote */}
                    <div
                        className={
                            longText
                                ? styles['long-text']
                                : styles['quote-text']
                        }
                    >
                        <ImQuotesLeft className={styles['fa-quote-left']} />
                        <span>{text}</span>
                    </div>
                    {/* Author */}
                    <div className={styles['quote-author']}>
                        <span className={styles.author}>{author}</span>
                    </div>
                    {/* Buttons */}
                    <div className={styles['button-container']}>
                        <button
                            className={styles['twitter-button']}
                            title="Tweet this"
                            onClick={onTweet}
                        >
                            <FaTwitter />
                        </button>
                        <button onClick={onNewQuote}>New Quote</button>
                    </div>{' '}
                </>
            )}
        </div>
    );
};

export default QuoteBox;
