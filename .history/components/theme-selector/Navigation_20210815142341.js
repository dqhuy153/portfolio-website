import Link from 'next/link';
import React from 'react';

export default function Navigation({ items = [], ...props }) {
    //item: [{ title, link },...]

    return (
        <nav className="nav__container">
            <Link href="/projects/theme">Theme</Link>
            <ul className="nav__list">
                {items.map((item) => (
                    <li key={item.title} className="nav__list--item">
                        <Link href={item.link}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
