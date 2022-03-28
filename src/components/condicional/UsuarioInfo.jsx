import React from "react";
import If from "./If";


export default (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                <span>Temos o usuario de nome {props.usuario.nome}</span>
            </If>
            <If test={!usuario && !usuario.nome}>
                <span>Usario não encontrado</span>
            </If>
        </div>
    )
}