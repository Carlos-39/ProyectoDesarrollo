import './AboutUs.css'
import imagen5 from '../../images/carro1.jpg';

function AboutUs(){
	return(
		<div className="AboutUs-container">
			<img src={imagen5} alt="imagen5" />
			<div className="AboutUs-content">
				<h2 className='h2-aboutUs'>Creando Magia desde 2023</h2>
				<p className='p-aboutUs'>Entra en un mundo de innovación y velocidad, donde tus sueños de conducir el auto perfecto se hacen realidad. En nuestro sitio no solo vendemos autos, creamos experiencias. Somos tu puerta de entrada al futuro de la movilidad</p>
			</div>
		</div>
	);
}

export { AboutUs };