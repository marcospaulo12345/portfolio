import React from "react";
import { Link } from "react-router-dom";

import './styles.css'

export default function Headers() {
    return (
        <header className="container-header">
            <div>
                <h1> <span>&lt;/</span> Marcos Paulo <span>&gt;</span> </h1>
            </div>

            <ul>
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