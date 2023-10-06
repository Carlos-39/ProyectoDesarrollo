import './Login.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { authenticateUser } from './Autentificacion'
import React, { useState } from 'react';

function Login(){
	const [errorMsg, setErrorMsg] = useState('')
	const history = useHistory();

	const handleLogin = async (e) => {
		e.preventDefault();

		const email = e.target.email.value;
    	const password = e.target.password.value;
	
		const isAuthenticated = authenticateUser(email, password);
	
		if (isAuthenticated) {
			history.push('/');
		}else{
			setErrorMsg('Authentication failed');
		}
	};

	return(
		<div className="login-contenedor">
			<div className="login-box">
			<h1 className='title-login'>¡Bienvenido! Por favor, inicia sesión</h1>
			<form onSubmit={handleLogin}>
        		<div className="form-group">
          			<label htmlFor="email">Correo Electrónico<span className="required">*</span> </label>
          			<input type="email" id="email" name="email" required />
        		</div>
        		<div className="form-group">
          			<label htmlFor="password">Contraseña<span className="required">*</span> </label>
          			<input type="password" id="password" name="password" required />
        		</div>
        		<div className="button-contenedor">
          			<button type="submit" className="login-boton">Iniciar Sesión</button>
        		</div>
      		</form>
			{errorMsg && <p className="error-message">{errorMsg}</p>}
			<p className='back-home'>¿Deseas regresar? <Link to="../">Vuelve al Home</Link></p>
			</div>
		</div>
	);
}

export { Login }