import React, { useState , useContext, useEffect } from 'react';
import HeaderGeneral from './componentes/items_generales/header.jsx';
import Navbarvacio from './componentes/navegacion/navbar/navbar_vacio.jsx';

import { useNavigate } from 'react-router-dom'

import { UserContext } from './usercontext.jsx';

function Login() {

    const { userData, updateUser} = useContext(UserContext);
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        usuario: '',
        clave: ''
      });

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/iniciarSesion', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
      
            if (!response.ok) {
              throw new Error('Error al iniciar sesión');
            }

            const respuesta = await response.json();
            if(respuesta != null){
              if(respuesta.access == 1){
                console.log(respuesta);
                
                updateUser(
                  respuesta.info.usuario.idusuario,
                  respuesta.info.persona.nombres + ' ' + respuesta.info.persona.apellidos,
                );
              }else{
                //updateUser(0, 'sin respuesta');
                window.alert(respuesta.message);    
                console.log(respuesta);
              }
            }
        }catch (error) {
            
            console.error('Error: ', error);
        }
      };
      
      useEffect(() => {
        if(userData.userId != 0){
          console.log(userData);
          navigate('/home');
        }
        if(userData.userId == -1){
          navigate('/');
        }
      }, [userData]);
    

    const registerRender = () => {
        navigate('/register');
      };

  return (
    <div>
        <Navbarvacio/>
        <HeaderGeneral titulo="Inicio de sesión"/>

        <div style={{height:100}}></div>
        <div className='container' style={{position: 'relative'}}>
            <div style={{width:300, position:'absolute', top:'50%', left:'50%', margin:'-1px 0 0 -150px'}}>
                <form>
                    <div className="mb-3">
                    <label htmlFor="usuario" className="form-label">Nombre de usuario</label>
                    <input type="text" className="form-control" id="usuario" name="usuario" value={formData.usuario} onChange={handleChange} placeholder="Ingrese su usuario" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="clave" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="clave" name="clave" value={formData.clave} onChange={handleChange} placeholder="Contraseña" />
                    </div>
                    <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="keepLoggedIn" />
                    <label className="form-check-label" htmlFor="keepLoggedIn">Mantener sesión activa</label>
                    </div>
                    <button type="button" className="btn btn-primary" style={{width:'100%'}} onClick={handleSubmit}>Ingresar a la aplicación</button>
                    <div style={{height: 15}}></div>
                    <button type="button" className="btn btn-secondary" style={{width:'100%'}} onClick={registerRender}>Registrarse</button>
                </form> 
                
            </div>
        </div>
    </div>
  );
}

export default Login;