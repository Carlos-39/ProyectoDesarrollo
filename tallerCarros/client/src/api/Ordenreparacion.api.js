import axios from 'axios'
export const getOrdenreparaciones = ()=>{
    return axios.get('http://localhost:8000/t/api/v1/ordenreparacion/')
}

export function getOrdenreparacion(modelo){
    return axios.get('http://localhost:8000/t/api/v1/ordenreparacion/')
}