import {configureStore} from '@reduxjs/toolkit';
import locationReducer from '../reducers/location.reducer';

export const store = configureStore({
  reducer: {
    location: locationReducer,
  },
});
