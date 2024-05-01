import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import DetalleCumplimientoActividadEquipo from "../pantallas/detalle_culminar/detalle_cumplimiento_actividad_equipo";


function CumplimientoEquipoActividadItem(props){

    const detalleCumplimientoActividadEquipoRender = () => {
        const root = ReactDOM.createRoot(document.getElementById('contenido'));
        root.render(
          <React.StrictMode>
            <DetalleCumplimientoActividadEquipo 
                nombre={props.nombre}
                descripcion={props.descripcion}/>
          </React.StrictMode>
        );
      };

    var descripcionRecortada;
    if(props.descripcion.length > 200){
        descripcionRecortada = props.descripcion.substr(0, 200);
        descripcionRecortada = descripcionRecortada + '...';
    }else{
        descripcionRecortada = props.descripcion;
    }
    return (
        <div class="col-lg-4 col-sm-6"
            style={{
                padding: 10
            }}>
            <div style={{
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: import.meta.env.VITE_BORDER_COLOR_CARDS,
                    borderRadius:15
                }}>
                <div style={{
                    backgroundColor: "#E5EEF0",
                    padding: 10,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0
                }}
                onClick={detalleCumplimientoActividadEquipoRender}>
                    <h5 class="card-title">{props.nombre}</h5>
                </div>
                <div style={{
                    padding: 10
                }}>
                    <p class="card-text">{descripcionRecortada}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{props.estado}</li>
                        <li class="list-group-item">{props.fecha}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
  }

  export default CumplimientoEquipoActividadItem;