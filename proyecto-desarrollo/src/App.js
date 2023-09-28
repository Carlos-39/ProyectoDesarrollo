import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Buscador } from './Buscador';
import { Header } from './Header';
import { Slogan } from './Slogan';
import { Title } from './Title';
import { Main } from './Main';
import { BotonConoceMas } from './BotonConoceMas';
import { Footer } from './Footer';
import { AboutUs } from './AboutUs';
import { Sucursal } from './Sucursal';
import sucursal1 from './sucursal1.jpg';
import sucursal2 from './sucursal2.jpg';
import sucursal3 from './sucursal3.jpg';

function App() {
  return (
    <Router>
      {/* organizacion de toda la pagina web */}
      {/* rutas para poder cambiar de vistas con sus respectivos renders */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/carros" element={<VistaCarros/>} />
        <Route path="/sucursales" element={<VistaSucursales/>} />
        <Route path="/taller" element={<VistaTaller/>} />
        <Route path="/about-us" element={<VistaAboutUs/>} />
        <Route path="/login" element={<VistaLogin/>} />
      </Routes>
    </Router>
  );
}

//Renderizado de la vista principal
function Home(){
  return (
    <div>
      <Buscador/>
      <Header/>
      <Slogan/>
      <Title title={'Ultimos Lanzamientos'}/>
      <Main/>
      <BotonConoceMas/>
      <Footer/>
    </div>
  );
}

//Renderizado de la vista de carros
function VistaCarros(){
  return (
    <div>
      <Buscador/>
      <Header/>
      <Title title={'Todos Nuestros Vehiculos'}/>
      <Footer/>
    </div>
  );
}

function VistaSucursales(){
  const imagenCali = sucursal1;
  const imagenMedellin = sucursal2;
  const imagenBogota = sucursal3;

  return (
    <div>
      <Buscador/>
      <Header/>
      <Title title={'Sucursales'}/>
      <Sucursal ciudad={'Cali'} direction={'Direccion: calle 8a #34-67'} numero={'Contacto: 3158746695'} jefeTaller={'Jefe de Taller: Isabella Corrales'} imagen={imagenCali} />
      <Sucursal ciudad={'Medellin'} direction={'Direccion: carrera 78b #49-55'} numero={'Contacto: 3218754620'} jefeTaller={'Jefe de Taller: Catalina Arango'} imagen={imagenMedellin} />
      <Sucursal ciudad={'Bogota'} direction={'Direccion: calle 56 #11-20a'} numero={'Contacto: 3121475628'} jefeTaller={'Jefe de Taller: Diego Camacho'} imagen={imagenBogota} />
      <Footer/>
    </div>
  );
}

function VistaTaller(){
  return (
    <div>
      <Buscador/>
      <Header/>
      <Title title={'Taller'}/>
      <Footer/>
    </div>
  );
}

function VistaAboutUs(){
  return (
    <div>
      <Buscador/>
      <Header/>
      <Title title={'Sobre Nosotros'}/>
      <Slogan/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

function VistaLogin(){
  return (
    <div>
      <h1>¡Bienvenido! Por favor, inicia sesión.</h1>
    </div>
  );
}

export default App;
