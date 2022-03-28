import React from "react"
import alunos from "../../data/alunos"

const lis = alunos.map((aluno) => {
    return <li key={aluno.id}> {aluno.id}) {aluno.nome}  {"->"} {aluno.nota}</li>
})
export default () => {
    return (<>
        <ul style={{ listStyle: "none" }}>
            {lis}
        </ul>
    </>
    )

}