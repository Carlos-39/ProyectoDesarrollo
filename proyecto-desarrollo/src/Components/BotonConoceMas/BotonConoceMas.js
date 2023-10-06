import './BotonConoceMas.css'
import { Link } from 'react-router-dom';

function BotonConoceMas(){
	return(
		<div className='button-container'>
			<Link to="/carros">
				<button className='button'>Conoce más . . .</button>
			</Link>
		</div>
	);
}

export { BotonConoceMas };