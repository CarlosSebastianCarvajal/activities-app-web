import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import CumplimientoEquipoActividadItem from "../../items/cumplimiento_equipo_actividad_item";
import HeaderGeneral from "../../../items_generales/header";
import Navbarsecundario from "../../../navegacion/navbar/navbar2";

import { Table } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

function CumplimientoEquiposActividades(){
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true); 
    const { idequipo, idintegrante } = location.state;
    const [listaEquipoActividades, setEquipoActividades] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            var data = JSON.stringify({
                idequipo: idequipo,
                idintegrante:idintegrante
              });

              console.log('integrante: '+idintegrante);
            try {
                const response = await fetch('http://localhost:8080/listarActividadesEquipoCumplimiento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Asegúrate de ajustar el tipo de contenido según lo que espera tu API
                },
                body: data
                });
        
                if (!response.ok) {
                throw new Error('Error al obtener los datos');
                }
        
                const respuesta = await response.json();
                console.log(respuesta);
                if(respuesta.access == 1){
                    setEquipoActividades(respuesta.info);
                    setIsLoading(false);
                }else{
                    window.alert(respuesta.message);  
                    setIsLoading(false);
                    throw new Error(respuesta.message);
                }
                
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                setIsLoading(false);
            }
            };
        
            fetchData();
        }, []);

    const cumplimientoEquiposRender = () => {
        navigate('/equipostrabajo');
    };
    return (
        <div>
            <Navbarsecundario/>
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
                {
                    isLoading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                                <Spinner animation="border" role="status">
                                    <span className="sr-only"></span>
                                    
                                </Spinner>
                                <text>Cargando...</text>
                            </div>
                    ):(
                    listaEquipoActividades.map(itemActividad => {
                        return (
                                <CumplimientoEquipoActividadItem  
                                    idequipo = {idequipo}
                                    idintegrante = {idintegrante}
                                    idactividadequipo={itemActividad.idactividadequipo}
                                    idcumplimiento={itemActividad.idcumplimiento}

                                    nombre={itemActividad.actividad.nombre}
                                    descripcion={itemActividad.actividad.descripcion}
                                    fecha={itemActividad.fechaculminacion}
                                    estado={itemActividad.estado}
                                />
                        );
                    })
                    )
                } 
                </div>
            </div>
        </div>
        </div>
    )
  }

  export default CumplimientoEquiposActividades;