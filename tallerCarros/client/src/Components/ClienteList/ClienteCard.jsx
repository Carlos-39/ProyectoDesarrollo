export function ClienteCard({cliente}){
    return(
        <div className="information-container">
            <h1 className='h1-ciudad'>{cliente.id_cliente}</h1>
            <h1>{cliente.docidentificacion}</h1>
            <h1>{cliente.nombre}</h1>
            <h1>{cliente.apellido}</h1>
            <h1>{cliente.telefono}</h1>
            <h1>{cliente.email}</h1>
            <h1>{cliente.direccion}</h1>
        </div>
    )
}