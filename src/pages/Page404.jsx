import React from "react";
import { NavLink } from "react-router-dom";

const Page404 = () => {
    return (
    <div>
        <div className="container-fluid">            
                <h1 className="error">404</h1>
                <h2 className="text-center m-4">Oups! La page que vous demandez n'existe pas.</h2>
                <NavLink  to="/">
                    <p className="backHome">Retourner sur la page d'accueil</p>
                </NavLink>
        </div>      
    </div>
    );
};

export default Page404;