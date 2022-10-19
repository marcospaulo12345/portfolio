import React from "react";

interface cardParams {
    image: string
    title: String,
    description: String,
}

import './styles.css';

export default function CardProject(props: cardParams) {
    return (
        <div className="card-project">
            <div className="card-project-img">
                <img src={props.image} />
            </div>

            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}