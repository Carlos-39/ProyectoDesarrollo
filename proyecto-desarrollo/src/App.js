import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Buscador } from './Buscador';
import { Header } from './Header';
import { Slogan } from './Slogan';
import { TitleMainView } from './TitleMainView';
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
      <TitleMainView/>
      <Main/>
      <BotonConoceMas/>
    </div>
  );
}

//Renderizado de la vista de carros
function VistaCarros(){
  return (
    <div>
    </div>
  );
}

function VistaSucursales(){
  return (
    <div>
    </div>
  );
}

function VistaTaller(){
  return (
    <div>
    </div>
  );
}

function VistaAboutUs(){
  return (
    <div>
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
