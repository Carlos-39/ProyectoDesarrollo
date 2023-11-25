import axios from 'axios'
export const GetRepuestos = ()=>{
    return axios.get('http://localhost:8000/t/api/repuesto/')
}

export const GetRepuestolAPI = (id_repuesto)=>{
  return axios.get(`http://localhost:8000/t/api/repuesto/${id_repuesto}`)
  .then(response => {
    console.log('repuesto individual cargada exitosamente:', response);
    return response.data;
      // Add any additional logic you need after successful deletion
})
.catch(error => {
  console.error('Error cargando repuesto:', error);
    // Handle errors as needed
});
}

export const DeleteRepuestolAPI = (id_repuesto) => {
      // Call your deleteVehiculo function with the entered ID
    return axios.delete(`http://localhost:8000/t/api/repuesto/${id_repuesto}`)
    .then(response => {
        console.log('repuesto borrado exitosamente:', response);
          // Add any additional logic you need after successful deletion
    })
    .catch(error => {
        console.error('Error borrando repuesto:', error);
          // Handle errors as needed
    });
};

export const PostRepuestoAPI = (formData) => {
    axios.post('http://localhost:8000/t/api/repuesto/', formData)
      .then(response => {
        console.log('repuesto added successfully:', response);
        // Add any additional logic you need after successful addition
      })
      .catch(err => {
        console.error('Error agregando un repuesto:', err);
        setError(err.message || 'ocurrio un error durante la adicion.');
      });
  };

export const PutRepuestoAPI = (id_repuesto, updatedData) => {
  return axios.put(`http://localhost:8000/t/api/repuesto/${id_repuesto}/`, updatedData)
    .then(response => {
      console.log('repuesto fue actualizado:', response);
      // Add any additional logic you need after successful update
      return response.data; // You can choose to return some data if needed
    })
    .catch(error => {
      console.error('hubo un error tratando de actualizar repuesto:', error);
      throw error; // Rethrow the error to propagate it to the caller
    });
};