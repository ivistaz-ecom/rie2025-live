import { createStore } from 'redux';
import modalReducer from './reducers';

const store = createStore(modalReducer);

export default store;