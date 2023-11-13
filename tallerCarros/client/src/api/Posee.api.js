import axios from 'axios'
export const getPosees = ()=>{
    return axios.get('http://localhost:8000/t/api/v1/posee/')
}

export function getPosee(modelo){
    return axios.get('http://localhost:8000/t/api/v1/posee/')
}