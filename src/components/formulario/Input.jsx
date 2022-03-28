import React, { useState } from "react";

export default () => {
    const [valor, setValor] = useState("Inicial")

    function mudar(valor) {
        setValor(valor.target.value)
    }
    return (<div>
        <input type="text" value={valor} onChange={mudar} />
        <input value={valor} readOnly />
        <input value={undefined} />
    </div>)
}