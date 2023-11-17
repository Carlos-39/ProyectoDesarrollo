import React, { useState } from 'react';
import { PostVehiculoAPI } from '../../api/Vehiculo.api';

const AddVehicleForm = () => {
  const [formData, setFormData] = useState({
    marca: '',
    modelo: '',
    anio: '',
    disponibilidad: 1,
    precio: '',
    color: '',
    descripcion: '',
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddVehicle = () => {
    PostVehiculoAPI(formData)
      .then(response => {
        console.log('se borro el carro', response);
        // Add any additional logic you need after successful deletion
      })
      .catch(err => {
        console.error('Error borrando, no se que paso', err);
        setError(err.message || ':( no se borro');
      });
  };

  return (
    <div>
      <h1>Add Vehicle</h1>
      <form>
        <div>
          <label htmlFor="marca">Marca:</label>
          <input
            type="text"
            id="marca"
            name="marca"
            value={formData.marca}
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
            value={formData.modelo}
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
            value={formData.anio}
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
            value={formData.precio}
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
            value={formData.color}
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
            value={formData.descripcion}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="button" onClick={handleAddVehicle}>Add Vehicle</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export function PostVehiculo() {
  return (
    <div>
      {/* Other components */}
      <AddVehicleForm />
    </div>
  );
};