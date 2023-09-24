import './Footer.css'

function Footer() {
	return (
        <footer className="footer-container">
			<div className="footer-section">
        		<h3>Información de Contacto</h3>
        		<p>Teléfono: (+57 3215279458)</p>
        		<p>Email: ejemplo@email.com</p>
      		</div>

			<hr className="divisoria"/>

			<div className="footer-section enlaces-rapidos">
        		<h3>Enlaces Rápidos</h3>
        		<ul>
          			<li><a href="/">Inicio</a></li>
          			<li><a href="/carros">Carros</a></li>
          			<li><a href="/sucursales">Sucursales</a></li>
		      		<li><a href="/taller">Taller</a></li>
		      		<li><a href="/about-us">Sobre nosotros</a></li>
        		</ul>
      		</div>

			<hr className="divisoria"/>

			<div className="footer-section desarrolladores">
				<h3>Desarrollado por: </h3>
				<ul>
          			<li>nombre</li>
          			<li>nombre</li>
          			<li>nombre</li>
		      		<li>nombre</li>
		      		<li>nombre</li>
        		</ul>
      		</div>
		</footer>
    );
}

export { Footer }