import './Carros.css'

function CarroContainer({carro}){
	return(
        <div className="carro-item">
            <img src={carro.imagen} alt={carro.nombre} className="carro-imagen"/>
            <h3 className="carro-nombre">{carro.nombre}</h3>
            <p className="carro-precio">${carro.precio}</p>
            <button className="cotizar-button">Cotizar</button>
        </div>
    )
}

export { CarroContainer }