import React from 'react';
import { Routes, Route } from "react-router-dom";
import Apropos from './pages/Apropos';
import Home from './pages/Home';
import Logement from './pages/Logement';
import Page404 from './pages/Page404';

const App = () => {
  return (
  
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Apropos" element={<Apropos/>} />
      <Route path="/Logement/:id" element={<Logement/>} />
      {/* path="*" if url is not delared */}
      <Route path="*" element={<Page404/>} />
    </Routes>    
  
  );  
};

export default App;
