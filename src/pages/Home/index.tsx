import React from "react";

import Header from "../../components/Header";

import "./styles.css";

import DevelopImg from '../../assets/images/developer.svg';
import DivPageImg from '../../assets/images/div-page.png';

export default function Home() {
    return (
        <div className="container-home">
            <Header />
            <main>
                <div className="home-about">
                    <div className="home-about-left">
                        <p className="area">Desenvolvedor WEB</p>
                        <h1>Marcos Paulo</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button>Baixar Currículo</button>
                    </div>
                    <div className="home-about-right">
                        <img src={DevelopImg} />
                    </div>
                </div>
                <div className="div-page">
                    <img src={DivPageImg}/>
                </div>
            </main>
        </div>
    )
}