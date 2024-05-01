import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import { Table } from 'react-bootstrap';

import MisEquipos from "./mis_equipos";
import CrearActividadEquipo from "../creacion/crear_actividad_equipo";
import EquipoActividadItem from "../../items/equipo_actividad_item";

import HeaderGeneral from "../../../items_generales/header";
import Navbarsecundario from '../../../navegacion/navbar/navbar2.jsx';


function MisEquiposActividades(){
    const misEquiposRender = () => {
        const root = ReactDOM.createRoot(document.getElementById('contenido'));
        root.render(
          <React.StrictMode>
            <MisEquipos/>
          </React.StrictMode>
        );
      };

      const crearActividadEquipoRender = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
            <CrearActividadEquipo/>
          </React.StrictMode>
        );
      };
    return (
        <div>
            <Navbarsecundario/>
            <HeaderGeneral titulo="Actividades del Equipo"/>
        <div class="container">
            <div>
                <div>
                    <Table >
                        <thead>
                            <tr>
                                <th>
                                    <p align="left"> 
                                        <button type="button" class="btn btn-info" onClick={crearActividadEquipoRender}>Crear Actividad de Equipo</button>
                                    </p>
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
                <div className="row">
                    <EquipoActividadItem 
                        nombre="Entregar Calificaciones del parcial"
                        fecha="23-02-2024"
                        cumplimiento="2/8"
                        descripcion="Pariatur cillum proident sit veniam dolor consectetur deserunt fugiat et. Lorem excepteur ipsum incididunt est ullamco tempor magna fugiat consequat esse velit incididunt excepteur sint. Proident nulla proident Lorem nisi et aliquip sint aliquip magna. Consequat deserunt laborum sit nostrud non enim minim. Mollit Lorem aliqua do deserunt deserunt voluptate sunt culpa fugiat. Aliqua non ullamco adipisicing occaecat aliquip."
                    />
                    <EquipoActividadItem 
                        nombre="Reunion de profesores en el auditorio"
                        fecha="22-02-2024"
                        cumplimiento="0/6"
                        descripcion="Pariatur cillum proident sit veniam dolor consectetur deserunt fugiat et. Lorem excepteur ipsum incididunt est ullamco tempor magna fugiat consequat esse velit incididunt excepteur sint. Proident nulla proident Lorem nisi et aliquip sint aliquip magna. Consequat deserunt laborum sit nostrud non enim minim. Mollit Lorem aliqua do deserunt deserunt voluptate sunt culpa fugiat. Aliqua non ullamco adipisicing occaecat aliquip."
                    />
                    <EquipoActividadItem 
                        nombre="Firma de documentacion"
                        fecha="24-02-2024"
                        cumplimiento="1/10"
                        descripcion="Pariatur cillum proident sit veniam dolor consectetur deserunt fugiat et. Lorem excepteur ipsum incididunt est ullamco tempor magna fugiat consequat esse velit incididunt excepteur sint. Proident nulla proident Lorem nisi et aliquip sint aliquip magna. Consequat deserunt laborum sit nostrud non enim minim. Mollit Lorem aliqua do deserunt deserunt voluptate sunt culpa fugiat. Aliqua non ullamco adipisicing occaecat aliquip."
                    />
             
                </div>
            </div>
        </div>
        </div>
    )
  }

  export default MisEquiposActividades;