import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";


const Logement = () => {
    const location = useLocation();
    const data = location.state?.data;

    return (
    <div key={data && data.id}>
        <Header/>
        <h1>{ data && data.title }</h1>
    </div>
    );
};
export default Logement;