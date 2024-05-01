import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import { Table } from 'react-bootstrap';

import CrearEquipo from "../creacion/crear_equipo_trabajo";
import EquipoItem from "../../items/equipo_item";
import HeaderGeneral from "../../../items_generales/header";
import Navbarsecundario from '../../../navegacion/navbar/navbar2.jsx';




function MisEquipos(){
    const crearEquipoTrabajoRender = () => {
        const root = ReactDOM.createRoot(document.getElementById('contenido'));
        root.render(
          <React.StrictMode>
            <CrearEquipo/>
          </React.StrictMode>
        );
      };
    return (
        <div>
            <Navbarsecundario/>
            <HeaderGeneral titulo="Mis Equipos"/>
        <div class="container">
            <div>
                <div>
                    <Table >
                        <thead>
                            <tr>
                                <th>
                                    <p align="left"> 
                                        <button type="button" class="btn btn-info" onClick={crearEquipoTrabajoRender}>Crear Equipo</button>
                                    </p>
                                </th>
                                <th align="right">
                                   
                                </th>
                            </tr>
                        </thead>
                    </Table>
                </div>
              
                <div className="divEspacio-15"></div>
                <div className="row">
                    <EquipoItem 
                        nombreEquipo="Equipo 1"
                        color="#FF6C3D"
                        cantidadIntegrantes="4 Integrantes"
                        descripcion="Pariatur cillum proident sit veniam dolor consectetur deserunt fugiat et. Lorem excepteur ipsum incididunt est ullamco tempor magna fugiat consequat esse velit incididunt excepteur sint. Proident nulla proident Lorem nisi et aliquip sint aliquip magna. Consequat deserunt laborum sit nostrud non enim minim. Mollit Lorem aliqua do deserunt deserunt voluptate sunt culpa fugiat. Aliqua non ullamco adipisicing occaecat aliquip."
                    />

                    <EquipoItem 
                        nombreEquipo="Equipo 2"
                        color="#D6DCFF"
                        cantidadIntegrantes="6 Integrantes"
                        descripcion="Pariatur cillum proident sit veniam dolor consectetur deserunt fugiat et. Lorem excepteur ipsum incididunt est ullamco tempor magna fugiat consequat esse velit incididunt excepteur sint. Proident nulla proident Lorem nisi et aliquip sint aliquip magna. Consequat deserunt laborum sit nostrud non enim minim. Mollit Lorem aliqua do deserunt deserunt voluptate sunt culpa fugiat. Aliqua non ullamco adipisicing occaecat aliquip."
                    />
                    <EquipoItem 
                        nombreEquipo="Equipo 2"
                        color="#3DFF46"
                        cantidadIntegrantes="8 Integrantes"
                        descripcion="Pariatur cillum proident sit veniam dolor consectetur deserunt fugiat et. Lorem excepteur ipsum incididunt est ullamco tempor magna fugiat consequat esse velit incididunt excepteur sint. Proident nulla proident Lorem nisi et aliquip sint aliquip magna. Consequat deserunt laborum sit nostrud non enim minim. Mollit Lorem aliqua do deserunt deserunt voluptate sunt culpa fugiat. Aliqua non ullamco adipisicing occaecat aliquip."
                    />
                    
                </div>
            </div>
        </div>
        </div>
    )
  }

  export default MisEquipos;