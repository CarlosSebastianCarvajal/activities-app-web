import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import MisEquiposActividades from "../listas/mis_equipos_actividades";

import { Table } from 'react-bootstrap';

import HeaderGeneral from "../../../items_generales/header";
import IntegranteCumplimientoItem from "../../items/integrante_cumplimiento_item";



function DetalleActividadEquipo(props){
    const misEquiposActividadesRender = () => {
        const root = ReactDOM.createRoot(document.getElementById('contenido'));
        root.render(
          <React.StrictMode>
            <MisEquiposActividades/>
          </React.StrictMode>
        );
      };
    return (
        <div>
            <HeaderGeneral titulo="Detalle de Actividad del Equipo"/>
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
                                        <button type="button" class="btn btn-light" onClick={misEquiposActividadesRender}>Volver</button>
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
                <p align="left">Cumplimiento: 2/4</p>
                <button type="button" class="btn btn-info" >Abrir Documento Guía</button>
                <div style={{height:30}}></div>
                <div className="row">
                    <IntegranteCumplimientoItem
                        idActividadEquipo="1"
                    />
                    <IntegranteCumplimientoItem
                        idActividadEquipo="1"
                    />
                    <IntegranteCumplimientoItem
                        idActividadEquipo="1"
                    />
                    <IntegranteCumplimientoItem
                        idActividadEquipo="1"
                    />
                </div>
                </div>
            </div>
        </div>
        </div>
    )
  }

  export default DetalleActividadEquipo;