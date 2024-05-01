import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

//PAGINAS PRINCIPALES LISTAS
import Home from './componentes/presentacion/pantallas/principal/home.jsx';
import MisActividades from './componentes/presentacion/pantallas/listas/mis_actividades.jsx';
import MisEquipos from './componentes/presentacion/pantallas/listas/mis_equipos.jsx';
import CumplimientoEquipos from './componentes/presentacion/pantallas/listas/cumplimiento_equipos.jsx';
import Login from './login.jsx'
import Register from './register.jsx'

//PAGINAS CREACION
import CrearActividadPersonal from './componentes/presentacion/pantallas/creacion/crear_actividad_personal.jsx'

//Elemento principal
import Layout from './Layout.jsx'


function App() {

  return (
      <div>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/misactividades' element={<MisActividades/>}/>
            <Route path='/misequipos' element={<MisEquipos/>}/>
            <Route path='/equipostrabajo' element={<CumplimientoEquipos/>}/>
            <Route path='/*' element={<Home/>}/>

            <Route path='/crearactividadpersonal' element={<CrearActividadPersonal/>}/>
            
          </Route>
        </Routes>
      </div>
  )
}

export default App
