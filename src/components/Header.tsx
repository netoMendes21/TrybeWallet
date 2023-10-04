import { useSelector } from 'react-redux';
import { DataFull } from '../Type/types';

function Header() {
  const emailUser = useSelector((state: DataFull) => state.user.email);
  const { expenses } = useSelector((state: DataFull) => state.wallet);
  const conversao = () => {
    return expenses.reduce((acc, curr) => {
      return acc + Number(curr.value) * Number(curr.exchangeRates[curr.currencies].ask);
    }, 0).toFixed(2);
  };
  return (
    <div>
      <p data-testid="email-field">{emailUser}</p>
      <p data-testid="total-field">{conversao()}</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
