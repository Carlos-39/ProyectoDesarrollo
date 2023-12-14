import axios from 'axios'
export const GetClientes = ()=>{
    return axios.get('http://localhost:8000/t/api/cliente/')
}

export const GetClienteAPI = (id_cliente)=>{
  return axios.get(`http://localhost:8000/t/api/cliente/${id_cliente}`)
  .then(response => {
    console.log('cliente indivdual cargado exitosamente:', response);
    return response.data;
      // Add any additional logic you need after successful deletion
})
.catch(error => {
  console.error('Error cargando cliente:', error);
    // Handle errors as needed
});
}

export const DeleteClienteAPI = (id_cliente) => {
      // Call your deleteVehiculo function with the entered ID
    return axios.delete(`http://localhost:8000/t/api/cliente/${id_cliente}`)
    .then(response => {
        console.log('usuario borrado exitosamente:', response);
          // Add any additional logic you need after successful deletion
    })
    .catch(error => {
        console.error('Error borrando usuario:', error);
          // Handle errors as needed
    });
};

export const PostClienteAPI = (formData) => {
    axios.post('http://localhost:8000/t/api/cliente/', formData)
      .then(response => {
        console.log('cliente añadido successfully:', response);
        // Add any additional logic you need after successful addition
      })
      .catch(err => {
        console.error('Error adding un cliente:', err);
        setError(err.message || 'ocurrio un error durante la adicion.');
      });
  };

export const PutClienteAPI = (id_cliente, updatedData) => {
  return axios.put(`http://localhost:8000/t/api/cliente/${id_cliente}/`, updatedData)
    .then(response => {
      console.log('cliente fue actualizado:', response);
      // Add any additional logic you need after successful update
      return response.data; // You can choose to return some data if needed
    })
    .catch(error => {
      console.error('hubo un error tratando de actualizar usuario:', error);
      throw error; // Rethrow the error to propagate it to the caller
    });
};