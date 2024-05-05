import React, { useState,useEffect } from "react";

import { Table } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import HeaderGeneral from "./componentes/items_generales/header.jsx";
import Navbarvacio from './componentes/navegacion/navbar/navbar_vacio.jsx';

import { useNavigate } from 'react-router-dom'

function Register(){

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const handleCloseSave = () => {
        setShow(false);
        navigate('/');
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const irLogin = () => {
        navigate('/');
    }

    //Para obtner el pais
    const [countries, setCountries] = useState([]);
    //Para obtener la ciudad
    const [ciudades, setCiudades] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('http://localhost:8080/listarPais', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json', 
              }
              });
      
              if (!response.ok) {
              throw new Error('Error al obtener los paises');
              }
              const paises = await response.json();
              setCountries(paises);
              
              
          } catch (error) {
              console.error('Error al obtener los datos:', error);
          }
          };
      
          fetchData();
    }, []);

    return (
        <div>
            <Navbarvacio/>
            <HeaderGeneral titulo="Registrarse"/>
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
                                        <button type="button" class="btn btn-light" onClick={irLogin}>Volver</button>
                                    </p>
                                </th>
                            </tr>
                        </thead>
                    </Table>
                </div>

                <div className="divEspacio-15"></div>
                <div>
                <form>
                    <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">NOMBRE  DE LA ACTIVIDAD</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ingrese nombre de actividad" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">DESCRIPCIÓN</label>
                    <input type="text" className="form-control" id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Ingrese la descripción de la actividad" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="fechaculminacion" className="form-label">FECHA CULMINACIÓN</label>
                    <input type="date" className="form-control" id="fechaculminacion" name="fechaculminacion" value={formData.fechaculminacion} onChange={handleChange}  />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="idpais" className="form-label">PAÍS</label>
                    <select  className="form-control" id="idpais" name="idpais" value={formData.idpais} onChange={handleChange} >
                        {
                            countries.map(country => {
                                 return (
                                        <option key={country.idpais} value={country.idpais}>{country.nombre}</option>
                                    );
                            })
                        }
                    </select>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="idciudad" className="form-label">CIUDAD</label>
                    
                    </div>
                    <div className="mb-3">
                    <label htmlFor="pathdocguia" className="form-label">ARCHIVO GUÍA</label>
                    <input type="file" className="form-control" id="pathdocguia" name="pathdocguia" value={formData.pathdocguia} onChange={handleChange} />
                    </div>
                    <div className="mb-3 form-check">
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleShow}>Guardar Actividad Personal</button>
                </form> 

                <Form>
                    <Form.Group className="mb-3" controlId="nombres">
                        <Form.Label>NOMBRES</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese sus nombres" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="apellidos">
                        <Form.Label>APELLIDOS</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese sus apellidos" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="correo">
                        <Form.Label>CORREO</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su correo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="telefono">
                        <Form.Label>TELÉFONO</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su teléfono" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="fechanacimiento">
                        <Form.Label>FECHA DE NACIMIENTO</Form.Label>
                        <Form.Control type="date" placeholder="" />
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
                    <Form.Group className="mb-3" controlId="direccion">
                        <Form.Label>DIRECCIÓN</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su dirección" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contrasena">
                        <Form.Label>CONTRASEÑA</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese una contraseña"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="contrasenarep">
                        <Form.Label>REPITA LA CONTRASEÑA</Form.Label>
                        <Form.Control type="password" placeholder="Repita la contraseña"/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="b"></Form.Group>
                </Form>
                <Button variant="primary" onClick={handleShow}>
                    Guardar Datos
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Guardar Datos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Confirmar Registro !!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleCloseSave}>
                        Registrarse
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
  export default Register;