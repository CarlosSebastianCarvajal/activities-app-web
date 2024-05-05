import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Table } from 'react-bootstrap';

import Navbarsecundario from "../../../navegacion/navbar/navbar2";
import HeaderGeneral from "../../../items_generales/header";



function DetalleActividadEquipo(){
    const [isLoading, setIsLoading] = useState(true); 
    const navigate = useNavigate();
    const location = useLocation(); 
    const { idequipo, idactividadequipo } = location.state;
    console.log('el id actividad equipo : ' + idactividadequipo);
    const misEquiposActividadesRender = () => {
        navigate('/misequiposactividades', { state: { idequipo: idequipo} });
      };

      const recuperarArchivo = (url) => {
        if(url === 'void'){
            window.alert('este usuario no ha subido ningun archivo');
        }else{
            console.log(url);
        }
    
        //navigate('/misequiposactividades', { state: { idequipo: idequipo} });
      };

    //Para obtner el detalle de la actividad
    const [detalle, setDetalle] = useState([]);
    const [actividad, setActividad] = useState([]);
    const [listaCumplimiento, setListaCumplimiento] = useState([]);

    useEffect(() => {
      const fetchData = async () => { 
          try {
              const response = await fetch('http://localhost:8080/detalleActividadEquipo/' + idactividadequipo, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json', 
              }
              });
      
              if (!response.ok) {
              throw new Error('Error al obtener el detalle');
              }
              const respuesta = await response.json();
              //console.log(respuesta);
              if(respuesta.access == 1){
                    setDetalle(respuesta.info);
                    setActividad(respuesta.info.actividad);
                    setListaCumplimiento(respuesta.info.listaCumplimiento);
                }else{
                    throw new Error(respuesta.message);
                }              
              
          } catch (error) {
              console.error('Error al obtener los datos:', error);
          }
          };
      
          fetchData();
    }, []);

    return (
        <div>
            <Navbarsecundario/>
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
                <h1><center>{actividad.nombre}</center></h1>
                <div>
                <p align="justify">{actividad.descripcion}</p>
                <p align="left">{detalle.paisciudad}</p>
                <p align="left">Fecha límite: {detalle.actividadfechalimite}</p>
                <p align="left">Cumplimiento: {detalle.cumplimiento}</p>
                <button type="button" class="btn btn-info" >Abrir Documento Guía</button>
                <div style={{height:30}}></div>
                <div className="row">
                
                <table class="table table-hover">
                    <thead>
                        <tr class="table-active">
                            <th scope="col">Nombre Integrante</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Fecha Entregado</th>
                            <th scope="col">Observación</th>
                            <th scope="col">Documento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaCumplimiento.map(c => {
                        return (
                            <tr>
                                <th>{c.nombreintegrante}</th>
                                <td>{c.estado}</td>
                                <td>{c.fechacumplido}</td>
                                <td>{c.observacion}</td>
                                <td>
                                    <button 
                                        type="button" 
                                        class="btn btn-outline-info btn-sm" 
                                        onClick={() => recuperarArchivo(c.pathdocevidencia)}
                                    >Abrir Documento</button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
  }

  export default DetalleActividadEquipo;