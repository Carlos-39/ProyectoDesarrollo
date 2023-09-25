import './BotonConoceMas.css'
import { Link } from 'react-router-dom';

function BotonConoceMas(){
	return(
		<div className='button-container'>
			<Link to="/carros">
				<button className='button'>Conoce mas</button>
			</Link>
		</div>
	);
}

export { BotonConoceMas };