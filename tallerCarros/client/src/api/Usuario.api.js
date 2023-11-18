import axios from 'axios'
export const getUsuarios = ()=>{
    return axios.get('http://localhost:8000/t/api/usuario/')
}

export const GetUsuariooAPI = (usuarioId)=>{
  return axios.get(`http://localhost:8000/t/api/usuario/${usuarioId}`)
  .then(response => {
    console.log('single usuario loaded exitosamente:', response);
    return response.data;
      // Add any additional logic you need after successful deletion
})
.catch(error => {
  console.error('Error cargando usuario:', error);
    // Handle errors as needed
});
}

export const DeleteUsuarioAPI = (id_usuario) => {
      // Call your deleteVehiculo function with the entered ID
    return axios.delete(`http://localhost:8000/t/api/usuario/${id_usuario}`)
    .then(response => {
        console.log('usuario borrado exitosamente:', response);
          // Add any additional logic you need after successful deletion
    })
    .catch(error => {
        console.error('Error borrando usuario:', error);
          // Handle errors as needed
    });
};

export const PostVehiculoAPI = (formData) => {
    axios.post('http://localhost:8000/t/api/usuario/', formData)
      .then(response => {
        console.log('usuario added successfully:', response);
        // Add any additional logic you need after successful addition
      })
      .catch(err => {
        console.error('Error adding un usuario:', err);
        setError(err.message || 'ocurrio un error durante la adicion.');
      });
  };

export const PutUsuarioAPI = (id_usuario, updatedData) => {
  return axios.put(`http://localhost:8000/t/api/usuario/${id_usuario}/`, updatedData)
    .then(response => {
      console.log('usuario fue actualizado:', response);
      // Add any additional logic you need after successful update
      return response.data; // You can choose to return some data if needed
    })
    .catch(error => {
      console.error('hubo un error tratando de actualizar usuario:', error);
      throw error; // Rethrow the error to propagate it to the caller
    });
};