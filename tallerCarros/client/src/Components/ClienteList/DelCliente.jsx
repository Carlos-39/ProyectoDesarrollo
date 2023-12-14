import React, { useState } from 'react';
import { DeleteClienteAPI } from '../../api/Cliente.api';

const DeleteClienteForm = () => {
  const [id_cliente, setClienteId] = useState('');

  //esto llamara a la funcion del api
  const handleDelete = () => {
    DeleteClienteAPI(id_cliente)
      .then(response => {
        console.log('el Cliente fue borrado:', response);
        // Add any additional logic you need after successful deletion
      })
      .catch(err => {
        console.error('Error mientras se borraba:', err);
        setError(err.message || 'el ejemplo manda 2 mensajes, no se para que es el segundo');
      });
  };

  return (
    <div>
      <h1>borrar un Cliente</h1>
      <form>
        <label htmlFor="id_cliente">pon la id del Cliente:</label>
        <input
          type="text"
          id="id_cliente"
          name="id_cliente"
          value={id_cliente}
          onChange={(e) => setClienteId(e.target.value)}
          required
        />
        <button type="button" onClick={handleDelete}>Delete Cliente</button>
      </form>
      <h1>{id_cliente} y muchas mas palabras</h1>
    </div>
  );
};

export function DelCliente() {
    return (
      <div>
        {/* Other components */}
        <DeleteClienteForm />
      </div>
    );
  };
