import {configureStore} from '@reduxjs/toolkit';
import locationReducer from '../reducers/location.reducer';
import tokenReducer from '../reducers/token.reducer';
import postReducer from '../reducers/post.reducer';


export const store = configureStore({
  reducer: {
    location: locationReducer,
    token: tokenReducer,
    postReducer: postReducer,
  },
});
