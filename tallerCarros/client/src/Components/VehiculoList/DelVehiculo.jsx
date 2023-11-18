import React, { useState } from 'react';
import { DeleteVehiculoAPI } from '../../api/Vehiculo.api';

const DeleteVehicleForm = () => {
  const [vehicleId, setVehicleId] = useState('');

  //esto llamara a la funcion del api
  const handleDelete = () => {
    DeleteVehiculoAPI(vehicleId)
      .then(response => {
        console.log('el vehiculo fue borrado:', response);
        // Add any additional logic you need after successful deletion
      })
      .catch(err => {
        console.error('Error mientras se borraba:', err);
        setError(err.message || 'el ejemplo manda 2 mensajes, no se para que es el segundo');
      });
  };

  return (
    <div>
      <h1>borrar un vehiculo</h1>
      <form>
        <label htmlFor="vehicleId">pon la id del vehiculo:</label>
        <input
          type="text"
          id="vehicleId"
          name="vehicleId"
          value={vehicleId}
          onChange={(e) => setVehicleId(e.target.value)}
          required
        />
        <button type="button" onClick={handleDelete}>Delete Vehicle</button>
      </form>
      <h1>{vehicleId} y muchas mas palabras</h1>
    </div>
  );
};

export function DelVehiculo() {
    return (
      <div>
        {/* Other components */}
        <DeleteVehicleForm />
      </div>
    );
  };
