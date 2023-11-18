import '../Sucursal/Sucursal.css'
import {useEffect,useState} from 'react';
import { GetSucursales } from '../../api/Sucursal.api';
import {SucursalCard} from './SucursalCard'
export function SucursalList(){
    const[Sucursales,setSucursal]=useState([])
    useEffect(()=> {
        console.log("pagina cargada");
        async function loadSucursales(){
            const res= await GetSucursales();
            console.log(res);
            setSucursal(res.data);
        }
        loadSucursales();
    },[]);
    return(
        <div className="sucursal-container">
            {Sucursales.map(sucursal =>(
                <SucursalCard key={sucursal.id_sucursal} sucursal={sucursal}/>
            ))}
        </div>
    )
}