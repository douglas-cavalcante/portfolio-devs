import React from "react";
import Header from "../../components/Header";
import DevItem from "../../components/DevList/DevItem";
import { Link } from "react-router-dom";

import {useLocation} from 'react-router-dom'

const Perfil = () => {
  
  const location = useLocation();
  console.log(location.state.dev)
  return (
    <>
      {/*Header*/}
      <Header title="Super Dev">
        <Link to="/register">
          <button>Criar</button>
        </Link>
        <Link to="/">
          <button>Início</button>
        </Link>
      </Header>
      <DevItem {...location.state.dev} />
    </>
  );
};

export default Perfil;
