import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Heading from "../components/Heading/Heading";


const Logement = () => {
    const location = useLocation();

    const data = location.state?.data;

    return (
    <div key={data && data.id}>
        <Header/>
        <Heading data={data}/>
        
    </div>
    );
};
export default Logement;