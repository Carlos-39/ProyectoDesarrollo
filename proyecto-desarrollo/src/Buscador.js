import './Buscador.css'
import LupaIcon from './lupa.png'

function Buscador(){
	return(
		<div className="buscador-container">
			<input type="search" placeholder="Busca tu carro" className="Buscador"/>
			<img src={LupaIcon} alt="Lupa" className='lupa-icono'/>
		</div>
	);
}

export { Buscador };