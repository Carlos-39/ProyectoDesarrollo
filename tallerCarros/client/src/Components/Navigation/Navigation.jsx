import {Link} from 'react-router-dom'

function Navigation(){
    return(
        <div>
            <Link to="/Vehiculo">
            <h1>vehicle page</h1>
            </Link>
            <Link to="/VehiculoCreate">create task</Link>
            <Link to="/VehiculoList">
                <h1>vehicle list</h1>
            </Link>
        </div>
    )
}
export {Navigation};