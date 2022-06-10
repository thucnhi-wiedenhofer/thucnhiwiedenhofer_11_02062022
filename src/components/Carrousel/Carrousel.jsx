import React from "react";
import "./carrousel.css";

const Carrousel = ({data}) => {
    return (
    <div className="container-fluid">  
        <div className="carrousel">
        {data.pictures.map((slide, index) => (
            <img key={index} src={slide} alt={index}/>
                    
                    ))}     
           
        </div>
    </div>
    );
};
export default Carrousel;