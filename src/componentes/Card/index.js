import './Card.css'

const Card = ({nome, cargo, img, backColor}) => {
    return (
        <div className='card'>
            <div className='head' style={{backgroundColor: backColor}}>
                <img src={img} alt=""/>
            </div>
            <div className='card-footer'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Card