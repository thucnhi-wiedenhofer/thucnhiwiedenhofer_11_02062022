import React from "react";
import StarRating from "../StarRating/StarRating";
import "./heading.css";

const Heading = ({ data }) => {
    console.log(data);

    return (
    <div className="container-fluid"> 
        <div className="row">
            <div className="col-lg-9 col-md-12 col-sm-12">
                <h2>{data && data.title}</h2>
                <h3>{data && data.location}</h3>
                <div className="mt-4">
                    {data.tags.map((logement, index) => (
                    <span className="badge rounded-pill" key={index}>{logement}</span>
                    ))}                                    
                </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="host">
                    <h3>{data && data.host.name}</h3>
                    <img src={data && data.host.picture} alt="profile avatar"/>
                </div>
                
                <div className="star-rating">
                    <StarRating data={data}/>
                </div>
            </div>
        </div>       
        
    </div>
    );
}; 

export default Heading;