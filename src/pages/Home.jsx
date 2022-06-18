import React from "react";
import Card from "../components/Card/Card";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Location from "../components/Location/Location";

const Home = () => {
    return(
     <div>       
        <HomeBanner/>
        <Location/>
        <Card/>       
    </div>   
    );     
}
export default Home;