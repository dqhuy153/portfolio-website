import React from 'react';
import ContentLoader from 'react-content-loader';

const QuoteBoxLoader = (props) => (
    <ContentLoader
        speed={2}
        width={476}
        height={124}
        viewBox="0 0 476 124"
        backgroundColor="#dbdbdb"
        foregroundColor="#e8e8e8"
        style={{ margin: '0 auto' }}
        {...props}
    >
        <rect x="29" y="25" rx="3" ry="3" width="413" height="25" />
        <rect x="203" y="83" rx="0" ry="0" width="65" height="11" />
        <rect x="249" y="92" rx="0" ry="0" width="8" height="3" />
    </ContentLoader>
);

export default QuoteBoxLoader;
