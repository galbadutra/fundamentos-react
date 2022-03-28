import './index.css'
import ReactDom from 'react-dom'
import React from 'react'
import App from './App'

//Opção 1
//const el = document.getElementById("root")
//ReactDom.render("Olá React!!!", el)


ReactDom.render(<App />, document.getElementById("root"))