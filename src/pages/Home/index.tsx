import React from "react";

import Header from "../../components/Header";

import "./styles.css";

import DevelopImg from '../../assets/images/developer.svg';
import DivPageImg from '../../assets/images/div-page.png';
import MyPhoto from '../../assets/images/perfil.jpg';
import IconLinkedin from '../../assets/images/icone-linkedin.png';
import IconWhatsapp from '../../assets/images/whatsapp.png';
import IconGithub from '../../assets/images/icone-github.png';
import Pointer from '../../assets/images/pointer.png';

export default function Home() {
    return (
        <div className="container-home">
            <Header />
            <main>
                <section className="home-about">
                    <div className="home-about-left">
                        <p className="area">Desenvolvedor WEB</p>
                        <h1>Marcos Paulo</h1>
                        <p>Desenvolvedor WEB buscando a primeira oportunidade de mostrar o meu potencial como programador, tenho boa lógica de programação, gosto de trabalho em equipe, estou sempre disposto a aprender novas tecnologias e sou muito dedicado.</p>
                        <button>Baixar Currículo</button>
                    </div>
                    <div className="home-about-right">
                        <img src={DevelopImg} />
                    </div>
                </section>
                <div className="div-page">
                    <img src={DivPageImg}/>
                </div>
                <section className="home-more-about">
                    <div className="more-about-left">
                        <div className="myphoto">
                            <img src={MyPhoto}/>
                        </div>
                        <h3>Marcos Paulo</h3>
                        <div className="icon-social">
                            <img src={IconWhatsapp}/>
                            <img src={IconLinkedin}/>
                            <img src={IconGithub}/>
                        </div>
                    </div>
                    <div className="more-about-right">
                        <div className="sobre">
                            <img src={Pointer} />
                            <h3>Sobre</h3>
                        </div>
                        <h4>Conheça um pouco sobre mim.</h4>
                        <p>Desenvolvedor WEB buscando a primeira oportunidade de mostrar o meu potencial como programador, tenho boa lógica de programação, gosto de trabalho em equipe, estou sempre disposto a aprender novas tecnologias e sou muito dedicado.</p>
                        <p>Sou estudante de sistemas de informação na UFPI, nela aprendi tudo que sei hoje sobre programação como: lógica, estrutura de dados, POO e vários outros conhecimentos. Além disso, na universidade evolui como pessoa, aprendi a lidar com minha timidez e com o relacionamento entre amigos e colegas.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}