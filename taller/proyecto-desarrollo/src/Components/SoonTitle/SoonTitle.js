import './SoonTitle.css'

function SoonTitle({ title }){
	return (
        <div className="title-soon-container">
            <h3 className='title-soon'>{title}</h3>
        </div>
    );
}

export { SoonTitle }