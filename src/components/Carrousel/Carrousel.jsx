import React, { useState } from "react";
import "./carrousel.css";
import chevronRight from "../../assets/images/chevron-right.svg";
import chevronLeft from "../../assets/images/chevron-left.svg";

const Carrousel = ({data}) => {
    const totalSlides = data.pictures.length;

    const [currentSlide, setCurrentSlide] = useState(0);

    const previousSlide = () => { 
        setCurrentSlide( currentSlide === 0 ? totalSlides -1 : currentSlide - 1);
    };
    const nextSlide = () => {
        setCurrentSlide( currentSlide === totalSlides -1 ? 0 : currentSlide + 1);
    };

    
    return (
        
    <div className="container-fluid">  
        <div className="carrousel">
            
            {data.pictures.map((slide, index) => {
                return (
                    <div key={index}>
                    { index === currentSlide &&(
                        <img src={slide} alt={index}/>
                    )}                         
                    </div>
                );                       
            })}              
            
            <span className="counter">{currentSlide + 1}/{totalSlides}</span> 

            <img className="chevron right" src={chevronRight}  alt="précédent" 
            onClick={ nextSlide }/>

            <img className="chevron left" src={chevronLeft} alt="suivant" 
            onClick={ previousSlide }/>
        </div>
    </div>
    );
};
export default Carrousel;