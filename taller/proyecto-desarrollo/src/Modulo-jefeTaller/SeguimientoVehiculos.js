import React, { useState } from 'react';
import { vehiculos, clientes } from './CarrosData'; 
import './SeguimientoVehiculos.css'

function SeguimientoVehiculos() {
	const [vehiculosData, setVehiculosData] = useState(vehiculos);

	const actualizarEstadoVehiculo = (id, nuevoEstado) => {
		const nuevosVehiculos = vehiculosData.map((vehiculo) => {
		  if (vehiculo.id === id) {
			return { ...vehiculo, estado: nuevoEstado };
		  }
		  return vehiculo;
		});

		setVehiculosData(nuevosVehiculos);
	};

	const actualizarTiempoEstimado = (id, nuevoTiempoEstimado) => {
		const nuevosVehiculos = vehiculosData.map((vehiculo) => {
			if (vehiculo.id === id) {
				return { ...vehiculo, tiempoEstimado: nuevoTiempoEstimado };
		  	}
		  	return vehiculo;
		});
	
		setVehiculosData(nuevosVehiculos);
	};

	const actualizarSucursal = (id, nuevaSucursal) => {
		const nuevosVehiculos = vehiculosData.map((vehiculo) => {
			if (vehiculo.id === id) {
				return { ...vehiculo, ubicacion: nuevaSucursal };
			}
		  	return vehiculo;
		});
	
		setVehiculosData(nuevosVehiculos);
	};

	const handleChangeCliente = (clienteId, vehiculoId) => {
		const nuevosVehiculos = vehiculosData.map((vehiculo) => {
			if (vehiculo.id === vehiculoId) {
				return { ...vehiculo, clienteId };
		  	}
		  	return vehiculo;
		});
		setVehiculosData(nuevosVehiculos);
	};

	return (
		<div className="seguimiento-vehiculos-container">
			<h1 className="seguimiento-vehiculos-title">Seguimiento de Vehículos</h1>
    	  	<ul>
				{vehiculosData.map((vehiculo) => (
          			<li key={vehiculo.id} className="vehiculo-item">
            			<h2>{vehiculo.nombre}</h2>
            			<p>Estado: {vehiculo.estado}</p>
						<select
              				value={vehiculo.estado}
             				onChange={(e) => actualizarEstadoVehiculo(vehiculo.id, e.target.value)}
        				>
							<option value="En Reparación">En Reparación</option>
              				<option value="Esperando Piezas">Esperando Piezas</option>
              				<option value="Listo para Entrega">Listo para Entrega</option>
              				<option value="En Pruebas">En Pruebas</option>
						</select>
            			<p>Tiempo Estimado: {vehiculo.tiempoEstimado}</p>
						<select
              				value={vehiculo.tiempoEstimado}
              				onChange={(e) => actualizarTiempoEstimado(vehiculo.id, e.target.value)}
        				>
              				<option value="">Seleccionar Tiempo Estimado</option>
              				<option value="1 día">1 día</option>
              				<option value="2 días">2 días</option>
              				<option value="3 días">3 días</option>
              				<option value="Más de 3 días">Más de 3 días</option>
        				</select>
            			<p>Ubicación: {vehiculo.ubicacion}</p>
						<select
              				value={vehiculo.ubicacion}
             				onChange={(e) => actualizarSucursal(vehiculo.id, e.target.value)}
        				>
              				<option value="Cali calle 8a #34-67">Sucursal Cali</option>
              				<option value="Medellin carrera 78b #49-55">Sucursal Medellin</option>
              				<option value="Bogota calle 56 #11-20a">Sucursal Bogota</option>
        				</select>
						<p>Cliente: {vehiculo.clienteId} </p>
						<select
              				value={vehiculo.clienteId}
              				onChange={(e) => handleChangeCliente(parseInt(e.target.value), vehiculo.id)}
           				>
              				{clientes.map((cliente) => (
                				<option key={cliente.id} value={cliente.id}>
                  					{cliente.nombre}
                				</option>
              				))}
        				</select>
          			</li>
      			))}
    	  	</ul>

			<button className="volver-home-button" onClick={() => window.location.href = '/'}>Volver al Home</button>
		</div>
	);
}

export { SeguimientoVehiculos };
