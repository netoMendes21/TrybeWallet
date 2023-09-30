import { AnyAction } from 'redux';
import { USER } from '../actions';

const INITIAL_STATE_USER = {
  email: '',
  password: '',
};

const userReducer = (state = INITIAL_STATE_USER, action: AnyAction) => {
  switch (action.type) {
    case USER:
      return { ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
