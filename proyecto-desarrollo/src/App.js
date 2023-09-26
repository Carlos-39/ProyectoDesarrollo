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
      {/* <Routes>
        <Route path='/carros'>
        </Route>
      </Routes> */}

      <Buscador/>
      <Header/>
      <Slogan/>
      <TitleMainView/>
      <Main/>
      <BotonConoceMas/>
      <Footer/>
    </Router>
  );
}

function Prueba(){
  return (
    <div>
      <h1>Prueba</h1>
    </div>
  );
}

export default App;
