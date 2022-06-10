import React from "react";
import "./starRating.css";

const StarRating = ({ data }) => {
    const rating = data.rating;
    const starChecked = parseInt(rating, 10);

    return (
    <div className="mt-4">        
       <div className="star-rating">      
        {[...Array({starChecked})].map((star, index) => {   
            console.log(star);                
            return (                  
                <span className="star" key={index} data={star}>
                    <svg  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060"/>
                    </svg>
                </span> 
            );
        })}
    </div>
       
    </div>
    );
}; 
export default StarRating;