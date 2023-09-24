import './Main.css'
import imagen1 from './DCR2000.png'
import imagen2 from './WH15000.png'
import imagen3 from './FC50.png'
import imagen4 from './cra30.png'

function Main(){
	return(
		<main className="image-grid">
			<div className="image-container">
        		<img src={imagen1} alt="imagen 1" className="image-opacity" />
        		<div className="image-text">
          			<p>DCR2000</p>
        		</div>
      		</div>
			<div className="image-container">
        		<img src={imagen2} alt="imagen 2" className="image-opacity" />
        		<div className="image-text">
          			<p>WH15000</p>
        		</div>
      		</div>
			<div className="image-container">
        		<img src={imagen3} alt="imagen 3" className="image-opacity" />
        		<div className="image-text">
          			<p>FC50</p>
        		</div>
      		</div>
			<div className="image-container">
        		<img src={imagen4} alt="imagen 4" className="image-opacity" />
        		<div className="image-text">
          			<p>CRA-30</p>
        		</div>
      		</div>
		</main>
	);
}

export { Main }