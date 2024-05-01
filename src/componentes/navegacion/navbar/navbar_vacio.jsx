import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import React, { useState } from "react";

function NavbarVacio(){

    return (
      
      <Navbar collapseOnSelect expand="lg"  bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">ACTIVITIES APP</Navbar.Brand>
  
      </Container>
    </Navbar>

    )
}

export default NavbarVacio;