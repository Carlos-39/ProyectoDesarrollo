import React from 'react';
import './App.css';
import { Buscador } from './Buscador';
import { Header } from './Header';
import { Slogan } from './Slogan';
import { Main } from './Main';
import { Footer } from './Footer';

function App() {
  return (
    <>
      <Buscador/>
      <Header/>
      <Slogan/>
      <Main/>
      <Footer/>
    </>
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
