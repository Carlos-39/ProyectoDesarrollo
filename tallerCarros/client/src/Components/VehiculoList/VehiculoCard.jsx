

//{} means object destructuring, taking the vehiculo json from the response I think
export function VehiculoCard({vehiculo}){
    return(
        <div>
            <h1>{vehiculo.id_vehiculo}</h1>
            <h1>{vehiculo.modelo}</h1>
        </div>
    )
}