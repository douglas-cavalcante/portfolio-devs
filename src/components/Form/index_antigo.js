import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      expertise: "",
      email: "",
      expertises: [],
    };
  }

  handleChange = (event) => {
    console.log('chamei')
    const { name, value } = event.target;
    // if valido
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.checkValidity();
    console.log("handleSubmit");
  };

  async componentDidMount() {
    const result = await fetch("/api/expertises");
    const data = await result.json();

    this.setState({ expertises: data.expertises });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Digite seu nome"
            required
          />
        </label>
        <label>
          Sobrenome:
          <input
            type="text"
            name="lastname"
            value={this.state.lastname}
            onChange={this.handleChange}
            placeholder="Digite seu sobrenome"
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="example@site.com"
            pattern=".+@.+\..+"
          />
        </label>
        <label>
          Especialidade:
          <select
            name="expertise"
            value={this.state.expertise}
            onChange={this.handleChange}
          >
            <option value="" selected disabled>
              Selecione..
            </option>
            {this.state.expertises.map((expertise) => (
              <option value={expertise}>{expertise}</option>
            ))}
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default Form;
