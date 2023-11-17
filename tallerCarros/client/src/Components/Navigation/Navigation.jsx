import {Link} from 'react-router-dom'

function Navigation(){
    return(
        <div>
            <Link to="/Vehiculo">
            <h1>vehicle page</h1>
            </Link>
            <Link to="/VehiculoCreate">create task</Link>
            <Link to="/VList">
                <h1>v list</h1>
            </Link>
            <Link to="/SucursalList">
                <h1>lista sucursales</h1>
            </Link>
            <Link to="/DelVehiculo">
                <h1>borrar vehiculo</h1>
            </Link> 
            <Link to="/PostVehiculo">
                <h1>crear vehiculo</h1>
            </Link>
            <Link to="/PutVehiculo">
                <h1>modificar vehiculo</h1>
            </Link>
        </div>
    )
}
export {Navigation};