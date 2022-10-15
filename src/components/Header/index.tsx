import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuBurger from '../../assets/images/menu.png';

import './styles.css';

export default function Headers() {
    const [openMenu, setOpenMenu] = useState(false);
    console.log(openMenu)

    return (
        <header className="container-header">
            <div 
                className={openMenu ? "is-open-overlayer navbar-overlay": "navbar-overlay"}
                onClick={() => setOpenMenu(!openMenu)}
            ></div>
            <button type="button" className="nav-burger" onClick={() => setOpenMenu(!openMenu)}>
                <img src={MenuBurger} width="32" height="32"/>
            </button>
            <div className="logo">
                <h1> <span>&lt;/</span> Marcos Paulo <span>&gt;</span> </h1>
            </div>

            <ul className={openMenu ? "is-open-menu": "menu"}>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/skills'>
                        Skils
                    </Link>
                </li>
                <li>
                    <Link to='/projects'>
                        Projetos
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        Contato
                    </Link>
                </li>
            </ul>
        </header>
    );
}