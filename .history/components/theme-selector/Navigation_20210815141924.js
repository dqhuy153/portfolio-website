import Link from 'next/link';
import React from 'react';

export default function Navigation({ items = [{ title, link }], ...props }) {
    //item: []

    return (
        <nav className="nav__container">
            <Link href="/projects/theme">Theme</Link>
            <ul className="nav__list">
                <li className="nav__list--item">
                    <a>Home</a>
                </li>
                <li className="nav__list--item">
                    <a>About</a>
                </li>
                <li className="nav__list--item">
                    <a>Projects</a>
                </li>
                <li className="nav__list--item">
                    <a>Contact</a>
                </li>
            </ul>
        </nav>
    );
}
