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
        </div>
    )
}
export {Navigation};