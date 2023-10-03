import { legacy_createStore as CreateStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = CreateStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export type GlobalState = ReturnType<typeof store.getState>;
if (window.Cypress) {
  window.store = store;
}
export default store;
