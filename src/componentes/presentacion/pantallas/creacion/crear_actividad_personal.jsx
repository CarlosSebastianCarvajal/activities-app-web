
import React, { useState, useContext, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../../../usercontext.jsx';

import { Table } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import HeaderGeneral from "../../../items_generales/header";
import Navbarsecundario from '../../../navegacion/navbar/navbar2.jsx';


function CrearActividadPersonal(){
    //contexto para los datos del usuario
    const { userData} = useContext(UserContext);
    
    const navigate = useNavigate();

    //datos que se obtiene del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        idpais:'',
        idciudad:'',
        fechaculminacion:'',
        pathdocguia:''
      });

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));

        if(name === 'idpais'){
            const fetchData = async () => {
                try {
                    const response = await fetch('http://localhost:8080/listarCiudadesPorIdPais/' + value, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', 
                    }
                    });
            
                    if (!response.ok) {
                    throw new Error('Error al obtener los paises');
                    }
                    const respuesta = await response.json();

                    if(respuesta != null){
                        if(respuesta.access == 1){
                          console.log(respuesta);
                          setCiudades(respuesta.info);
                        }else{
                          window.alert(respuesta.message);    
                          console.log(respuesta);
                        }
                      }
                    
                    
                } catch (error) {
                    console.error('Error al obtener los datos:', error);
                }
                };
            
                fetchData();
        }
      };

    const misActividadesRender = () => {
        navigate('/misactividades');
      };

      const [show, setShow] = useState(false);
      //envia a guardar
      const handleCloseSave = async () => {
        
          var data = JSON.stringify({
            idusuario: userData.userId,
            actividad: {
                nombre: formData.nombre,
                descripcion: formData.descripcion,
                idciudad: formData.idciudad,
                fechaculminacion:[
                    obtenerAnio(formData.fechaculminacion), 
                    obtenerMes(formData.fechaculminacion),  
                    obtenerDia(formData.fechaculminacion),
                ],
                pathdocguia:'https://www.cuentosinfantiles.top/wp-content/uploads/cuentos_digital/Rapunzel.pdf'
            }
          });
          console.log(data);
          //aqui la logica de guardado y navegar a la pantalla de lista actividad
          try {
            const response = await fetch('http://localhost:8080/guardarActividadPersonalActividad', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: data
            });
      
            if (!response.ok) {
                window.alert('Error al guardar la actividad');
              throw new Error('Error al guardar la actividad');
            }

            const respuesta = await response.json();
            if(respuesta != null){
              if(respuesta.access == 1){
                console.log(respuesta);
                window.alert(respuesta.message);
                navigate('/misactividades');
              }else{
                window.alert(respuesta.message);    
                console.log(respuesta);
              }
            }
          }catch (error) {
              console.error('Error: ', error);
          }
          setShow(false);
      }
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const obtenerAnio = (fecha) => {
        if (typeof fecha !== 'string' || fecha.length < 10) {
            window.alert('Por favor, selecione una fecha valida');
            throw new Error('La fecha proporcionada no es válida');
        }
        var anio = fecha.slice(0, 4);
        return parseInt(anio);
      };
      const obtenerMes = (fecha) => {
        if (typeof fecha !== 'string' || fecha.length < 10) {
            window.alert('Por favor, selecione una fecha valida');
            throw new Error('La fecha proporcionada no es válida');
        }
        var mes = fecha.slice(5, 7);
        return parseInt(mes);
      };
      const obtenerDia = (fecha) => {
        if (typeof fecha !== 'string' || fecha.length < 10) {
            window.alert('Por favor, selecione una fecha valida');
            throw new Error('La fecha proporcionada no es válida');
        }
        var dia = fecha.slice(8, 10);
        return parseInt(dia);
      };

      //Para obtner el pais
      const [countries, setCountries] = useState([]);
      //Para obtener la ciudad
      const [ciudades, setCiudades] = useState([]);


      useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/listarPais', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                }
                });
        
                if (!response.ok) {
                throw new Error('Error al obtener los paises');
                }
                const paises = await response.json();
                setCountries(paises);
                
                
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
            };
        
            fetchData();
    }, []);

    return (
        <div>
            <Navbarsecundario/>
            <HeaderGeneral titulo="Crear Actividad Personal"/>
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
                                        <button type="button" class="btn btn-light" onClick={misActividadesRender}>Volver</button>
                                    </p>
                                </th>
                            </tr>
                        </thead>
                    </Table>
                </div>

                <div className="divEspacio-15"></div>
                <div>
                <form>
                    <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">NOMBRE  DE LA ACTIVIDAD</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ingrese nombre de actividad" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">DESCRIPCIÓN</label>
                    <input type="text" className="form-control" id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Ingrese la descripción de la actividad" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="fechaculminacion" className="form-label">FECHA CULMINACIÓN</label>
                    <input type="date" className="form-control" id="fechaculminacion" name="fechaculminacion" value={formData.fechaculminacion} onChange={handleChange}  />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="idpais" className="form-label">PAÍS</label>
                    <select  className="form-control" id="idpais" name="idpais" value={formData.idpais} onChange={handleChange} >
                        {
                            countries.map(country => {
                                 return (
                                        <option key={country.idpais} value={country.idpais}>{country.nombre}</option>
                                    );
                            })
                        }
                    </select>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="idciudad" className="form-label">CIUDAD</label>
                    <select  className="form-control" id="idciudad" name="idciudad" value={formData.idciudad} onChange={handleChange}>
                        {
                            ciudades.map(ciudad => {
                                 return (
                                        <option key={ciudad.idciudad} value={ciudad.idciudad}>{ciudad.nombre}</option>
                                    );
                            })
                        }   
                    </select>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="pathdocguia" className="form-label">ARCHIVO GUÍA</label>
                    <input type="file" className="form-control" id="pathdocguia" name="pathdocguia" value={formData.pathdocguia} onChange={handleChange} />
                    </div>
                    <div className="mb-3 form-check">
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleShow}>Guardar Actividad Personal</button>
                </form> 

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Guardar Datos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Está seguro que desea guardar la actividad con los datos ingresados?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleCloseSave}>
                        Guardar
                    </Button>
                    </Modal.Footer>
                </Modal>

                <div style={{height:30}}></div>
                </div>
            </div>
        </div>
        </div>
    )
  }

  export default CrearActividadPersonal;