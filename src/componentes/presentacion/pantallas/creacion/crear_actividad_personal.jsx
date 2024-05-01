
import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import MisActividades from "../listas/mis_actividades";
import { useNavigate } from "react-router-dom";

import { Table } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import HeaderGeneral from "../../../items_generales/header";
import Navbarsecundario from '../../../navegacion/navbar/navbar2.jsx';


function CrearActividadPersonal(){
    const navigate = useNavigate();

    const misActividadesRender = () => {
        navigate('/misactividades');
      };

      const [show, setShow] = useState(false);
      const handleCloseSave = () => {
          setShow(false);
          const root = ReactDOM.createRoot(document.getElementById('contenido'));
          root.render(
            <React.StrictMode>
              <MisActividades/>
            </React.StrictMode>
          );
      }
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

    return (
        <div>
            <Navbarsecundario/>
            <HeaderGeneral titulo="Crear Actividad Personal"/>
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
                                        <button type="button" class="btn btn-light" onClick={misActividadesRender}>Volver</button>
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
                        <Form.Label>NOMBRE  DE LA ACTIVIDAD</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el nombre de la actividad" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="descripcion">
                        <Form.Label>DESCRIPCIÓN</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese la descripción de la actividad"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="fechaCulminacion">
                        <Form.Label>FECHA CULMINACIÓN</Form.Label>
                        <Form.Control type="date" placeholder="Ingrese fecha de culminación"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pais">
                        <Form.Label>PAÍS</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Escoja el pais</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="ciudad">
                        <Form.Label>CIUDAD</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Escoja la ciudad</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="archivo">
                        <Form.Label>ARCHIVO GUÍA</Form.Label>
                        <Form.Control type="file" placeholder="Enter email" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="a"></Form.Group>
                </Form>
                <Button variant="primary" onClick={handleShow}>
                    Guardar Actividad Personal
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Guardar Datos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Está seguro que desea guardar la actividad con los datos ingresados?</Modal.Body>
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

  export default CrearActividadPersonal;