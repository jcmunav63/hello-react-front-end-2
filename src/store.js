// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './reducers/greetingReducer';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
