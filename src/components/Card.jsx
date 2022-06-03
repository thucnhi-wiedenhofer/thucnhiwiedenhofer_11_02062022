import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
    console.log(data);
    return (
    <div className="card">
        <Link key={data && data.id} to={`/Logement/${data && data.id}`} state={{data: data}}>
            <h3 className="card-title">{data && data.title}</h3>
            <img className="card-img" src={data && data.cover} alt={data && data.title}/>
        </Link>        
    </div>
    );
};
export default Card;