import {configureStore} from '@reduxjs/toolkit';
import locationReducer from '../reducers/location.reducer';
<<<<<<< HEAD
import tokenReducer from '../reducers/token.reducer';
import postReducer from '../reducers/post.reducer';

=======
import authReducer from '../reducers/auth.reducer';
import postReducer from '../reducers/post.reducer';
>>>>>>> 4edb3ce11e04bfa5a41a9680ab40de0635e14d44

export const store = configureStore({
  reducer: {
    location: locationReducer,
    auth: authReducer,
    postReducer: postReducer,
  },
});
