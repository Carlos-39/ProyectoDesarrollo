//we'll not use .jsx 'cause we'll execute an js portion
//that will send a petitoin to the backend. The backend
//will give us the data and we'll do what we want with that data

//axios: the library that allows us to make petitions
import axios from 'axios'
export const getVehiculos = ()=>{
    return axios.get('http://localhost:8000/t/api/v1/vehiculo/')
}

export const GetVehiculoAPI = (vehicleId)=>{
  return axios.get(`http://localhost:8000/t/api/v1/vehiculo/${vehicleId}`)
  .then(response => {
    console.log('single Vehicle loaded successfully:', response);
      // Add any additional logic you need after successful deletion
})
.catch(error => {
    console.error('Error cargando vehiculo:', error);
      // Handle errors as needed
});
}

export const DeleteVehiculo = (vehicleId) => {
      // Call your deleteVehiculo function with the entered ID
    return axios.delete(`http://localhost:8000/t/api/v1/vehiculo/${vehicleId}`)
    .then(response => {
        console.log('Vehicle deleted successfully:', response);
          // Add any additional logic you need after successful deletion
    })
    .catch(error => {
        console.error('Error deleting vehicle:', error);
          // Handle errors as needed
    });
};

export const PostVehiculoAPI = (formData) => {
    axios.post('http://localhost:8000/t/api/v1/vehiculo/', formData)
      .then(response => {
        console.log('Vehicle added successfully:', response);
        // Add any additional logic you need after successful addition
      })
      .catch(err => {
        console.error('Error adding vehicle:', err);
        setError(err.message || 'An error occurred during addition.');
      });
  };

export const PutVehiculoAPI = (vehicleId, updatedData) => {
  return axios.put(`http://localhost:8000/t/api/v1/vehiculo/${vehicleId}/`, updatedData)
    .then(response => {
      console.log('Vehicle updated successfully:', response);
      // Add any additional logic you need after successful update
      return response.data; // You can choose to return some data if needed
    })
    .catch(error => {
      console.error('Error updating vehicle:', error);
      throw error; // Rethrow the error to propagate it to the caller
    });
};