import React from "react";
import BannerAPropos from "../components/BannerAPropos/BannerAPropos";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Informations from "../components/Informations/Informations";

const Apropos = () => {
    return (
    <div>
        <Header/>
        <BannerAPropos/>
        <Informations/>
        <Footer/>
    </div>
    );
}; 
export default Apropos;