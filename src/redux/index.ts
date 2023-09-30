import { legacy_createStore as CreateStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';

const store = CreateStore(rootReducer, composeWithDevTools());
if (window.Cypress) {
  window.store = store;
}
export default store;
