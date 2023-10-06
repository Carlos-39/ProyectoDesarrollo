import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
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
import { Login } from './Components/Login/Login';
import { Link, useNavigate } from 'react-router-dom';
import { SeguimientoVehiculos } from './SeguimientoVehiculos'

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
        <Route path="/seguimiento-vehiculos" element={<SeguimientoVehiculos />} />
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
      {/* <CarroContainer/> */}
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

function VistaLogin(){
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/');
  };

  return (
    <div>
      <Login onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}

export default App;
