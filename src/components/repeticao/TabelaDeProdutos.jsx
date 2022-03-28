import React from "react";
import produtos from "../../data/produtos"
import "../repeticao/TabelaProdutos.css"

const produtosTabelaTD = produtos.map((produto, i) => {
    return (
        <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
            <td> {produto.id}</td>
            <td>{produto.nome}</td>
            <td>{produto.preco}</td>
        </tr >
    )
})

export default () => {
    return (
        <div className="TabelaProdutos" >
            <table >

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosTabelaTD}
                </tbody>
            </table>
        </div >
    )
}