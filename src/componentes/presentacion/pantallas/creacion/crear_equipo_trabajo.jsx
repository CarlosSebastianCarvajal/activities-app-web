

import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import MisEquipos from "../listas/mis_equipos";

import { Table } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import HeaderGeneral from "../../../items_generales/header";



function CrearEquipo(){
    const misEquiposRender = () => {
        const root = ReactDOM.createRoot(document.getElementById('contenido'));
        root.render(
          <React.StrictMode>
            <MisEquipos/>
          </React.StrictMode>
        );
      };

    const [show, setShow] = useState(false);
    const handleCloseSave = () => {
        setShow(false);
        const root = ReactDOM.createRoot(document.getElementById('contenido'));
        root.render(
          <React.StrictMode>
            <MisEquipos/>
          </React.StrictMode>
        );
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return (
        <div>
            <HeaderGeneral titulo="Crear Equipo"/>
        <div class="container">
            <div>
                <div>
                    <Table >
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th align="right">
                                    <p align="right"> 
                                        <button type="button" class="btn btn-light" onClick={misEquiposRender}>Volver</button>
                                    </p>
                                </th>
                            </tr>
                        </thead>
                    </Table>
                </div>

                <div className="divEspacio-15"></div>
                <div>
                <Form>
                    <Form.Group className="mb-3" controlId="nombreActividad">
                        <Form.Label>NOMBRE  DEL EQUIPO</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese nombre del equipo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="descripcion">
                        <Form.Label>DESCRIPCIÓN</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese la descripción del equipo"/>
                    </Form.Group>
                    
               
                    <Form.Group className="mb-3" controlId="descripcion">
                        <Form.Label>ESCOJA EL COLOR</Form.Label>
                        <Form.Control style={{width:100}} type="color" placeholder="Ingrese la descripción del equipo"/>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="b"></Form.Group>
                </Form>
                <Button variant="primary" onClick={handleShow}>
                    Guardar Equipo de Trabajo
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Guardar Datos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Está seguro que desea guardar este equipo con los datos ingresados?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleCloseSave}>
                        Guardar
                    </Button>
                    </Modal.Footer>
                </Modal>
                <div style={{height:30}}></div>
                </div>
            </div>
        </div>
        </div>
    )
  }
  export default CrearEquipo;
