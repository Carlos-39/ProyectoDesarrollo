import axios from 'axios'
export const getrepuestos = ()=>{
    return axios.get('http://localhost:8000/t/api/v1/repuesto/')
}

export function getrepuesto(modelo){
    return axios.get('http://localhost:8000/t/api/v1/repuesto/')
}