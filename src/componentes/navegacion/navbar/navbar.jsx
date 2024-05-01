import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

import MisActividades from '../../presentacion/pantallas/listas/mis_actividades.jsx';
import MisEquipos from '../../presentacion/pantallas/listas/mis_equipos.jsx';
import CumplimientoEquipos from '../../presentacion/pantallas/listas/cumplimiento_equipos.jsx';
import Home from "../../presentacion/pantallas/principal/home.jsx";



function Navbarprincipal(){

  const homeRender = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <Home/>
      </React.StrictMode>
    );
  };

  const misActividadesRender = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <MisActividades/>
      </React.StrictMode>
    );
  };

  const misEquiposRender = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <MisEquipos/>
      </React.StrictMode>
    );
  };

  const cumplimientoEquiposRender = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <CumplimientoEquipos/>
      </React.StrictMode>
    );
  };

    return (
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">ACTIVITIES APP</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" 
                    href="#" 
                    onClick={homeRender} >Inicio
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  onClick={misActividadesRender}>Mis actividades</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                onClick={cumplimientoEquiposRender}>Equipos de Trabajo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                onClick={misEquiposRender}>Mis Equipos</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    )
}

export default Navbarprincipal;