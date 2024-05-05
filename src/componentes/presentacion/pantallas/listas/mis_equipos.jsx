import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../../../usercontext.jsx';

import { Table } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

import EquipoItem from "../../items/equipo_item";
import HeaderGeneral from "../../../items_generales/header";
import Navbarsecundario from '../../../navegacion/navbar/navbar2.jsx';


function MisEquipos(){
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true); 

    const [listaEquipos, setEquipos] = useState([]);

      useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/listarMisEquipos/' + userData.userId, {
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
                    setEquipos(respuesta.info);
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

    const crearEquipoTrabajoRender = () => {
        navigate('/crearequipo');
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
                {
                    isLoading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                                <Spinner animation="border" role="status">
                                    <span className="sr-only"></span>
                                    
                                </Spinner>
                                <text>Cargando...</text>
                            </div>
                    ):(
                    listaEquipos.map(itemEquipo => {
                        return (
                            <EquipoItem
                                idequipo={itemEquipo.equipo.idequipo} 
                                nombreEquipo={itemEquipo.equipo.nombre}
                                color={itemEquipo.equipo.color}
                                cantidadIntegrantes={itemEquipo.numeroIntegrantes}
                                descripcion={itemEquipo.equipo.descripcion}
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

  export default MisEquipos;