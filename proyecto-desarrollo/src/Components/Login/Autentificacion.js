export function authenticateUser(email, password) {

	const userCredentials = {
	  email: 'jefeTaller@gmail.com',
	  password: 'Jefe123',
	};
  
	if (email === userCredentials.email && password === userCredentials.password) {
	  return true; // Autenticación exitosa
	} else {
	  return false; // Autenticación fallida
	}
}
  