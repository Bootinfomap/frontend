import {configureStore} from '@reduxjs/toolkit';
import locationReducer from '../reducers/location.reducer';
import authReducer from '../reducers/auth.reducer';
import postReducer from '../reducers/post.reducer';
import filterReducer from '../reducers/filter.reducer';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    auth: authReducer,
    post: postReducer,
    filter:filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch