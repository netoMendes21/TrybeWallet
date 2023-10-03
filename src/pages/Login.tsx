import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionUsuario } from '../redux/actions';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, SetLogin] = useState({
    email: '',
    password: '',
  });

  const habilitaBotao = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{1,}$/;
    return (regex.test(login.email) && login.password.length >= 6);
  };

  const handleGetValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    SetLogin({ ...login, [name]: value });
  };

  const direcionaOutraPag = () => {
    navigate('/carteira');
    dispatch(actionUsuario(login));
  };
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        data-testid="email-input"
        name="email"
        value={ login.email }
        id="email"
        onChange={ handleGetValue }
      />

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        data-testid="password-input"
        id="password"
        name="password"
        value={ login.password }
        onChange={ handleGetValue }
      />

      <button
        disabled={ !habilitaBotao() }
        onClick={ direcionaOutraPag }
      >
        Entrar

      </button>
    </div>
  );
}

export default Login;
