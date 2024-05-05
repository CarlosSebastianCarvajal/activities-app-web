import React, { useState , useContext } from "react";
import { useNavigate } from "react-router-dom";


import { Table } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import HeaderGeneral from "../../../items_generales/header";
import Navbarsecundario from "../../../navegacion/navbar/navbar2";
import { UserContext } from '../../../../usercontext.jsx';

function CrearEquipo(){
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();

    const misEquiposRender = () => {
        navigate('/misequipos');
      };

      const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        color:'#cdeefe'
      });

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = async () => {}

    const [show, setShow] = useState(false);
    //Aqui se manda a guardar el equipo
    const handleCloseSave = async () => {
        setShow(false);
        
        console.log(formData);
        //logica de guardar y regresar
        const columnaCorreos = rows.map(row => row[0]);
        if(columnaCorreos.length === 0){
          window.alert('Por favor, agregue integrantes al equipo!');
          
        }else{
          var data = JSON.stringify({
              equipo:{
                idusuario: userData.userId,
                nombre:formData.nombre,
                descripcion:formData.descripcion,
                color:formData.color,
                patharchivo:'void'
              },
              correosintegrantes: columnaCorreos
            });
          console.log(data);
          try {
              const response = await fetch('http://localhost:8080/guardarEquipoIntegrantesListaCorreo', {
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
                  navigate('/misequipos');
                }else{
                  window.alert(respuesta.message);    
                  console.log(respuesta);
                }
              }
          }catch (error) {
              console.error('Error: ', error);
          }
        }
        
        //aqui la logica de guardado y navegar a la pantalla de lista actividad
        
        
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //FUNCIONES EXCLUSIVAS DE LA TABLA DINAMICA
    const [rows, setRows] = useState([]);

    const handleCellChange = (e, rowIndex, cellIndex) => {
      const newRows = [...rows];
      newRows[rowIndex][cellIndex] = e.target.value;
      setRows(newRows);
    };

    const addRow = () => {
      const newRow = Array.from({ length: rows.length > 0 ? rows[0].length : 1 }, (_, index) => ``);
      setRows([...rows, newRow]);
      //setRows([...rows, '']);
    };

    const removeRow = (index) => {
      const newRows = [...rows];
      newRows.splice(index, 1);
      setRows(newRows);
    };


    const exportToJson = () => {
      const columnaCorreos = rows.map(row => row[0]);
      const json = JSON.stringify(columnaCorreos);
      console.log(json);
    };

    return (
        <div>
            <Navbarsecundario/>
            <HeaderGeneral titulo="Crear Equipo"/>
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
                                        <button type="button" class="btn btn-light" onClick={misEquiposRender}>Volver</button>
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
                    <label htmlFor="nombre" className="form-label">NOMBRE  DEL EQUIPO</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ingrese nombre de equipo" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">DESCRIPCIÓN</label>
                    <input type="text" className="form-control" id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Ingrese descripcion del equipo" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="color" className="form-label">COLOR</label>
                    <input style={{width:400}} type="color" className="form-control" id="color" name="color" value={formData.color} onChange={handleChange} placeholder="Escoja un color" />
                    </div>

                    <div className="mb-3">
                      <label class="form-label"> AGREGAR CORREOS DE INTEGRANTES</label>
                      
                      <table class="table table-hover" >
                          <thead>
                                          <tr class="table-active">
                                              <th scope="col">Correo</th>
                                              <th 
                                              style={{ textAlign:'center' }}
                                              scope="col">Acción</th>
                                          </tr>
                          </thead>
                          <tbody>
                          {rows.map((row, rowIndex) => (
                              <tr key={rowIndex}>
                              {row.map((cell, cellIndex) => (
                                  <td key={cellIndex}>
                                  <input
                                      type="email"
                                      value={cell}
                                      onChange={(e) => handleCellChange(e, rowIndex, cellIndex)}
                                      className="form-control"
                                  />
                                  </td>
                              ))}
                              <td>
                                  <center>
                                      <button type="button" class="btn btn-outline-danger" style={{ width: '100px' }} onClick={() => removeRow(rowIndex)}>Quitar</button>
                                  </center>
                              </td>
                              </tr>
                          ))}
                          </tbody>
                      </table>
                      <div style={{ marginBottom: '10px' }}>
                          <button type="button" class="btn btn-outline-success" onClick={addRow} style={{ width: '100px' }}> Agregar </button>
                      </div>
                  </div>
                  <div className="divEspacio-15"></div>

                    


                    <div style={{height: 15}}></div>
                </form>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th align="right">
                                    <p align="right"> 
                                    <button type="button" className="btn btn-primary" onClick={handleShow}>Guardar Equipo de trabajo</button>
                                    </p>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
                
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Guardar Datos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Está seguro que desea guardar este equipo con los datos ingresados?</Modal.Body>
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
  export default CrearEquipo;
