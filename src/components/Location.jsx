import React, { useEffect, useState } from "react";
import axios from "axios";

const Location = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
       axios
        .get("annonces.json")
        .then((res) => setData(res.data))
        .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1>Location</h1>
        </div>
    );
};

export default Location;