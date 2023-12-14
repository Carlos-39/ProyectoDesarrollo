import '../Sucursal/Sucursal.css'
import {useEffect,useState} from 'react';
import { GetClientes } from '../../api/Cliente.api';
import {ClienteCard} from './ClienteCard'
export function ClienteList(){
    const[Clientes,setCliente]=useState([])
    useEffect(()=> {
        console.log("pagina cargada");
        async function loadClientes(){
            const res= await GetClientes();
            console.log(res);
            setCliente(res.data);
        }
        loadClientes();
    },[]);
    return(
        <div className="sucursal-container">
            {Clientes.map(cliente =>(
                <ClienteCard key={cliente.id_cliente} cliente={cliente}/>
            ))}
        </div>
    )
}