import { ImQuotesLeft } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import styles from './quote-box.module.scss';
import QuoteBoxLoader from './quote-box-loader';

const QuoteBox = (props) => {
    const { text, author, onTweet, onNewQuote, longText, isLoading } = props;

    return (
        <div className={styles['quote-container']}>
            {isLoading && <QuoteBoxLoader />}
            {!isLoading && (
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
