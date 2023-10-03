import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type DadosInput = {
  currencies: string,
  description: string,
  exchangeRates: any,
  id: number,
  currency: string,
  method: string,
  tag: string,
  value: string,
};

export type FormType = {
  description: string,
  currency: string,
  method: string,
  tag: string,
  value: string,
};

export type DataWallet = {
  currencies: string[],
  expenses: DadosInput[],
};

export type DataUser = {
  email: string;
  password: string;
};

export type DataFull = {
  user: DataUser;
  wallet: DataWallet ;
};
export type DispatchThunk = ThunkDispatch <DataFull, unknown, AnyAction>;
