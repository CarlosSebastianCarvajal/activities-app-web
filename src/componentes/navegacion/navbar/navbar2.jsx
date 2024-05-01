import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React, { useState , useContext, useEffect } from 'react';

import { UserContext } from '../../../usercontext.jsx';
import { useNavigate } from "react-router-dom";

function Navbarsecundario(){
  const navigate = useNavigate()
  const { userData } = useContext(UserContext);

  const cerrarSesion = () => {
    navigate('/');
  }

  const navegarHome = () => {
    navigate('/home');
  }
  const navegarMisActividades = () => {
    navigate('/misactividades');
  }
  const navegarEquiposTrabajo = () => {
    navigate('/equipostrabajo');
  }
  const navegarMisEquipos = () => {
    navigate('/misequipos');
  }

    return (
      <Navbar collapseOnSelect expand="lg"  bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand onClick={navegarHome}>ACTIVITIES APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={navegarHome}>Inicio</Nav.Link>
            <Nav.Link onClick={navegarMisActividades}>Mis Actividades</Nav.Link>
            <Nav.Link onClick={navegarEquiposTrabajo}>Equipos de Trabajo</Nav.Link>
            <Nav.Link onClick={navegarMisEquipos}>Mis Equipos</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={userData.userName} id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={cerrarSesion}>
                Cerrar Sesion
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navbarsecundario;