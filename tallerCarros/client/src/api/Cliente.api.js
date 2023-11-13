import axios from 'axios'
export const getClientes = ()=>{
    return axios.get('http://localhost:8000/t/api/v1/cliente/')
}

export function getCliente(modelo){
    return axios.get('http://localhost:8000/t/api/v1/cliente/')
}