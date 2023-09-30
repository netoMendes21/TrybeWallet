import { AnyAction } from 'redux';
import { WALLET } from '../actions';

const INITIAL_STATE_WALLET = {

};

const walletReducer = (state = INITIAL_STATE_WALLET, action: AnyAction) => {
  switch (action.type) {
    case WALLET:
      return { ...state,
      };
    default:
      return state;
  }
};

export default walletReducer;
