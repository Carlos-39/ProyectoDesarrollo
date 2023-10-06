import './Login.css'
import { Link } from 'react-router-dom'

function Login(){
	return(
		<div className="login-contenedor">
			<div className="login-box">
			<h1 className='title-login'>¡Bienvenido! Por favor, inicia sesión</h1>
			<form>
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
			<p className='back-home'>¿Deseas regresar? <Link to="../">Vuelve al Home</Link></p>
			</div>
		</div>
	);
}

export { Login }