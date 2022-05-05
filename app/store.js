import {configureStore} from '@reduxjs/toolkit';
import locationReducer from '../reducers/location.reducer';
import tokenReducer from '../reducers/token.reducer';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    token: tokenReducer,
  },
});
