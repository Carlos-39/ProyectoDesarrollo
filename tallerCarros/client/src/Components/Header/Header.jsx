import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <header className='header-container' >
      <h1 className='titulo' >ELECTRO X </h1>
	    <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
		      <li>/</li>
          <li><Link to="/carros">Carros</Link></li>
		      <li>/</li>
          <li><Link to="/sucursales">Sucursales</Link></li>
		      <li>/</li>
		      <li><Link to="/taller">Taller</Link></li>
		      <li>/</li>
		      <li><Link to="/about-us">Sobre nosotros</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
