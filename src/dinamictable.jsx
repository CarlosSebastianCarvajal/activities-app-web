import React, { useState } from 'react';
import Navbarsecundario from './componentes/navegacion/navbar/navbar2';


const DynamicTable = () => {
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
    const columnLeftItems = rows.map(row => row[0]);
    const json = JSON.stringify(columnLeftItems);
    console.log(json);
  };

  return (
    <div>
        <Navbarsecundario/>
    <div className='container'>
        <div className="mb-3">
            <label class="form-label"> AGREGAR CORREO DE INTEGRANTES</label>
            <div style={{ marginBottom: '10px' }}>
                <button tyoe="button" class="btn btn-outline-success" onClick={addRow} style={{ width: '100px' }}> Agregar </button>
                <button onClick={exportToJson}>Exportar a JSON</button>
            </div>
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
                            type="text"
                            value={cell}
                            onChange={(e) => handleCellChange(e, rowIndex, cellIndex)}
                            className="form-control"
                        />
                        </td>
                    ))}
                    <td>
                        <center>
                            <button class="btn btn-outline-danger" style={{ width: '100px' }} onClick={() => removeRow(rowIndex)}>Quitar</button>
                        </center>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
      
    </div>
    </div>
    
  );
};

export default DynamicTable;