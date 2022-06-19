import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/logo.png";

const Header = () => {
    return (
    <div className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <span className="navbar-brand"> 
                <img src={logo} alt="logo" width="210" height="68"/>        
            </span>  
            <ul className="navbar-nav">
                
                <li className="nav-item">
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-item active" : "nav-item")}>
                        Accueil                
                    </NavLink>
                </li>
                
                    <li className="nav-item">
                    <NavLink to="/Apropos" className={(nav) => (nav.isActive ? "nav-item active" : "nav-item")}>
                        A propos
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
    );    
};

export default Header;