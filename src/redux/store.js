import { configureStore } from '@reduxjs/toolkit';
import redAuth from './reducers/redAuth';
import redTabla from './reducers/redTabla';


export const store = configureStore({
  reducer: {
    redAuth: redAuth,
    redTabla: redTabla
  },
});

