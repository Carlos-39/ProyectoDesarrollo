import './Title.css'

function Title({ title }){
	return (
        <div className="title-main-container">
            <h1 className='title-main'>{title}</h1>
        </div>
    );
}

export { Title }