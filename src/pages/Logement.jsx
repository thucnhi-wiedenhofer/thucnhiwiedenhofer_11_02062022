import React from "react";
import { useLocation } from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel";
import Description from "../components/Description/Description";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Heading from "../components/Heading/Heading";


const Logement = () => {
    const location = useLocation();

    const data = location.state?.data;

    return (
    <div key={data && data.id}>
        <Header/>
        <Carrousel data={data}/>
        <Heading data={data}/>
        <Description data={data}/>
        <Footer/>
    </div>
    );
};
export default Logement;