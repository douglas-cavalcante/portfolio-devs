import { useState } from "react";

const Form = () => {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [expertise, setExpertise] = useState("");
  const [email, setEmail] = useState("");
  const [expertises, setExpertises] = useState([
    'React Developer',
    'Full Stack'
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!name) {
      alert('Nome é obrigatório')
      return;
    } else if (!name.match(/^[a-zA-Z]/)) {
      alert("Nome de conter somente letras")
      return
    } else if (!lastname) {
      alert('Sobrenome é obrigatório')
      return;
    } else if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      alert('Email é inválido')
      return;
    }

    // api
    event.target.checkValidity();
    console.log("handleSubmit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
          required
        />
      </label>
      <label>
        Sobrenome:
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="Digite seu sobrenome"
        />
      </label>
      <label>
        E-mail:
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@site.com"
        />
      </label>
      <label>
        Especialidade:
        <select
          name="expertise"
          value={expertise}
          onChange={(e) => setExpertise(e.target.value)}
        >
          <option value="" selected disabled>
            Selecione..
          </option>
          {expertises.map((expertise) => (
            <option value={expertise}>{expertise}</option>
          ))}
        </select>
      </label>

      <input type="submit" value="Enviar" />
    </form>
  );
}

export default Form