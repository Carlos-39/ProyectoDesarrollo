const vehiculos = [
  {
    id: 1,
    nombre: 'FC50',
    estado: 'En el taller',
    tiempoEstimado: '2 días',
    ubicacion: 'Sucursal Cali',
	  clienteId: 1,
  },
  {
    id: 2,
    nombre: 'WH15000',
    estado: 'Listo para retirar',
    tiempoEstimado: '',
    ubicacion: 'Sucursal Medellin',
	clienteId: 2,
  },
];

const clientes = [
	{
	  id: 1,
	  nombre: 'Cliente #01',
	},
	{
	  id: 2,
	  nombre: 'Cliente #02',
	},
];

export { vehiculos };
export { clientes };