import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

import CumplimientoEquipoActividadItem from "../../items/cumplimiento_equipo_actividad_item";
import HeaderGeneral from "../../../items_generales/header";

import { Table } from 'react-bootstrap';
import CumplimientoEquipos from "./cumplimiento_equipos";

function CumplimientoEquiposActividades(){
    const cumplimientoEquiposRender = () => {
        const root = ReactDOM.createRoot(document.getElementById('contenido'));
        root.render(
        <React.StrictMode>
            <CumplimientoEquipos/>
        </React.StrictMode>
        );
    };
    return (
        <div>
            <HeaderGeneral titulo="Actividades a cumplir del equipo"/>
        <div class="container">
                <div>
                    <Table >
                        <thead>
                            <tr>
                                <th>
                            
                                </th>
                                <th align="right">
                                    <p align="right"> 
                                        <button type="button" class="btn btn-light" onClick={cumplimientoEquiposRender}>Volver</button>
                                    </p>
                                </th>
                            </tr>
                        </thead>
                    </Table>
                </div>
            <div className='divEspacio-15'></div>
            <div>
                <div className="divEspacio-15"></div>
                <div className="row">
                    <CumplimientoEquipoActividadItem 
                        nombre="Ir al Doctor"
                        fecha="23-02-2024"
                        estado="Pendiente"
                        descripcion="Pariatur cillum proident sit veniam dolor consectetur deserunt fugiat et. Lorem excepteur ipsum incididunt est ullamco tempor magna fugiat consequat esse velit incididunt excepteur sint. Proident nulla proident Lorem nisi et aliquip sint aliquip magna. Consequat deserunt laborum sit nostrud non enim minim. Mollit Lorem aliqua do deserunt deserunt voluptate sunt culpa fugiat. Aliqua non ullamco adipisicing occaecat aliquip."
                    />
                    <CumplimientoEquipoActividadItem 
                        nombre="Entrega de software"
                        fecha="23-02-2024"
                        estado="Pendiente"
                        descripcion="Pariatur cillum proident sit veniam dolor consectetur deserunt fugiat et. Lorem excepteur ipsum incididunt est ullamco tempor magna fugiat consequat esse velit incididunt excepteur sint. Proident nulla proident Lorem nisi et aliquip sint aliquip magna. Consequat deserunt laborum sit nostrud non enim minim. Mollit Lorem aliqua do deserunt deserunt voluptate sunt culpa fugiat. Aliqua non ullamco adipisicing occaecat aliquip."
                    />
                    <CumplimientoEquipoActividadItem 
                        nombre="Reunion con cliente"
                        fecha="23-02-2024"
                        estado="Pendiente"
                        descripcion="Pariatur cillum proident sit veniam dolor consectetur deserunt fugiat et. Lorem excepteur ipsum incididunt est ullamco tempor magna fugiat consequat esse velit incididunt excepteur sint. Proident nulla proident Lorem nisi et aliquip sint aliquip magna. Consequat deserunt laborum sit nostrud non enim minim. Mollit Lorem aliqua do deserunt deserunt voluptate sunt culpa fugiat. Aliqua non ullamco adipisicing occaecat aliquip."
                    />
                    <CumplimientoEquipoActividadItem 
                        nombre="Entregar informe de calificaciones"
                        fecha="15-02-2024"
                        estado="Cumplida"
                        descripcion="Magna fugiat consequat esse velit incididunt excepteur sint. Proident nulla proident Lorem nisi et aliquip sint aliquip magna. Consequat deserunt laborum sit nostrud non enim minim. Mollit Lorem aliqua do deserunt deserunt voluptate sunt culpa fugiat. Aliqua non ullamco adipisicing occaecat aliquip."
                    />
                </div>
            </div>
        </div>
        </div>
    )
  }

  export default CumplimientoEquiposActividades;