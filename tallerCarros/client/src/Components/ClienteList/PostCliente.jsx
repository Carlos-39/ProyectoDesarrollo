import React, { useState } from 'react';
import { PostClienteAPI } from '../../api/Cliente.api';

const AddClienteForm = () => {
  const [formData, setFormData] = useState({
    id_cliente: '',
    docidentificacion: '',
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    direccion: '',
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCliente = () => {
    PostClienteAPI(formData)
      .then(response => {
        console.log('se agrego el cliente', response);
        // Add any additional logic you need after successful deletion
      })
      .catch(err => {
        console.error('Error creando, no se que paso', err);
        setError(err.message || ':( no se creo');
      });
  };

  return (
    <div>
      <h1>Add cliente</h1>
      <form>
        <div>
          <label htmlFor="id_cliente">Marca:</label>
          <input
            type="text"
            id="id_cliente"
            name="id_cliente"
            value={formData.id_cliente}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="docidentificacion">Modelo:</label>
          <input
            type="text"
            id="docidentificacion"
            name="docidentificacion"
            value={formData.docidentificacion}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="nombre">Año:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="apellido">Precio:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="telefono">Color:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Descripción:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="direccion">Descripción:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="button" onClick={handleAddCliente}>Add Cliente</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export function PostCliente() {
  return (
    <div>
      {/* Other components */}
      <AddClienteForm />
    </div>
  );
};