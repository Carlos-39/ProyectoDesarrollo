export function SucursalCard({sucursal}){
    return(
        <div>
            <h1>{sucursal.id_sucursal}</h1>
            <h1>{sucursal.nombre}</h1>
            <h1>{sucursal.direccion}</h1>
            <h1>{sucursal.telefono}</h1>
        </div>
    )
}