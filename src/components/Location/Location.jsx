import React, { useEffect, useState } from 'react';
import './location.css';
import axios from 'axios';
import Card from '../Card/Card';

/*  data of Json file are fetched by axios   */
const Location = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('annonces.json')
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container-fluid">
      <div className="location">
        {data.map((logement) => (
          <Card key={logement.id} data={logement} />
        ))}
      </div>
    </div>
  );
};

export default Location;
