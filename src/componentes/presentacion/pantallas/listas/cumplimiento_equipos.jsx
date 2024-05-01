import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import CumplimientoEquipoItem from "../../items/cumplimiento_equipo_item";
import HeaderGeneral from "../../../items_generales/header";
import { Table } from 'react-bootstrap';
import Home from "../principal/home";

function CumplimientoEquipos(){
    const homeRender = () => {
        const root = ReactDOM.createRoot(document.getElementById('contenido'));
        root.render(
          <React.StrictMode>
            <Home/>
          </React.StrictMode>
        );
      };

    return (
        <div>
            <HeaderGeneral titulo="Equipos de trabajo"/>
        <div class="container">
            <div>
                    <Table >
                        <thead>
                            <tr>
                                <th>
                                  
                                </th>
                                <th align="right">
                                </th>
                            </tr>
                        </thead>
                    </Table>
                </div>
            <div>
                <div className="divEspacio-15"></div>
                <div className="row">
                    <CumplimientoEquipoItem 
                        nombreEquipo="Equipo 11"
                        color="#F5533E"
                        descripcion="Pariatur cillum proident sit veniam dolor consectetur deserunt fugiat et. Lorem excepteur ipsum incididunt est ullamco tempor magna fugiat consequat esse velit incididunt excepteur sint. Proident nulla proident Lorem nisi et aliquip sint aliquip magna. Consequat deserunt laborum sit nostrud non enim minim. Mollit Lorem aliqua do deserunt deserunt voluptate sunt culpa fugiat. Aliqua non ullamco adipisicing occaecat aliquip."
                    />

                    <CumplimientoEquipoItem 
                        nombreEquipo="Equipo 12"
                        color="#D6F1FF"
                        descripcion="Pariatur cillum proident sit veniam dolor consectetur deserunt fugiat et. Lorem excepteur ipsum incididunt est ullamco tempor magna fugiat consequat esse velit incididunt excepteur sint. Proident nulla proident Lorem nisi et aliquip sint aliquip magna. Consequat deserunt laborum sit nostrud non enim minim. Mollit Lorem aliqua do deserunt deserunt voluptate sunt culpa fugiat. Aliqua non ullamco adipisicing occaecat aliquip."
                    />
                    <CumplimientoEquipoItem 
                        nombreEquipo="Equipo 13"
                        color="#31FF06"
                        descripcion="Pariatur cillum proident sit veniam dolor consectetur deserunt fugiat et. Lorem excepteur ipsum incididunt est ullamco tempor magna fugiat consequat esse velit incididunt excepteur sint. Proident nulla proident Lorem nisi et aliquip sint aliquip magna. Consequat deserunt laborum sit nostrud non enim minim. Mollit Lorem aliqua do deserunt deserunt voluptate sunt culpa fugiat. Aliqua non ullamco adipisicing occaecat aliquip."
                    />
                    
                </div>
            </div>
        </div>
        </div>
    )
  }

  export default CumplimientoEquipos;