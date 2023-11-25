import axios from 'axios'
export const GetSucursales = ()=>{
    return axios.get('http://localhost:8000/t/api/sucursal/')
}

export const GetSucursalAPI = (id_sucursal)=>{
  return axios.get(`http://localhost:8000/t/api/sucursal/${id_sucursal}`)
  .then(response => {
    console.log('sucursal individual cargada exitosamente:', response);
    return response.data;
      // Add any additional logic you need after successful deletion
})
.catch(error => {
  console.error('Error cargando sucursal:', error);
    // Handle errors as needed
});
}

export const DeleteSucursalAPI = (id_sucursal) => {
      // Call your deleteVehiculo function with the entered ID
    return axios.delete(`http://localhost:8000/t/api/sucursal/${id_sucursal}`)
    .then(response => {
        console.log('sucursal borrado exitosamente:', response);
          // Add any additional logic you need after successful deletion
    })
    .catch(error => {
        console.error('Error borrando sucursal:', error);
          // Handle errors as needed
    });
};

export const PostSucursalAPI = (formData) => {
    axios.post('http://localhost:8000/t/api/sucursal/', formData)
      .then(response => {
        console.log('sucursal added successfully:', response);
        // Add any additional logic you need after successful addition
      })
      .catch(err => {
        console.error('Error agregando una sucursal:', err);
        setError(err.message || 'ocurrio un error durante la adicion.');
      });
  };

export const PutSucursalAPI = (id_sucursal, updatedData) => {
  return axios.put(`http://localhost:8000/t/api/sucursal/${id_sucursal}/`, updatedData)
    .then(response => {
      console.log('sucursal fue actualizado:', response);
      // Add any additional logic you need after successful update
      return response.data; // You can choose to return some data if needed
    })
    .catch(error => {
      console.error('hubo un error tratando de actualizar usuario:', error);
      throw error; // Rethrow the error to propagate it to the caller
    });
};