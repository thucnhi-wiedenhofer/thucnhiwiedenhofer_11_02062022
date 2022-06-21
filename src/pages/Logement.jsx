import React from "react";
import { useLocation , NavLink} from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel";
import Description from "../components/Description/Description";
import Heading from "../components/Heading/Heading";

const Logement = () => {
    const location = useLocation();

    const data = location.state?.data;

    if(data !== undefined){
         return (
        <div key={data && data.id}>
            <Carrousel data={data}/>
            <Heading data={data}/>
            <Description data={data}/>
        </div>
        );
    }else{
        return(
        <div className="container-fluid">            
            <h1 className="error">404</h1>
            <h2 className="text-center m-4">Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink  to="/">
                <p className="backHome">Retourner sur la page d'accueil</p>
            </NavLink>
        </div>
        );
    }
};
export default Logement;