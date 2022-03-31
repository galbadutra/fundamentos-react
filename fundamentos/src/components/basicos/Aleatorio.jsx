import React from 'react'

export default function Aleatorio(props) {
    const numAleatorio = parseInt(Math.random() * (props.max - props.min) + props.min);
    return (
        <>
            <h2>Valor Aleatorio</h2>
            <p>Numero MIN : {props.min}</p>
            <p>Numero MAX : {props.max}</p>
            <p>Numero Aleatorio : {numAleatorio}</p>
        </>
    )
}