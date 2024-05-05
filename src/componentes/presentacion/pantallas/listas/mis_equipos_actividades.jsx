import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Table } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

import EquipoActividadItem from "../../items/equipo_actividad_item";
import HeaderGeneral from "../../../items_generales/header";
import Navbarsecundario from '../../../navegacion/navbar/navbar2.jsx';


function MisEquiposActividades(){
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true); 
    const { idequipo } = location.state;
    const [listaEquipoActividades, setEquipoActividades] = useState([]);

      useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/listarActividadesEquipo/' + idequipo, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Asegúrate de ajustar el tipo de contenido según lo que espera tu API
                }
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

    //NAVEGACION
    const misEquiposRender = () => {
        navigate('/misequipos');
      };
      const crearActividadEquipoRender = () => {
        navigate('/crearactividadequipo', { state: { idequipo: idequipo} });
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
                                <EquipoActividadItem 
                                    idequipo = {idequipo}
                                    idactividadequipo={itemActividad.actividadEquipo.idactividadequipo}
                                    nombre={itemActividad.actividad.nombre}
                                    fecha={itemActividad.fechaCulminacionTexto}
                                    cumplimiento={itemActividad.cumplimiento}
                                    descripcion={itemActividad.actividad.descripcion}
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

  export default MisEquiposActividades;