import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PressType = { '음식': boolean, '위험': boolean, '인물': boolean, '기타1': boolean, '기타2': boolean };

interface FilterState {
    item: Array<string>
    isPress: PressType,
}

const initialState: FilterState = {
    item: [],
    isPress: { '음식': false, '위험': false, '인물': false, '기타1': false, '기타2': false },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        initFilter: (state: FilterState) => {
            state.item = [];
            state.isPress = { '음식': false, '위험': false, '인물': false, '기타1': false, '기타2': false };
        },
        addFilter: (state: FilterState, action: PayloadAction<string>) => {
            let tempPress: PressType = { ...state.isPress };
            tempPress[action.payload as keyof typeof state.isPress] = !tempPress[action.payload as keyof typeof state.isPress];
            state.isPress = tempPress;
            let tempItem: Array<string> = [...state.item];
            tempItem.push(action.payload);
            state.item = [...tempItem];
        },
        removeFilter: (state: FilterState, action: PayloadAction<string>) => {
            let tempPress: PressType = { ...state.isPress };
            tempPress[action.payload as keyof typeof state.isPress] = !tempPress[action.payload as keyof typeof state.isPress];
            state.isPress = tempPress;
            state.item = state.item.filter((one: string) => one !== action.payload)
        },
    },
});

export const { initFilter, addFilter, removeFilter } = filterSlice.actions;
export default filterSlice.reducer;