import { AnyAction } from 'redux';
import { CARTEIRA_API, WALLET } from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
};

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
    default:
      return state;
  }
};

export default walletReducer;
