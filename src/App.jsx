import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

//PAGINAS PRINCIPALES INICIALES
import Login from './login.jsx'
import Register from './register.jsx'

//PAGINAS  LISTAS
import Home from './componentes/presentacion/pantallas/principal/home.jsx';
import MisActividades from './componentes/presentacion/pantallas/listas/mis_actividades.jsx';
import MisEquipos from './componentes/presentacion/pantallas/listas/mis_equipos.jsx';
import CumplimientoEquipos from './componentes/presentacion/pantallas/listas/cumplimiento_equipos.jsx';

import MisEquiposActividades from './componentes/presentacion/pantallas/listas/mis_equipos_actividades.jsx';
import CumplimientoEquiposActividades from './componentes/presentacion/pantallas/listas/cumplimiento_equipos_actividades.jsx';

//PAGINAS CREACION
import CrearActividadPersonal from './componentes/presentacion/pantallas/creacion/crear_actividad_personal.jsx'
import CrearActividadEquipo from './componentes/presentacion/pantallas/creacion/crear_actividad_equipo.jsx'
import CrearEquipo from './componentes/presentacion/pantallas/creacion/crear_equipo_trabajo.jsx'

//PAGINAS DETALLE
import DetalleActividadPersonal from './componentes/presentacion/pantallas/detalle_culminar/detalle_actividad_personal.jsx'
import DetalleActividadEquipo from './componentes/presentacion/pantallas/detalle_culminar/detalle_actividad_equipo.jsx';
import DetalleCumplimientoActividadEquipo from './componentes/presentacion/pantallas/detalle_culminar/detalle_cumplimiento_actividad_equipo.jsx';
//Elemento principal
import Layout from './Layout.jsx'

import DynamicTable from './dinamictable.jsx';


function App() {

  return (
      <div>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/misactividades' element={<MisActividades/>}/>
            <Route path='/misequipos' element={<MisEquipos/>}/>
            <Route path='/equipostrabajo' element={<CumplimientoEquipos/>}/>
            <Route path='/*' element={<Home/>}/>

            <Route path='/misequiposactividades' element={<MisEquiposActividades/>}/>
            <Route path='/cumplimientoequiposactividades' element={<CumplimientoEquiposActividades/>}/>

            <Route path='/crearactividadpersonal' element={<CrearActividadPersonal/>}/>
            <Route path='/crearactividadequipo' element={<CrearActividadEquipo/>}/>
            <Route path='/crearequipo' element={<CrearEquipo/>}/>

            <Route path='/detalleactividadpersonal' element={<DetalleActividadPersonal/>}/>
            <Route path='/detalleactividadequipo' element={<DetalleActividadEquipo/>}/>
            <Route path='/detallecumplimientoectividadequipo' element={<DetalleCumplimientoActividadEquipo/>}/>

            <Route path='/dynamictable' element={<DynamicTable/>}/>
          </Route>
        </Routes>
      </div>
  )
}

export default App
