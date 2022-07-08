import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Perfil from './components/Perfil/Perfil';
import PageFilmes from './components/PageFilmes/PageFilmes';

export default () =>{

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Perfil' element={<Perfil />} />
        <Route path='/Feature' element={<PageFilmes />} />
      </Routes>
    </Router>     
  ) 
}