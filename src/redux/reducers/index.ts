import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';

const rootReducer = combineReducers({
  wallet: walletReducer,
  user: userReducer,
});

export default rootReducer;
