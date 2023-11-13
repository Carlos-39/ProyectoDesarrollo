import axios from 'axios'
export const getCotizaciones = ()=>{
    return axios.get('http://localhost:8000/t/api/v1/cotizaciones/')
}

export function getCotizacion(modelo){
    return axios.get('http://localhost:8000/t/api/v1/cotizaciones/')
}