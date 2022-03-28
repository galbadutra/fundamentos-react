
import React from 'react'
import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametros from './components/basicos/ComParametros'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Alunos from './components/repeticao/Alunos'
import TabeladeProdutos from './components/repeticao/TabelaDeProdutos'
import ParOUImpar from './components/condicional/ParOUImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import Direta from './components/comunicacao/Direta'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'

export default () => {
    return (
        <div className='App'>

            <h1>Fundamentos de React</h1>

            <div className='Cards'>

                <Card titulo="Componente Familia" color="#800">
                    <Familia >
                        <FamiliaMembro nome="José" />
                        <FamiliaMembro nome="Maria" sobrenome="Marinho"></FamiliaMembro>
                        <FamiliaMembro nome="Francisco"></FamiliaMembro>
                        <FamiliaMembro nome="João " sobrenome="Carlos"></FamiliaMembro>
                    </Familia>
                </Card>
                <Card titulo="Componente Repeticao" color="#083">
                    <Alunos></Alunos>
                </Card>

                <Card titulo="Tabela de produtos" color="#783">

                    <TabeladeProdutos></TabeladeProdutos>
                </Card>
                <Card titulo="Componente Condicional" color="#22222">
                    <ParOUImpar number={21}></ParOUImpar>
                    <UsuarioInfo usuario={{ nome: "José" }} ></UsuarioInfo>
                    <UsuarioInfo usuario={{ nome: "Toin" }} ></UsuarioInfo>
                    <UsuarioInfo usuario={{}} ></UsuarioInfo>
                </Card>
                <Card titulo="Componente Direto" color="#9999">
                    <Direta></Direta>
                </Card>
                <Card titulo="Componente Indireto" color="#9009">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="Componente Controlado" color="#1000">
                    <Input></Input>
                </Card>


                <Card titulo="Primeiro" color="#080">
                    <Primeiro></Primeiro>
                </Card>

                <Card titulo="Desafio Aleatorio" color="#FF5733">
                    <Aleatorio min={0} max={10} />
                </Card>

                <Card titulo="Fragmento" color="#3349FF">
                    <Fragmento />
                </Card>

                <Card titulo="Com Parâmetro" color="#E922EC">
                    <ComParametros titulo="Segundo Componente"
                        subtitulo="Situação do Aluno:"
                        nome="Maria" nota={7} />
                </Card>
            </div>
        </div >
    )
}
