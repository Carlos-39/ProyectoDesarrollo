import {Link} from 'react-router-dom'

function NavCliente(){
    return(
        <div>
            <Link to="/Cliente">
            <h1>Cliente page</h1>
            </Link>
            <Link to="/ClienteList">
                <h1>Cliente list</h1>
            </Link>
            <Link to="/DelCliente">
                <h1>borrar Cliente</h1>
            </Link> 
            <Link to="/PostCliente">
                <h1>crear Cliente</h1>
            </Link>
            <Link to="/PutCliente">
                <h1>modificar Cliente</h1>
            </Link>
        </div>
    )
}
export {NavCliente};