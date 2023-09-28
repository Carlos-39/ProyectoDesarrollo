import './Sucursal.css'

function Sucursal({ciudad, direction, numero, jefeTaller, imagen}){
	return(
        <div className="sucursal-container">	
			<div className="information-container">
				<h1 className='h1-ciudad'>{ciudad}</h1>
				<p className='p-sucursal'>{direction}</p>
				<p className='p-sucursal'>{numero}</p>
				<p className='p-sucursal'>{jefeTaller}</p>
			</div>
			<div className="image-sucursal">
				<img src={imagen} alt='imagen de ciudad' />
			</div>
        </div>
    )
}

export { Sucursal }