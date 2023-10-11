import {useEffect,useState} from 'react'
import { getVehiculos } from '../../api/Vehiculo.api';
import {VehiculoCard} from './VehiculoCard'
export function VList(){
    const[Vehiculos,setVehiculo]=useState([])
    useEffect(()=> {
        console.log("pagina cargada");
        async function loadVehiculos(){
            const res= await getVehiculos();
            console.log(res);
            setVehiculo(res.data);
        }
        loadVehiculos();
    },[]);
    return(
        <div>
            {Vehiculos.map(vehiculo =>(
                <VehiculoCard key={vehiculo.id} vehiculo={vehiculo}/>
            ))}
        </div>
    )
}