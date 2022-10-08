import React from "react";

import './styles.css'

export default function Headers() {
    return (
        <header className="container-header">
            <div>
                <h1> <span>&lt;/</span> Marcos Paulo <span>&gt;</span> </h1>
            </div>

            <ul>
                <li>Home</li>
                <li>Skils</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>
        </header>
    );
}