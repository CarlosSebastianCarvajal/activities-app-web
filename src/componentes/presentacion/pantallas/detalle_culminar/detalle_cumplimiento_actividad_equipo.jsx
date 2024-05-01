
import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import MisActividades from "../listas/mis_actividades";

import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import HeaderGeneral from "../../../items_generales/header";
import CumplimientoEquiposActividades from "../listas/cumplimiento_equipos_actividades";



function DetalleCumplimientoActividadEquipo(props){
    const cumplimientoEquiposActividadesRender = () => {
        const root = ReactDOM.createRoot(document.getElementById('contenido'));
        root.render(
          <React.StrictMode>
            <CumplimientoEquiposActividades/>
          </React.StrictMode>
        );
      };
    return (
        <div>
            <HeaderGeneral titulo="Detalle de Actividad en Equipo"/>
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
                                        <button type="button" class="btn btn-light" onClick={cumplimientoEquiposActividadesRender}>Volver</button>
                                    </p>
                                </th>
                            </tr>
                        </thead>
                    </Table>
                </div>

                <div className="divEspacio-15"></div>
                <h1><center>{props.nombre}</center></h1>
                <div>
                <p align="justify">{props.descripcion}</p>
                <p align="left">Quevedo, Ecuador</p>
                <p align="left">Fecha límite: 26/02/2024</p>
                <p align="left">Estado: Pendiente</p>
                <button type="button" class="btn btn-outline-info">Abrir Documento Guía</button>
                <Form>
                <Form.Group className="mb-3" controlId="a" style={{height:40}}></Form.Group>
                
                
                    <Form.Group className="mb-3" controlId="observacionActividad">
                        <Form.Label>OBSERVACIÓN</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese observación" />
                    </Form.Group>
                    

                    <Form.Group className="mb-3" controlId="documentoEvidencia">
                        <Form.Label>DOCUMENTO EVIDENCIA</Form.Label>
                        <Form.Control type="file" placeholder="subir archivo" />
                    </Form.Group>

                   
                    <Button variant="primary" type="submit">
                        Registrar Cumplimiento
                    </Button>

                    <Form.Group className="mb-3" controlId="a"></Form.Group>
                </Form>
                </div>
            </div>
        </div>
        </div>
    )
  }

  export default DetalleCumplimientoActividadEquipo;