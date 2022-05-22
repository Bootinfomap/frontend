import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocationType} from '../components/_type/generalType'

interface LocationState {
  value: LocationType
}

const initialState: LocationState = {
  value: {
    latitude: 0,
    longitude: 0,
  },
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action:PayloadAction<LocationType>) => {
      state.value = action.payload;
    },
  },
});

export const {setLocation} = locationSlice.actions;
export default locationSlice.reducer;
