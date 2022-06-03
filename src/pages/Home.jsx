import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import Location from "../components/Location";

const Home = () => {
    return <div>
        <Header/>
        <HomeBanner/>
        <Location/>
        <Card/>
    </div>;
}
export default Home;