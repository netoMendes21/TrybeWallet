import { legacy_createStore as CreateStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducers from './reducers';

const store = CreateStore(reducers, composeWithDevTools());

export default store;
