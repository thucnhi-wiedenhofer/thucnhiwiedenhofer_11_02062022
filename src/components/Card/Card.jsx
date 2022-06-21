import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import Logement from "../../pages/Logement";
import Page404 from "../../pages/Page404";

const Card = ({ data }) => {
    const Error = () => {
         if(`data && data.id`){
            return <Logement/>
         }
         return <Page404/>
    }

    return (
    <div className="card">        
        <Link key={data && data.id} to={`/Logement/${data && data.id}`} state={{data: data}}>            
            <img className="card-img" src={data && data.cover} alt={data && data.title}/>
            <div className="overlay">
                <h3 className="card-title">{data && data.title}</h3>
            </div>
        </Link>        
    </div>
    );
};
export default Card;