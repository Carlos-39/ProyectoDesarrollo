import './Login.css'
import { Link} from 'react-router-dom'
import { authenticateUser } from './Autentificacion'
import React, { useState } from 'react';

function Login({ onLoginSuccess }) {
	const [email, setEmail] = useState('');
  	const [password, setPassword] = useState('');
  	const [errorMsg, setErrorMsg] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const handleLogin = async (e) => {
		e.preventDefault();

		const email = e.target.email.value;
    	const password = e.target.password.value;
	
		const isAuthenticated = authenticateUser(email, password);
	
		if (isAuthenticated) {
			onLoginSuccess();
		}else{
			setErrorMsg('Datos Incorrectos, intenta de nuevo');
		}
	};

	return(
		<div className="login-contenedor">
			<div className="login-box">
			<h1 className='title-login'>¡Bienvenido! Por favor, inicia sesión</h1>
			<form onSubmit={handleLogin}>
        		<div className="form-group">
          			<label htmlFor="email">Correo Electrónico<span className="required">*</span> </label>
          			<input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        		</div>
        		<div className="form-group">
          			<label htmlFor="password">Contraseña<span className="required">*</span> </label>
          			<input
              			type={showPassword ? 'text' : 'password'}
              			id="password"
              			name="password"
              			value={password}
              			onChange={(e) => setPassword(e.target.value)}
              			required
            		/>
					<button type="button" onClick={() => setShowPassword(!showPassword)} className="show-password-button">
						{showPassword ? "Ocultar" : "Mostrar"}
            		</button>
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