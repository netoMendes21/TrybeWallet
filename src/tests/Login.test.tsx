import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

const login = 'email-input';
const password = 'password-input';

it('Testando se email e senha aparecem na tela', () => {
  renderWithRouterAndRedux(<App />);

  expect(screen.getByTestId(login)).toBeInTheDocument();
  expect(screen.getByTestId(password)).toBeInTheDocument();
});

it('Verificar se o botão Entrar habilita somente com os campos preenchidos devidamente', async () => {
  renderWithRouterAndRedux(<App />);

  const user = userEvent.setup();
  const emailCorreto = 'emailCorreto@gmail.com';
  const emailErrado = 'emailCorreto.com';
  const senhaCorreta = 'senha1';
  const senhaErrada = 'erro';

  const email = screen.getByTestId(login);
  const senha = screen.getByTestId(password);
  const btn = screen.getByRole('button');

  await user.type(email, emailErrado);
  await user.type(senha, senhaErrada);
  expect(btn).toBeDisabled();
  await user.clear(email);
  await user.clear(senha);

  await user.type(email, emailErrado);
  await user.type(senha, senhaCorreta);
  expect(btn).toBeDisabled();
  await user.clear(email);
  await user.clear(senha);

  await user.type(email, emailCorreto);
  await user.type(senha, senhaErrada);
  expect(btn).toBeDisabled();
  await user.clear(email);
  await user.clear(senha);

  await user.type(email, emailCorreto);
  await user.type(senha, senhaCorreta);
  expect(btn).toBeEnabled();
});

it('Teste se os campos do usuário são renderizados', () => {
  renderWithRouterAndRedux(<App />);
  const user = screen.getByTestId(login);
  const passwordScreen = screen.getByTestId(password);
  expect(user).toBeInTheDocument();
  expect(passwordScreen).toBeInTheDocument();
});

it('Verificar se quando o botão Entrar é clicado , o usuário é redirecionado para a carteira', async () => {
  renderWithRouterAndRedux(<App />);
  const user = userEvent.setup();
  const email = 'telecurso2000@gmail.com';
  const passwordTest = 'senha1';
  const inputEmail = screen.getByTestId(login);
  const passwordCorrect = screen.getByTestId(password);
  const btn = screen.getByRole('button');
  await user.type(inputEmail, email);
  await user.type(passwordCorrect, passwordTest);
  expect(btn).toBeEnabled();
  await user.click(btn);
  waitFor(() => expect(global.window.location.pathname).toEqual('/carteira'));
});
