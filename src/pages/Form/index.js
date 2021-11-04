import { useState } from "react";
import Selector from '../../components/Selector'
import SelectorMultiple from "../../components/SelectorMultiple";

const UF = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goías' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraíma' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
]

const Form = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [observation, setObservation] = useState('');
  const [uf, setUf] = useState('');
  const [optionAnimal, setOptionAnimal] = useState('');
  const [optionColor, setColorFavorite] = useState([]);

  const handleChangeOptionAnimal = (value) => {
    if (value === optionAnimal) {
      setOptionAnimal('')
    } else {
      setOptionAnimal(value)
    }
  }

  const handleChangeOptionColor = (value) => {
    if (optionColor.length === 2) return
    setColorFavorite([...optionColor, value])
  }

  return (
    <div className="content">

      <div className="container-form">

        <h1>Formulário de cadastro</h1>

        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <Selector
          options={['Lion', 'CAT', 'Dog', 'Tiger']}
          onChange={handleChangeOptionAnimal}
          value={optionAnimal}
        />

        {
          /*
 
        <SelectorMultiple
           options={['red', 'green', 'black', 'yellow']}
           onChange={handleChangeOptionColor}
           values={optionColor}
         />
          */
        }

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <input
          type="password"
          placeholder="Confirme sua senha"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        <textarea
          rows={5}
          value={observation}
          onChange={(event) => setObservation(event.target.value)}
          placeholder="Como chegou aqui ?"
        />

        <select
          value={uf}
          onChange={(event) => setUf(event.target.value)}
        >
          <option value=""></option>
          {UF.map(state => <option value={state.value}>{state.label}</option>)}
        </select>

      </div>

    </div>
  )
}

export default Form;