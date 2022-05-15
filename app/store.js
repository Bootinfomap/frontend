import {configureStore} from '@reduxjs/toolkit';
import locationReducer from '../reducers/location.reducer';
import authReducer from '../reducers/auth.reducer';
import postReducer from '../reducers/post.reducer';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    auth: authReducer,
    postReducer: postReducer,
  },
});
