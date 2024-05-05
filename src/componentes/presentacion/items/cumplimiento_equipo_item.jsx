import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function CumplimientoEquipoItem(props){
    const navigate = useNavigate();

    const cumplimientoEquiposActividadesRender = () => {
        navigate('/cumplimientoequiposactividades', { state: { idequipo: props.idequipo, idintegrante: props.idintegrante} });    
      };


    var descripcionRecortada;
    if(props.descripcion.length > 200){
        descripcionRecortada = props.descripcion.substr(0, 200);
        descripcionRecortada = descripcionRecortada + '...';
    }else{
        descripcionRecortada = props.descripcion;
    }
    return (
        <div class="col-lg-4 col-sm-6" style={{
            padding: 10
        }}>
            <div style={{
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: import.meta.env.VITE_BORDER_COLOR_CARDS_GRIS,
                    borderRadius:15
                }}>
                <div style={{
                    backgroundColor: props.color,
                    padding: 10,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0
                }}
                onClick={cumplimientoEquiposActividadesRender}
                >
                    <h5 class="card-title">{props.nombreEquipo}</h5>
                </div>
                <div style={{
                    padding: 10
                }}>
                    <p class="card-text">{descripcionRecortada}</p>
                    
                </div>
            </div>
        </div>
    )
  }

  export default CumplimientoEquipoItem;