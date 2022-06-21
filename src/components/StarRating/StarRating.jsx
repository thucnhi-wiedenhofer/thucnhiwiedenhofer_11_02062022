import React from "react";
import "./starRating.css";
import activeStarIcon from '../../assets/images/active_star.svg';
import inactiveStarIcon from '../../assets/images/inactive_star.svg'; 

const StarRating = ({ data }) => {
    const rating = data.rating;
    const starChecked = parseInt(rating, 10);
    const inactiveStar = 5 - starChecked;

    return (
    <div className="star-rating">  
       
       {[...Array(starChecked)].map((star, index) => {  
            return (                  
                <span className="star" key={index} >
                    <img src={ activeStarIcon } alt="active star"/>
                </span> 
            );
        })}

        {[...Array(inactiveStar)].map((star, index) => {   
            return (                  
                <span className="star" key={index} >
                    <img src={ inactiveStarIcon } alt="inactive star"/>
                </span> 
            );
        })}  
    </div>
    );
}; 
export default StarRating;