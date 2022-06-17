import React from 'react';
import "./informations.css";

function Informations() {
  return (
    <div id="informations" className="container-fluid mt-5">
        <div className='row'>
            <div className='col-lg-1'></div>
            <div className="col-lg-10 col-md-12 col-sm-12 mb-4"> 
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fiability" aria-expanded="false">
                    Fiabilité
                </button>
                <div id="fiability" className="accordion-collapse collapse" aria-labelledby="fiability">
                    <div className="accordion-body">
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                    </div>
                </div>                              
            </div>
            <div className='col-lg-1'></div>   
        </div><div className='row'>
            <div className='col-lg-1'></div>
            <div className="col-lg-10 col-md-12 col-sm-12 mb-4"> 
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#respect" aria-expanded="false">
                    Respect
                </button>
                <div id="respect" className="accordion-collapse collapse" aria-labelledby="respect">
                    <div className="accordion-body">
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </div>
                </div>                              
            </div>
            <div className='col-lg-1'></div>   
        </div> 
        <div className='row'>
            <div className='col-lg-1'></div>
            <div className="col-lg-10 col-md-12 col-sm-12 mb-4"> 
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service" aria-expanded="false">
                    Service
                </button>
                <div id="service" className="accordion-collapse collapse" aria-labelledby="service">
                    <div className="accordion-body">
                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                    </div>
                </div>                              
            </div>
            <div className='col-lg-1'></div>   
        </div> 
        <div className='row'>
            <div className='col-lg-1'></div>
            <div className="col-lg-10 col-md-12 col-sm-12 mb-4"> 
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#safety" aria-expanded="false">
                    Sécurité
                </button>
                <div id="safety" className="accordion-collapse collapse" aria-labelledby="safety">
                    <div className="accordion-body">
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                    </div>
                </div>                              
            </div>
            <div className='col-lg-1'></div>   
        </div>         
    </div>
  );
};

export default Informations;