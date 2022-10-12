import React from "react";

import './styles.css';

interface cardParams {
    text: String,
    name: String,
    image: string
}

export default function CardSkill(props: cardParams) {
    return (
        <div className="conatiner-card-skill">
            <img src={props.image} width="118" height="118"/>
            <h1>{props.name}</h1>
            <p>{props.text}</p>
        </div>
    );
}