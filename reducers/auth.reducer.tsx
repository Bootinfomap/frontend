import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../app/store';

interface AuthState {
  user: string | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
