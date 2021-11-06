import { Component } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";

const Register = ({ history, location }) => {
  return (
    <>
      <Header title="Register">
        <button onClick={() => history.goBack()}>Voltar</button>
        <Link to="/">
          <button>Início</button>
        </Link>
      </Header>

      <SubHeader title={"Cadastro"} description={"Cadastre um novo dev"} />

      <Form />
    </>
  );
};

export default Register;
