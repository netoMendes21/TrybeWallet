import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataFull, DispatchThunk } from '../Type/types';
import { dataApi } from '../redux/actions';

function WalletForm() {
  const dispatch: DispatchThunk = useDispatch();
  const { currencies } = useSelector((state: DataFull) => state.wallet);
  const [inputValue, SetInputValue] = useState({
    description: '',
    currency: '',
    method: '',
    tag: '',
    value: '',
  });

  const getNameInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value: inputForm } = e.target;
    SetInputValue({ ...inputValue, [name]: inputForm });
  };

  const getData = () => {
    dispatch(action(inputValue));
    SetInputValue({
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Alimentação',
      value: '',
    });
  };

  useEffect(() => {
    dispatch(dataApi());
  });

  return (
    <div>
      <form>
        <label htmlFor="value">Valor da despesa:</label>
        <input
          type="number"
          name="value"
          id="despesa"
          value={ inputValue.value }
          data-testid="value-input"
          onChange={ getNameInput }
        />

        <label htmlFor="descricao">Descrição</label>
        <input
          type="text"
          data-testid="description-input"
          id="drescricao"
          name="description"
          value={ inputValue.description }
          onChange={ getNameInput }
        />

        <label htmlFor="dinheiro">Dinheiro</label>
        <select
          data-testid="currency-input"
          id="dinheiro"
          name="currency"
          value={ inputValue.currency }
          onChange={ getNameInput }
        >
          {currencies.map((currency, index) => (
            <option key={ index } value={ currency }>{currency}</option>
          ))}
        </select>

        <label htmlFor="metodoPagamento">Método de pagamento</label>
        <select
          id="metodoPagamento"
          data-testid="method-input"
          name="method"
          value={ inputValue.method }
          onChange={ getNameInput }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>

        <label htmlFor="categoria">Categoria</label>
        <select
          value={ inputValue.tag }
          data-testid="tag-input"
          id="categoria"
          name="tag"
          onChange={ getNameInput }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>

        <button onClick={ getData }>Adicionar despesa</button>
      </form>
    </div>

  );
}

export default WalletForm;
