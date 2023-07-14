import './Form.css'
import Input from '../Input'
import List from '../List'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {

    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [team, setTeam] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoCriar({nome, cargo, img, team})
        setNome("")
        setCargo("")
        setImg("")
        setTeam("")
    }

    return (
        <section className="form">
            <form onSubmit={aoSalvar}>
                <h1>Preencha os dados para criar o card do colaborador</h1>
                <Input valor={nome} aoAlterar={valor => setNome(valor)} label="Nome" required={true} placeholder="Digite o seu nome"/>
                <Input valor={cargo} aoAlterar={valor => setCargo(valor)} label="Cargo" required={true} placeholder="Digite o seu cargo"/>
                <Input valor={img} aoAlterar={valor => setImg(valor)} label="Imagem" placeholder="Digite o endereço da imagem"/>
                <List valor={team} aoAlterar={valor => setTeam(valor)} label="Time" required={true} itens={props.teams}/>
                <Button text="Criar Card"/>
            </form>
        </section>
    )

}

export default Form