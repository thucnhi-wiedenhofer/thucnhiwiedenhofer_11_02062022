import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/images/logo.png";

const Header = () => {
    return (
    <div className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <span className="navbar-brand"> 
                <img src={logo} alt="logo" width="210.32" height="68"/>        
            </span>  
            <ul className="navbar-nav">
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-item active" : "nav-item")}>
                    <li className="nav-item">Accueil</li>                
                </NavLink>
                <NavLink to="/Apropos" className={(nav) => (nav.isActive ? "nav-item active" : "nav-item")}>
                    <li className="nav-item">A propos</li>
                </NavLink>
            </ul>
        </div>
    </div>
    );    
};

export default Header;