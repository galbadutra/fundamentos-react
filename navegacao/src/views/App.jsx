import React from "react";
import { BrowserRouter, Route } from "react-router-dom"
import Content from "../components/layout/Content";
import Menu from "../components/layout/Menu";
import About from "./examples/About";
import './App.css'


const App = (props) => (
    <div className="App">
        <BrowserRouter>
            <Menu></Menu>
            <Content></Content>
        </BrowserRouter>


    </div>
)

export default App