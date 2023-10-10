import {Link} from 'react-router-dom'

function Navigation(){
    return(
        <div>
            <h1>Task app</h1>
            <Link to="/">create task</Link>
            <Link to="/">
                <h1>all the world</h1>
            </Link>
        </div>
    )
}
export {Navigation};