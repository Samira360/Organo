import "./Input.css"

const Input = (props) => {

    const aoDigitar = (e) =>{
        props.aoAlterar(e.target.value)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;