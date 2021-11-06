import { useState } from "react";
import Selector from '../../components/Selector'
import { useHistory, useLocation} from 'react-router-dom';

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
];

const Form = (props) => {

 
  const history = useHistory();
 // const location = useLocation();



  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [observation, setObservation] = useState('');
  const [uf, setUf] = useState('');
  const [optionAnimal, setOptionAnimal] = useState('');

  const handleChangeOptionAnimal = (value) => {
    if (value === optionAnimal) {
      setOptionAnimal('')
    } else {
      setOptionAnimal(value)
    }
  }

  /*
  const handleChangeOptionColor = (value) => {
    if (optionColor.length === 2) return
    setColorFavorite([...optionColor, value])
  }
  */

  const handleSubmit = async (event) => {
    try {

      event.preventDefault();

      if (!name) {
        alert('Nome é obrigatório.');
        return
      } else if (!email) {
        alert('Email é obrigatório.');
        return
      } else if (password.length < 8) {
        alert('A senha é muito pequena.');
        return
      } else if (password !== confirmPassword) {
        alert('As senhas devem ser iguais.');
        return
      } else if (!observation) {
        alert('Observação é obrigatório.');
        return
      } else if (!uf) {
        alert('UF é obrigatório.');
        return
      } else if (!optionAnimal) {
        alert('Animal favorito é obrigatório.');
        return
      }

      // GET - Listar dados e filtrar
      // POST - Cadastrar algum dado
      // PUT - Atualizar algum dado
      // DELETE - Delete algum dado

      await fetch(
        'http://localhost:3333/devs',
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({
            "name": name,
            "favorite_animal": optionAnimal,
            "email": email,
            "password": password,
            "observation": observation,
            "state": uf
          })
        }
      );

      alert('Dev cadastrado com sucesso');

      // Redireciona para tela inicial

      history.push("/");

    } catch (error) {
      alert('Desculpe o transtorno. Estamos resolvendo o problema !')
    }
  }

  /*
  useEffect(() => {
    console.log('to executando toda vez')
  })

  useEffect(() => {
    console.log('executei a primeira vez')
  }, [])

  useEffect(() => {
    console.log('entrei')
    if (password.length > 8) {
      // setPassword('')
    }
  }, [password])

  */

  return (
    <div className="content">

  


      <form className="container-form" onSubmit={handleSubmit}>

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

        <button
          className="btn"
          type="submit">
          Salvar
        </button>

        <button
          onClick={() => history.push('/')}
          className="btn"
          type="button">
          Cancelar
        </button>

      </form>
    </div>
  )
}

export default Form;