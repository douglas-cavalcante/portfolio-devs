import React from 'react';
import { useHistory } from 'react-router';
import Logo from '../../assets/logo192.png'

// import { Container } from './styles';

function NewHeader() {
  const history = useHistory();
  return (
    <div>
      <nav className="navbar">
      <img src={Logo} alt="logo" width="40" height="40" />

      <ul className="navbar-item">
        <li onClick={() => history.push('/')}>Home</li>
        <li onClick={() => history.push('/register')}>Cadastro</li>
        <li onClick={() => history.push('/teste')}>Teste</li>
      </ul>
    </nav>
    </div>
  );
}

export default NewHeader;