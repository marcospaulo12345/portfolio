import React from "react";

import Header from "../../components/Header";

import "./styles.css";

import DevelopImg from '../../assets/images/developer.svg';
import DivPageImg from '../../assets/images/div-page.png';
import MyPhoto from '../../assets/images/perfil.jpg';
import IconLinkedin from '../../assets/images/icone-linkedin.png';
import IconGmail from '../../assets/images/icone-gmail.png';
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
                            <img src={IconGmail}/>
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
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}