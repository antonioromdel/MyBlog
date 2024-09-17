import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Inicio from "../components/pages/Inicio";
import { Header } from "../components/layaout/Header";
import Nav from "../components/layaout/Nav";
import { Footer } from "../components/layaout/Footer";
import { Sidebar } from "../components/layaout/Sidebar";

const Rutas = () => {

    return (
       <BrowserRouter>

       <Header/>
       <Nav/>
            
            <section id="content" className="content">

                <Routes>
                    <Route path="/" element={<Inicio />} />D
                    <Route path="/" element={<Inicio />} />D
                    
                </Routes>
            </section>
            <Sidebar/>
            <Footer/>
       </BrowserRouter>
    )

}

export default Rutas
