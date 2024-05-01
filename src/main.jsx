import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbarsecundario from './componentes/navegacion/navbar/navbar2.jsx'
import NavbarVacio from './componentes/navegacion/navbar/navbar_vacio.jsx'
import Home from './componentes/presentacion/pantallas/principal/home.jsx';
import Login from './login.jsx'

import { UserProvider } from './usercontext.jsx';

import { BrowserRouter } from 'react-router-dom';

var inicioSesion;
inicioSesion = false;

const rootPrincipal = ReactDOM.createRoot(document.getElementById('root'));

rootPrincipal.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
        <App/>
      </UserProvider>
      </BrowserRouter>
  </React.StrictMode>
);