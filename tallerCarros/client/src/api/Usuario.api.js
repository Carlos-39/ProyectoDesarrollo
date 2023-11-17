//we'll not use .jsx 'cause we'll execute an js portion
//that will send a petitoin to the backend. The backend
//will give us the data and we'll do what we want with that data

//axios: the library that allows us to make petitions
import axios from 'axios'
export const getUsuarios = ()=>{
    return axios.get('http://localhost:8000/t/api/v1/usuario/')
}

export const DeleteUsuario = (vehicleId) => {
      // Call your deleteVehiculo function with the entered ID
    return axios.delete(`http://localhost:8000/t/api/v1/vehiculo/${id_usuario}`)
    .then(response => {
        console.log('usuario deleted successfully:', response);
          // Add any additional logic you need after successful deletion
    })
    .catch(error => {
        console.error('Error deleting usuario:', error);
          // Handle errors as needed
    });
};

export const PostVehiculoAPI = (formData) => {
    axios.post('http://localhost:8000/t/api/v1/usuario/', formData)
      .then(response => {
        console.log('usuario added successfully:', response);
        // Add any additional logic you need after successful addition
      })
      .catch(err => {
        console.error('Error adding usuario:', err);
        setError(err.message || 'An error occurred during addition.');
      });
  };

export const PutUsuarioAPI = (id_usuario, updatedData) => {
  return axios.put(`http://localhost:8000/t/api/v1/vehiculo/${id_usuario}/`, updatedData)
    .then(response => {
      console.log('usuario updated successfully:', response);
      // Add any additional logic you need after successful update
      return response.data; // You can choose to return some data if needed
    })
    .catch(error => {
      console.error('Error updating usuario:', error);
      throw error; // Rethrow the error to propagate it to the caller
    });
};