export function authenticateUser(email, password) {

	const userCredentials = {
	  email: 'usuario@gmail.com',
	  password: 'cliente123',
	};
  
	if (email === userCredentials.email && password === userCredentials.password) {
	  return true; // Autenticación exitosa
	} else {
	  return false; // Autenticación fallida
	}
  }
  