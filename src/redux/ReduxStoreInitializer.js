import { createStore } from 'redux';
import AppReducer from './AppReducer';
import initialState from './initialState';

const store = createStore(AppReducer, initialState);

export default store;