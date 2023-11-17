import React, { useState } from 'react';
import { PutVehiculoAPI } from '../../api/Vehiculo.api';

const UpdateVehicleForm = () => {
    const [vehicleData, setVehicleData] = useState({
      id_vehiculo: '',
      marca: '',
      modelo: '',
      anio: '',
      disponibilidad: '',
      precio: '',
      color: '',
      descripcion: '',
    });
    const [error, setError] = useState(null);
  
    const handleInputChange = (e) => {
      setVehicleData({
        ...vehicleData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleUpdate = () => {
        PutVehiculoAPI(vehicleData.id_vehiculo, vehicleData)
        .then(response => {
          console.log('se actualizo el vehiculo y pone un mensaje para ellos si queres', response);
        })
        .catch(err => {
          console.error('hubo un error, diles que aprendar a escribir', err);
          setError(err.message || 'ocurrio un error, no se de que, pero estoy seguro de que el usuario tiene la culpa');
        });
    };
  
    return (
      <div>
        <h1>Update Vehicle</h1>
        <form>
          <div>
            <label htmlFor="id_vehiculo">Vehicle ID:</label>
            <input
              type="number"
              id="id_vehiculo"
              name="id_vehiculo"
              value={vehicleData.id_vehiculo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="marca">Marca:</label>
            <input
              type="text"
              id="marca"
              name="marca"
              value={vehicleData.marca}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="modelo">Modelo:</label>
            <input
                type="text"
                id="modelo"
                name="modelo"
                value={vehicleData.modelo}
                onChange={handleInputChange}
                required
            />
            </div>
        <div>
          <label htmlFor="anio">Año:</label>
          <input
            type="number"
            id="anio"
            name="anio"
            value={vehicleData.anio}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="disponibilidad">disponibilidad:</label>
          <input
            type="number"
            id="disponibilidad"
            name="disponibilidad"
            value={vehicleData.disponibilidad}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="precio">Precio:</label>
          <input
            type="number"
            id="precio"
            name="precio"
            value={vehicleData.precio}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            id="color"
            name="color"
            value={vehicleData.color}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={vehicleData.descripcion}
            onChange={handleInputChange}
            required
          />
        </div>
          {/* Add similar input fields for other properties */}
          <button type="button" onClick={handleUpdate}>Update Vehicle</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  };

export function PutVehiculo() {
    return (
      <div>
        {/* Other components */}
        <UpdateVehicleForm />
      </div>
    );
  };