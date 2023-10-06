import { useDispatch, useSelector } from 'react-redux';
import { DataFull } from '../Type/types';
import { actionBtnDelete } from '../redux/actions';

function Table() {
  const dispatch = useDispatch();
  const { expenses } = useSelector((state: DataFull) => state.wallet);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        {expenses.map((expense) => (
          <tbody key={ expense.id }>
            <tr>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{Number(expense.value).toFixed(2)}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
              <td>
                {(Number(expense.value)
                 * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button>editar</button>
                <button
                  data-testid="delete-btn"
                  onClick={ () => (dispatch(actionBtnDelete(expense.id))) }
                >
                  excluir

                </button>
              </td>
            </tr>
          </tbody>
        ))}
        ;
      </table>
    </div>
  );
}

export default Table;
