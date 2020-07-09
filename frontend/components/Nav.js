import React from "react";
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link href="/">
                                <a className="nav-link">Главная</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/products">
                                <a className="nav-link">Товары</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/categories">
                                <a className="nav-link">Категории</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Nav;
