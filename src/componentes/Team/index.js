import Card from '../Card'
import './Team.css'

const Team = (props) => {

    return (
        props.colabs.length > 0 && <section className='team' style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.nome}</h3>
            <div className='colabs'>
            {props.colabs.map(colab => <Card key={colab.nome} nome={colab.nome} cargo={colab.cargo} img={colab.img} backColor={props.primaryColor}/>)}
            </div>
        </section>
    )
}

export default Team