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
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
