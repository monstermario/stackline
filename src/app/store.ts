import { configureStore } from '@reduxjs/toolkit';
import appState from './reducers/appState';

const reducer = { appState };

const store = configureStore({
  reducer: reducer,
});

export default store;
