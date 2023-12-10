export function authenticateUser(email, password) {

	const userCredentials = [
		{email: 'gerente@gmail.com', password: '12345', userRole: 'Gerente'},
		{email: 'jefeTaller@gmail.com', password: '12345', userRole: 'Jefe de Taller'},
		{email: 'vendedor@gmail.com', password: '12345', userRole: 'Vendedor'},
		{email: 'cliente@gmail.com', password: '12345', userRole: 'Cliente'},
		{email: 'admin@gmail.com', password: '12345', userRole: 'Administrador'}
	  ];
	  
	  for (let user of userCredentials) {
		if (email === user.email && password === user.password) {
		  return user.userRole; // Autenticación exitosa, devuelve el rol del usuario
		}
	  }
	  
	  return false; // Autenticación fallida
}
  