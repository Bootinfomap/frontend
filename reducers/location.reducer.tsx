import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type LocationType ={ 
  latitude: number,
  longitude:number
}

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
