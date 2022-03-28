import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";
export default props => {
    const [nome, setNome] = useState("?")
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    function passarInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (

        <div>
            <span>{nome}</span>
            <span>{idade}</span>
            <span>{nerd ? 'Verdade' : "Falso"}</span>
            <IndiretaFilho QuandoClicar={passarInformacoes} ></IndiretaFilho>
        </div>
    )
}