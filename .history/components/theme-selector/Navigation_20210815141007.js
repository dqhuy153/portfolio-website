import Link from 'next/link';
import React from 'react';

export default function Navigation(props) {
    return (
        <nav className="nav__container">
            <Link href="/projects/theme" />
            <ul className="nav-list"></ul>
        </nav>
    );
}