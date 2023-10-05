import './BackButton.css'
import { Link } from 'react-router-dom'

function BackButton(){
	return (
        <Link to='../' className='back-button'>
			Regresar
		</Link>
    );
}

export { BackButton }