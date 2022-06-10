import React from "react";
import "./description.css";

const Description = ({ data }) => {   

    return (
    <div className="container-fluid">
        <div className="row description">  
            <div className="col-lg-6 col-md-12 col-sm-12 mb-3"> 
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#description" aria-expanded="false">
                    Description
                </button>
                <div id="description" className="accordion-collapse collapse" aria-labelledby="description">
                <div className="accordion-body">
                    {data.description}
                </div>
                </div>                              
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mb-3"> 
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#equipements" aria-expanded="false">
                    Equipements
                </button>
                <div id="equipements" className="accordion-collapse collapse" aria-labelledby="équipements">
                <div className="accordion-body">
                    
                    {data.equipments.map((item, index) => (
                    <li key={index}>{item}</li> 
                    ))}     
                </div>
                </div>                                
            </div>       
        </div>
    </div>
    
    );
}; 
export default Description;