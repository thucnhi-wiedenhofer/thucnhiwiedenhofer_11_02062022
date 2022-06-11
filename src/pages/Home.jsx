import React from "react";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Location from "../components/Location/Location";

const Home = () => {
    return <div>
        <Header/>
        <HomeBanner/>
        <Location/>
        <Card/>
        <Footer/>
    </div>;
}
export default Home;