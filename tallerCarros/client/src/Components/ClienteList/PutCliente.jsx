import '../Sucursal/Sucursal.css'
import React, { useState, useEffect } from 'react';
import { PutClienteAPI } from '../../api/Cliente.api';
import { GetClienteAPI } from '../../api/Cliente.api';

const UpdateClienteForm = () => {
    const [clienteData, setClienteData] = useState({
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
      setClienteData({
        ...clienteData,
        [e.target.name]: e.target.value,
      });
    };

    const fillInfo = async () => {
      try {
        const id=clienteData.id_cliente;
        const auxVec = await GetClienteAPI(id);
        console.log('macarena');
        console.log(auxVec);
        setClienteData(auxVec);
      } catch (error) {
        console.error('Error updating Cliente info:', error);
        // Handle errors as needed
      }
    };
  
    const handleUpdate = () => {
        PutClienteAPI(clienteData.id_cliente, clienteData)
        .then(response => {
          console.log('se actualizo el Cliente y pone un mensaje para ellos si queres', response);
        })
        .catch(err => {
          console.error('hubo un error, diles que aprendar a escribir', err);
          setError(err.message || 'ocurrio un error, no se de que, pero estoy seguro de que el usuario tiene la culpa');
        });
    };
    
    return (
      <div className="information-container">
        <h1 className="information-container">Update Client</h1>
        <form>
          <div className="information-container">
            <label htmlFor="id_cliente">Cliente ID:</label>
            <input
              type="text"
              id="id_cliente"
              name="id_cliente"
              value={clienteData.id_cliente}
              onChange={handleInputChange}
              required
            />
            <button type="button" onClick={fillInfo}>get info del cliente</button>
          </div>
          <div className="information-container">
            <label htmlFor="docidentificacion">docidentificacion:</label>
            <input
              type="text"
              id="docidentificacion"
              name="docidentificacion"
              value={clienteData.docidentificacion}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='h1-ciudad'>
            <label htmlFor="nombre">nombre:</label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                value={clienteData.nombre}
                onChange={handleInputChange}
                required
            />
            </div>
        <div className='h1-ciudad'>
          <label htmlFor="apellido">apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={clienteData.apellido}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='h1-ciudad'>
          <label htmlFor="telefono">telefono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={clienteData.telefono}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='h1-ciudad'>
          <label htmlFor="email">email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={clienteData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='h1-ciudad'>
          <label htmlFor="direccion">direccion:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={clienteData.direccion}
            onChange={handleInputChange}
            required
          />
        </div>
          {/* Add similar input fields for other properties */}
          <button type="button" onClick={handleUpdate}>Update Cliente</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  };

export function PutCliente() {
    return (
      <div className="footer-section">
        {/* Other components */}
        <UpdateClienteForm />
      </div>
    );
  };