import React from "react";

export default (props) => {
    const IsPar = props.number % 2 === 0
    return (
        <div>
            {IsPar ? <span>PAR</span> : <span>IMPAR</span>}
        </div>
    )
}