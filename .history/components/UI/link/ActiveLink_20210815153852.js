//src: https://github.com/vercel/next.js/tree/canary/examples/active-class-name

import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({ children, activeClassName, ...props }) => {
    const { asPath } = useRouter();
    const child = Children.only(children);
    const childClassName = child.props.className || '';

    console.log(props.as);

    // pages/index.js will be matched via props.href
    // pages/about.js will be matched via props.href
    // pages/[slug].js will be matched via props.as
    const className =
        asPath === props.href || asPath === props.as
            ? `${childClassName} ${activeClassName}`.trim()
            : childClassName;

    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    );
};

ActiveLink.propTypes = {
    activeClassName: PropTypes.string.isRequired,
};

export default ActiveLink;
