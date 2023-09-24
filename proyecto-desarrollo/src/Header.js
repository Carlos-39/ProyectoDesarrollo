import './Header.css'

function Header() {
  return (
    <header className='header-container' >
      <h1 className='titulo' >ELECTRO X </h1>
	  <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
		  <li>/</li>
          <li><a href="/carros">Carros</a></li>
		  <li>/</li>
          <li><a href="/sucursales">Sucursales</a></li>
		  <li>/</li>
		  <li><a href="/taller">Taller</a></li>
		  <li>/</li>
		  <li><a href="/about-us">Sobre nosotros</a></li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
