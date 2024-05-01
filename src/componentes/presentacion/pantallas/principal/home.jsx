import React, { useState , useContext, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../../../../img/countpaper6.jpg';
import imagen2 from '../../../../img/img_carrusel6.jpg';
import imagen3 from '../../../../img/img_carrusel4.jpg';

import Navbarsecundario from '../../../navegacion/navbar/navbar2.jsx';

function Home() {

  return (
    <><Navbarsecundario/>
    <Carousel>
    <Carousel.Item>
      <img className='imgCarrusel'  src={imagen1} fluid />
      <Carousel.Caption>
        <h1 className='textoCarrusel2'>BIENVENIDO</h1>
        <p className='textoCarrusel2'>Esta es tu aplicación para gestionar tus actividades de cualquier ámbito.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className='imgCarrusel'  src={imagen2} fluid />
      <Carousel.Caption>
        <h3 className='textoCarrusel2'>EQUIPOS DE TRABAJO</h3>
        <p className='textoCarrusel2'>Crea equipos de trabajo y define actividades</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className='imgCarrusel'  src={imagen3} fluid />
      <Carousel.Caption>
      <div >
      <h3 className='textoCarrusel2'>ACTIVIDADES PERSONALES</h3>
        <p className='textoCarrusel2'>
          Gestiona tus activiades del día a día, activiades personales, de trabajo y demás 
        </p>
      </div>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </>
  );
}


export default Home;