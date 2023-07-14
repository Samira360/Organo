import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form'
import Team from './componentes/Team';
import Footer from './componentes/Footer'

function App() {

  const teams = [
    {
      nome: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      nome: 'DevOps',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

  const [colabs, setColabs] = useState([])

  const addColab = (colab) =>{
    setColabs([...colabs, colab])
    // console.log(colab)
  }

  return (
    <div className="App">
      <Banner/>
      <Form teams={teams.map(team => team.nome)} aoCriar={valor => addColab(valor)}/>
      {teams.map(team => <Team colabs={colabs.filter(colab => colab.team === team.nome)} key={team.nome} nome={team.nome} primaryColor={team.primaryColor} secondaryColor={team.secondaryColor}/>)}
      <Footer/>
    </div>
  );
}

export default App;
