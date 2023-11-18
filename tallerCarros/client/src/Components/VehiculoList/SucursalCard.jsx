export function SucursalCard({sucursal}){
    return(
        <div className="information-container">
            <h1 className='h1-ciudad'>{sucursal.id_sucursal}</h1>
            <h1>{sucursal.nombre}</h1>
            <h1>{sucursal.direccion}</h1>
            <h1>{sucursal.telefono}</h1>
        </div>
    )
}