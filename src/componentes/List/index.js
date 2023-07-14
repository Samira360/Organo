import './List.css'

const List = (props) => {

    return (
        <div className="list">
            <label>{props.label}</label>
            <select onChange={e => props.aoAlterar(e.target.value)} value={props.valor} required={props.required}>
                <option key="" value=""></option>
                {props.itens.map( item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default List