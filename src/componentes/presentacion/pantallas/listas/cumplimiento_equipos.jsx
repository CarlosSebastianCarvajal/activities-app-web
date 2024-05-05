import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../../../usercontext.jsx';

import { Table } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

import HeaderGeneral from "../../../items_generales/header";
import Navbarsecundario from "../../../navegacion/navbar/navbar2";
import CumplimientoEquipoItem from "../../items/cumplimiento_equipo_item";


function CumplimientoEquipos(){
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true); 

    const [listaEquipos, setEquipos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/listarEquiposIngresados/' + userData.userId, {
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
                    //window.alert(respuesta.message);  
                    setIsLoading(false);
                    console.log(respuesta.message);
                    //throw new Error(respuesta.message);
                }
                
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                setIsLoading(false);
            }
            };
        
        fetchData();
    }, []);

    return (
        <div>
            <Navbarsecundario/>
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
                            <CumplimientoEquipoItem
                                idintegrante={itemEquipo.idintegrante}
                                idequipo={itemEquipo.equipo.idequipo} 
                                nombreEquipo={itemEquipo.equipo.nombre}
                                color={itemEquipo.equipo.color}
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

  export default CumplimientoEquipos;