import React from "react";
import "./starRating.css";

const StarRating = ({ data }) => {
    console.log(data);
    return (
    <div>
       {data.rating} 
       
    </div>
    );
}; 
export default StarRating;