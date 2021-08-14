import React from 'react';
import ContentLoader from 'react-content-loader';

const QuoteBoxLoaderMb = (props) => (
    <ContentLoader
        speed={2}
        width={476}
        height={124}
        viewBox="0 0 476 124"
        backgroundColor="#dbdbdb"
        foregroundColor="#e8e8e8"
        {...props}
    >
        <rect x="28" y="25" rx="3" ry="3" width="151" height="25" />
        <rect x="72" y="75" rx="0" ry="0" width="65" height="11" />
    </ContentLoader>
);

export default QuoteBoxLoaderMb;
