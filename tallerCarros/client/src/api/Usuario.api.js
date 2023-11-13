import axios from 'axios'
export const getUsuarios = ()=>{
    return axios.get('http://localhost:8000/t/api/v1/usuario/')
}

export function getUsuario(modelo){
    return axios.get('http://localhost:8000/t/api/v1/usuario/')
}