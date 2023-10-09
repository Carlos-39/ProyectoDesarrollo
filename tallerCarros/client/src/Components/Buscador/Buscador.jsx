import './Buscador.css'
import { Link } from 'react-router-dom'
import LupaIcon from '../../images/lupa.png'

function Buscador(){
	return(
		<div className="section-container">
			<div className="search-container">
				<div className="search-content">
					<input type="search" placeholder="Buscate" className="Buscador"/>
					<img src={LupaIcon} alt="Lupa" className='lupa-icono'/>
				</div>
			</div>

			<div className="login-container">
				<div className="login-content">
					<Link to="./login" className="login-button">Acceder</Link>
				</div>
			</div>
		</div>
	);
}

export { Buscador };