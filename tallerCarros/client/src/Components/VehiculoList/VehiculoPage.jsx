import { VList } from './VList';
import {useEffect} from 'react';

export function VehiculoPage(){
useEffect(()=> {
    console.log("pagina cargada");
},[]);
    return(
        <VList/>
    )
}