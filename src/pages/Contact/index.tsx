import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

import Header from "../../components/Header";

import './styles.css';

import IconLinkedin from '../../assets/images/icone-linkedin.png';
import IconWhatsapp from '../../assets/images/whatsapp.png';
import IconGithub from '../../assets/images/icone-github.png';
import Pointer from '../../assets/images/pointer.png';
import DivPageImg from '../../assets/images/div-page.png';


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e: any) {
        e.preventDefault();
        if(name === '' || email === '' || message === ''){
            alert("Preencha todos os campos!!!");
            return;
        }

        const templatePrams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send('service_bet06ee', 'template_beugoyo', templatePrams, 'QZs_F1P8PTlK1saES')
        .then((response) => {
            console.log("Email enviado", response.status, response.text);
            setName('')
            setEmail('')
            setMessage('')
        }, (err) => {
            console.log('Erro: ', err)
        })
    }
    
    return (
        <div className="container-contact">
            <Header />
            <div className="title-contact">
                <img src={Pointer} />
                <h3>Contato</h3>
            </div>
            <section className="contact-main">
                <div className="contact-main-left">
                    <h3>Entre em contato através dos canais de comunicação listados abaixo, ou através do formulário ao lado.</h3>
                    <div className="list-social">
                        <Link to="">
                            <img src={IconWhatsapp}/>
                        </Link>
                        <Link to="">
                            <img src={IconGithub}/>
                        </Link>
                        <Link to="">
                            <img src={IconLinkedin}/>
                        </Link>
                    </div>
                </div>
                <div className="contact-main-right">
                    <form onSubmit={sendEmail}>
                        <label htmlFor="name">Nome</label>
                        <input 
                            type='text' 
                            id="name" 
                            name="name"
                            placeholder="Digite seu nome"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />

                        <label htmlFor="email">Email</label>
                        <input 
                            type='email' 
                            id="email" 
                            name="email"
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />

                        <label htmlFor="message">Mensagem</label>
                        <textarea 
                            id="message" 
                            name="message"
                            placeholder="Digite sua mensagem..."
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />

                        <button>Enviar</button>
                    </form>
                </div>
            </section>
            <div className="div-page">
                <img src={DivPageImg}/>
            </div>
        </div>
    );
}