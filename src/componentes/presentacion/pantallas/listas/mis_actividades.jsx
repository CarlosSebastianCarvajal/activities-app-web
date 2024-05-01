import React, { useState, useEffect, useContext} from "react";
import { UserContext } from '../../../../usercontext.jsx';
import { useNavigate } from "react-router-dom";

import Navbarsecundario from '../../../navegacion/navbar/navbar2.jsx';
import HeaderGeneral from "../../../items_generales/header";

import ActividadPersonalItem from "../../items/actividad_personal_item";

import { Table } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

function MisActividades(){
    const navigate = useNavigate()
    const { userData } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true); 

    const crearActividadPersonalRender = () => {
        navigate('/crearactividadpersonal')
      };
    
      const fechaMapeada = (fecha) => {
        var meses = ['','Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Agosto', 'Noviembre', 'Diciembre']

        var dia = fecha[2];
        var mes = meses[fecha[1]];
        var anio = fecha[0];
        return dia+'/'+mes+'/'+anio;
      };

      const [listaActividades, setActividades] = useState([]);

      useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/listarActividadPersonalActividad/' + userData.userId, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Asegúrate de ajustar el tipo de contenido según lo que espera tu API
                }
                });
        
                if (!response.ok) {
                throw new Error('Error al obtener los datos');
                }
        
                const actividades = await response.json();
                console.log(actividades);
                if(actividades.access == 1){
                    setActividades(actividades.info);
                    setIsLoading(false);
                }else{
                    throw new Error(actividades.message);
                    setIsLoading(false);
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
           <HeaderGeneral titulo="Mis Actividades"/>
        <div class="container">
            <div>
                <div>
                    <Table >
                        <thead>
                            <tr>
                                <th>
                                    <p align="left"> 
                                        <button type="button" class="btn btn-info" 
                                        onClick={crearActividadPersonalRender}>Crear Actividad</button>
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
                    listaActividades.map(itemActividad => {
                        return (
                            <ActividadPersonalItem 
                                key={itemActividad.id}
                                id={itemActividad.id}
                                nombre={itemActividad.nombre}
                                fecha={fechaMapeada(itemActividad.fechaculminacion)}
                                estado={itemActividad.estado}
                                descripcion={itemActividad.descripcion}
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
  export default MisActividades;