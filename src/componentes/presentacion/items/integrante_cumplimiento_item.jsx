import React, { useState } from "react";

function IntegranteCumplimientoItem(props){

    var idActividadEquipo;
    idActividadEquipo = props.idActividadEquipo;
    
    return (
        <div class="col-lg-4 col-sm-6">
            <div class="card border-primary mb-3" >
                <div class="card-header" style={{
                    backgroundColor: "#D6DCDF",
                }}>
                    <h5 class="card-title">Nombre Integrante</h5>
                </div>
                
                <div class="card-body">
                    <p class="card-text">Observación: Mollit elit enim eu enim eu occaecat </p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Estado: Pendiente</li>
                        <button type="button" class="btn btn-outline-info">Documento Subido</button>
                    </ul>
                </div>
            </div>
        </div>
    )
  }

  export default IntegranteCumplimientoItem;