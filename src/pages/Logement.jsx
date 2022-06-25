import React from 'react';
import { useLocation } from 'react-router-dom';
import Carrousel from '../components/Carrousel/Carrousel';
import Description from '../components/Description/Description';
import Heading from '../components/Heading/Heading';
import Page404 from '../pages/Page404';

/* Use useLocation to get data from card component to display components of page logement.jsx
 If  data.id is undefined, redirection to Page404  */
const Logement = () => {
  const location = useLocation();

  const data = location.state?.data;

  if (data !== undefined) {
    return (
      <div key={data && data.id}>
        <Carrousel data={data} />
        <Heading data={data} />
        <Description data={data} />
      </div>
    );
  } else {
    return <Page404 />;
  }
};
export default Logement;
