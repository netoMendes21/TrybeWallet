import { AnyAction } from 'redux';
import { CARTEIRA_API, DELETE_BTN, WALLET } from '../actions';
import { DataWallet } from '../../Type/types';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
} as DataWallet;

const walletReducer = (state = INITIAL_STATE_WALLET, action: AnyAction) => {
  switch (action.type) {
    case WALLET:
      return { ...state,
        currencies: action.payload,
      };
    case CARTEIRA_API:
      return { ...state,
        expenses: [...state.expenses,
          { id: state.expenses.length, ...action.payload }],
      };
    case DELETE_BTN:
      return { ...state,
        expenses: state.expenses
          .filter((expense) => expense.id !== action.payload) };
    default:
      return state;
  }
};

export default walletReducer;
