import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
	return (
        <footer className="footer-container">
			<div className="footer-section">
        		<h3>Información de Contacto</h3>
        		<p>Teléfono: (+57 3215279458)</p>
        		<p>Email: electrox@electro.com</p>
      		</div>

			<hr className="divisoria"/>

			<div className="footer-section enlaces-rapidos">
        		<h3>Enlaces Rápidos</h3>
        		<ul>
					<li><Link to="/">Inicio</Link></li>
					<li><Link to="/carros">Carros</Link></li>
					<li><Link to="/sucursales">Sucursales</Link></li>
					<li><Link to="/taller">Taller</Link></li>
					<li><Link to="/about-us">Sobre nosotros</Link></li>
        		</ul>
      		</div>

			<hr className="divisoria"/>

			<div className="footer-section desarrolladores">
				<h3>Desarrollado por: </h3>
				<ul>
          			<li>Electro X Team</li>
        		</ul>
      		</div>
		</footer>
    );
}

export { Footer }