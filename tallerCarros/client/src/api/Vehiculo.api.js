//we'll not use .jsx 'cause we'll execute an js portion
//that will send a petitoin to the backend. The backend
//will give us the data and we'll do what we want with that data

//axios: the library that allows us to make petitions
import axios from 'axios'
export const getVehiculos = ()=>{
    return axios.get('http://localhost:8000/vehiculo/api/v1/vehiculo/')
}