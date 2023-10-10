import {Link} from 'react-router-dom'

function Navigation(){
    return(
        <div>
            <h1>Task app</h1>
            <Link to="/">create task</Link>
            <Link to="/VehiculoList">
                <h1>vehicle list</h1>
            </Link>
        </div>
    )
}
export {Navigation};