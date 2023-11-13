import axios from 'axios'
export const getSucursales = ()=>{
    return axios.get('http://localhost:8000/t/api/v1/sucursal/')
}

export function getSucursal(modelo){
    return axios.get('http://localhost:8000/t/api/v1/sucursal/')
}