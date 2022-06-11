import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Page404 = () => {
    return (
    <div>
        <Header/>
        <div className="container-fluid">            
                <h1 className="error">404</h1>
                <h2 className="text-center m-4">Oups! La page que vous demandez n'existe pas.</h2>
                <NavLink  to="/">
                    <p className="backHome">Retourner sur la page d'accueil</p>
                </NavLink>
        </div>
        <Footer/>        
    </div>
    );
};

export default Page404;