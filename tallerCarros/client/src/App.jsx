import './App.css'
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import { Buscador } from './Components/Buscador/Buscador';
import { Header } from './Components/Header/Header';
import { Slogan } from './Components/Slogan/Slogan';
import { Title } from './Components/Title/Title';
import { Main } from './Components/Main/Main';
import { BotonConoceMas } from './Components/BotonConoceMas/BotonConoceMas';
import { Footer } from './Components/Footer/Footer';
import { AboutUs } from './Components/AboutUs/AboutUs';
import { Sucursal } from './Components/Sucursal/Sucursal';
import sucursal1 from './images/sucursal1.jpg';
import sucursal2 from './images/sucursal2.jpg';
import sucursal3 from './images/sucursal3.jpg';
// import { BackButton } from './Components/BackButton/BackButton';
// import { CarroContainer } from './CarroContainer';
// <Navigation />
import { Login } from './Components/Login/Login';
import { Link, useNavigate } from 'react-router-dom';
import { SeguimientoVehiculos } from './Modulo-jefeTaller/SeguimientoVehiculos';
import { SoonTitle } from './Components/SoonTitle/SoonTitle';


import { Navigation } from './Components/Navigation/Navigation';
import { VehiculoPage } from './Components/VehiculoList/VehiculoPage';
import { VehiculoFormPage } from './Components/VehiculoList/VehiculoFormPage';
import { Test22 } from './Components/VehiculoList/VehiculoFormPage';
import { VList } from './Components/VehiculoList/VList';
import { SucursalList } from './Components/VehiculoList/SucursalList';
import { DelVehiculo } from './Components/VehiculoList/DelVehiculo';
import { PostVehiculo } from './Components/VehiculoList/PostVehiculo';
import { PutVehiculo } from './Components/VehiculoList/PutVehiculo';

import { useTranslation} from 'react-i18next'

function App() {
  const {t, i18n} = useTranslation();
  const functionCambiarLenguaje = (leng) => {
    i18n.changeLanguage(leng)
  };

  const [logged, setLogged] = useState(false);
  const [userRole, setUserRole] = useState('');
    
  
  return (
    <>
    <p>{t("MENSAJE")}</p>
    <button onClick={() => functionCambiarLenguaje("es")}>Español</button>
    <button onClick={() => functionCambiarLenguaje("en")}>Inglés</button>
    <button onClick={() => functionCambiarLenguaje("pt")}>Portugues</button>
     <Router>
         
         <Routes>
        <Route path="/ad" element={<AdminPanel/>}/>
        <Route path="/Vehiculo" element={<VehiculoPage/>}/>
        <Route path="/VehiculoCreate" element={<VehiculoCreate/>}/>
        <Route path="/VList" element={<VList/>}/>
        <Route path="/SucursalList" element={<SucursalList/>}/>
        <Route path="/DelVehiculo" element={<DelVehiculo/>}/>
        <Route path="/PostVehiculo" element={<PostVehiculo/>}/>
        <Route path="/PutVehiculo" element={<PutVehiculo/>}/>

        <Route path="/" element={<Home userRole={userRole} logged={logged}/>}/>
        <Route path="/carros" element={<VistaCarros/>} />
        <Route path="/sucursales" element={<VistaSucursales/>} />
        <Route path="/taller" element={<VistaTaller/>} />
        <Route path="/about-us" element={<VistaAboutUs/>} />
        <Route path="/login" element={<VistaLogin setLogged={() => setLogged(true)} setUserRole={setUserRole} />} />
        <Route path="/seguimiento-vehiculos" element={<SeguimientoVehiculos />} />
      </Routes>
    </Router>
    </>
  );
}



//this will be a stand-in for 'app',
function AdminPanel(){
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/Vehiculo" element={<VehiculoPage/>}/>
      </Routes>
    </div>
  );
}
function VehiculoCreate(){
  return (
    <div>
      <VehiculoFormPage/>
      <Test22/>
    </div>
  );
}





function Home({logged, userRole}){
  return (
    <div>
      <Buscador userRole={userRole} logged={logged} />
      <Header/>
      <Slogan/>
      <Title title={'Últimos Lanzamientos'}/>
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
      <Title title={'Todos Nuestros Vehículos'}/>
      {/* <CarroContainer/> */}
      <SoonTitle title={'Coming Soon'}/>
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
      <Sucursal ciudad={'Cali'} direction={'Dirección: calle 8a #34-67'} numero={'Contacto: 3158746695'} jefeTaller={'Jefe de Taller: Isabella Corrales'} imagen={imagenCali} />
      <Sucursal ciudad={'Medellin'} direction={'Dirección: carrera 78b #49-55'} numero={'Contacto: 3218754620'} jefeTaller={'Jefe de Taller: Catalina Arango'} imagen={imagenMedellin} />
      <Sucursal ciudad={'Bogota'} direction={'Dirección: calle 56 #11-20a'} numero={'Contacto: 3121475628'} jefeTaller={'Jefe de Taller: Diego Camacho'} imagen={imagenBogota} />
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
      <Link to="/seguimiento-vehiculos">Ir a Seguimiento de Vehículos</Link>
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

function VistaLogin({setLogged, setUserRole}){
  const navigate = useNavigate();

  const handleLoginSuccess = (userRole) => {
    setUserRole(userRole)
    setLogged();
    navigate('/');
  };

  return (
    <div>
      <Login onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}

export default App;