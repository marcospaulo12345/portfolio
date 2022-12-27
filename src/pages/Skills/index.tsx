import React, { useEffect } from "react";

import Headers from "../../components/Header";
import CardSkill from "../../components/CardSkill";
import Pointer from '../../assets/images/pointer.png';

import "./styles.css";

import iconReact from '../../assets/images/react.png';
import iconNode from '../../assets/images/nodejs.png';
import iconHtml from '../../assets/images/html.png';
import iconCss from '../../assets/images/css-3.png';
import iconJS from '../../assets/images/js.png';
import iconPython from '../../assets/images/python.png';
import DivPageImg from '../../assets/images/div-page.png';


export default function Skills() {

    function fadeIn() {
        var items = document.getElementsByClassName('conatiner-card-skill');
        for (let i = 0; i < items.length; ++i) {
            setTimeout(() => {
                items[i]?.classList.add('fadein')
            }, i * 200)
        }
    }

    useEffect(() => {
        fadeIn()
    }, [])

    return (
        <main className="container-skills">
            <Headers />

            <div className="title-skills">
                <img src={Pointer} />
                <h3>Skills</h3>
            </div>
            <section className="skills">
                <CardSkill
                    text="Consigo desenvolver um sistema básico em React, utilizando os conceitos de rotas, componentes, Hooks, consumo de APIs, entre outros."
                    name="React"
                    image={iconReact}
                />
                <CardSkill
                    text="Conhecimentos básicos em banco de dados, arquitetura MVC, autenticação de usuário com JWT, Sequelize, Promises e Express."
                    name="NodeJs"
                    image={iconNode}
                />
                <CardSkill
                    text="Elementos Semânticos, Formes e validação"
                    name="HTML"
                    image={iconHtml}
                />
                <CardSkill
                    text="Conhecimentos em Margin, Padding, Flexbox, Display, Positioning, Media Queries, etc."
                    name="CSS"
                    image={iconCss}
                />
                <CardSkill
                    text="Conhecimentos básico em manipulação de String, Loop, condições, Arrays, DOM, Fech API, entre outros."
                    name="Javascript"
                    image={iconJS}
                />
                <CardSkill
                    text="Conhecimento básico em python, como: Loop, condições, Arrays, Pandas, Numpy."
                    name="Python"
                    image={iconPython}
                />
            </section>
            <div className="div-page">
                <img src={DivPageImg} />
            </div>
        </main>
    );
}