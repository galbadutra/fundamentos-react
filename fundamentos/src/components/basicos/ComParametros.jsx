//import React from 'react'

export default function Comparamentros(props) {
    const resultado = props.nota >= 7 ? "Aprovado" : "Reprovado"
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>{props.subtitulo} {props.nome} {resultado}
            </p>
        </div>
    )
}