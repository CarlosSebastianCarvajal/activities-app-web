import React, { useState } from "react";

import { useNavigate } from "react-router-dom";


function ActividadPersonalItem(props){
    const navigate = useNavigate();

    const detalleActividadRender = () => {
        navigate('/detalleactividadpersonal', { state: { idactividadpersonal: props.id} });
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
            <div  style={{
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
                onClick={detalleActividadRender}
                >
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

  export default ActividadPersonalItem;