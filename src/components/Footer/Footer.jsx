import React from 'react';
import "./footer.css";
import logo from '../../assets/images/logo_footer.svg';

function Footer() {
  return (
    <div className='footer col-lg-12'>
        <img src={logo} alt="logo" width="122" height="39"/>
        <p>        
        © 2020 Kasa. All rights reserved 
        </p>
    </div>
  );
};

export default Footer;