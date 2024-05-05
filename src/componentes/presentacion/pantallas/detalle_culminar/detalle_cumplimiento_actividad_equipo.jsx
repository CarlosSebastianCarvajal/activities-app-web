
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Table } from 'react-bootstrap';

import HeaderGeneral from "../../../items_generales/header";
import Navbarsecundario from "../../../navegacion/navbar/navbar2";



function DetalleCumplimientoActividadEquipo(){
    const navigate = useNavigate();
    const location = useLocation();
    const { idequipo, idintegrante, idactividadequipo, idcumplimiento } = location.state;

    const cumplimientoEquiposActividadesRender = () => {
        navigate('/cumplimientoequiposactividades', { state: { idequipo: idequipo, idintegrante: idintegrante} });
      };

      const [formData, setFormData] = useState({
        observacion: '',
        pathdocevidencia: ''
      });
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

      const handleSubmit = async () => {
        var data = JSON.stringify({
            idcumplimiento: idcumplimiento,
            observacion: formData.observacion,
            pathdocevidencia:'https://www.cuentosinfantiles.top/wp-content/uploads/cuentos_digital/Rapunzel.pdf'
            
          });
          console.log(data);
          //aqui la logica de guardado y navegar a la pantalla de lista actividad
          try {
            const response = await fetch('http://localhost:8080/cumplirActividadEquipo', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: data
            });
      
            if (!response.ok) {
                window.alert('Error al guardar cumplimiento');
              throw new Error('Error al guardar cumplimiento');
            }

            const respuesta = await response.json();
            if(respuesta != null){
              if(respuesta.access == 1){
                console.log(respuesta);
                window.alert(respuesta.message);
                navigate('/cumplimientoequiposactividades', { state: { idequipo: idequipo, idintegrante: idintegrante} });
              }else{
                window.alert(respuesta.message);    
                console.log(respuesta);
              }
            }
        }catch (error) {
            console.error('Error: ', error);
        }
      }


      //Para obtner el detalle de la actividad
    const [detalle, setDetalle] = useState([]);
    const[actividad, setActividad] = useState([]);
      useEffect(() => {
        const fetchData = async () => { 
            var data = JSON.stringify({
                idactividadequipo: idactividadequipo,
                idintegrante:idintegrante
            });

            try {
                const response = await fetch('http://localhost:8080/detalleActividadEquipoCumplimiento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: data
                });
        
                if (!response.ok) {
                throw new Error('Error al obtener el detalle');
                }
                const respuesta = await response.json();
                console.log(respuesta);
                if(respuesta.access == 1){
                      setDetalle(respuesta.info);
                      setActividad(respuesta.info.actividad);
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
            <HeaderGeneral titulo="Detalle de Actividad en Equipo"/>
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
                                        <button type="button" class="btn btn-light" onClick={cumplimientoEquiposActividadesRender}>Volver</button>
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
                <p align="left">Fecha límite: {detalle.fechaculminacion}</p>
                <p align="left">Estado: {detalle.estado}</p>
                <button type="button" class="btn btn-outline-info">Abrir Documento Guía</button>

                <form>
                    <div className="mb-3 form-check"></div>
                    <div className="mb-3">
                    <label htmlFor="observacion" className="form-label">OBSERVACIÓN</label>
                    <input type="text" className="form-control" id="observacion" name="observacion" value={formData.observacion} onChange={handleChange} placeholder="Ingrese observacion" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="pathdocevidencia" className="form-label">DOCUMENTO EVIDENCIA</label>
                    <input type="file" className="form-control" id="pathdocevidencia" name="pathdocevidencia" value={formData.pathdocevidencia} onChange={handleChange} placeholder="Subir documento" />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Registrar Cumplimiento</button>
                    <div className="mb-3 form-check"></div>
                    <div className="mb-3"></div>
                </form> 
                </div>
            </div>
        </div>
        </div>
    )
  }

  export default DetalleCumplimientoActividadEquipo;