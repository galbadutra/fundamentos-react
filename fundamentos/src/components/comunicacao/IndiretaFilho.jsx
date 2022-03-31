import React from "react";
import DiretaFilho from "./DiretaFilho";
export default props => {
    return (
        <div>

            <button onClick={function (el) {
                props.QuandoClicar("Joao", 53, false)
            }
            }>Mostrar Informações</button>
        </div>
    )
}