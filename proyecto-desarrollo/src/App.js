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

function App() {
  return (
    <Router>
      {/* organizacion de toda la pagina web */}
      {/* Buscador, Header, Footer son componentes que estaran en todas las vistas */}
      <Buscador/>
      <Header/>

      {/* rutas para poder cambiar de vistas con sus respectivos renders */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/carros" element={<VistaCarros/>} />
        <Route path="/sucursales" element={<VistaSucursales/>} />
        <Route path="/taller" element={<VistaTaller/>} />
        <Route path="/about-us" element={<VistaAboutUs/>} />
        <Route path="/login" element={<VistaLogin/>} />
      </Routes>

      <Footer/>
    </Router>
  );
}

//Renderizado de la vista principal
function Home(){
  return (
    <div>
      <Slogan/>
      <Title title={'Ultimos Lanzamientos'}/>
      <Main/>
      <BotonConoceMas/>
    </div>
  );
}

//Renderizado de la vista de carros
function VistaCarros(){
  return (
    <div>
      <Title title={'Todos Nuestros Vehiculos'}/>
    </div>
  );
}

function VistaSucursales(){
  return (
    <div>
      <Title title={'Sucursales'}/>
    </div>
  );
}

function VistaTaller(){
  return (
    <div>
      <Title title={'Taller'}/>
    </div>
  );
}

function VistaAboutUs(){
  return (
    <div>
      <Title title={'Sobre Nosotros'}/>
    </div>
  );
}

function VistaLogin(){
  return (
    <div>
    </div>
  );
}

export default App;
