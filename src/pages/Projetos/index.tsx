import React from "react";
import Header from "../../components/Header";
import CardProject from "../../components/CardProject";

import './styles.css';

import Pointer from '../../assets/images/pointer.png';
import DivPageImg from '../../assets/images/div-page.png';
import ImgProjeto from '../../assets/images/tip-calculator.png';

export default function Projects() {
    return (
        <div className="container-projects">
            <Header />

            <div className="title-projects">
                <img src={Pointer} />
                <h3>Projetos</h3>
            </div>

            <section className="list-projects">
                <CardProject image = {ImgProjeto} title = "Tip-calculator" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
                <CardProject image = {ImgProjeto} title = "Tip-calculator" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
                <CardProject image = {ImgProjeto} title = "Tip-calculator" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
                <CardProject image = {ImgProjeto} title = "Tip-calculator" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
            </section>
        </div>
    )
}