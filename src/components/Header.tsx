import { useSelector } from 'react-redux';
import { GlobalState } from '../redux';

function Header() {
  const emailUser = useSelector((state: GlobalState) => state.user.email);
  return (
    <div>
      <p data-testid="email-field">{emailUser}</p>
      <p data-testid="total-field">{0}</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
