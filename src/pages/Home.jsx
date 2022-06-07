import React from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Location from "../components/Location/Location";

const Home = () => {
    return <div>
        <Header/>
        <HomeBanner/>
        <Location/>
        <Card/>
    </div>;
}
export default Home;