import {createSlice} from '@reduxjs/toolkit';
import {ResultArrayType} from '../../types';

interface InitialStateType {
  result: Array<ResultArrayType>;
}

const initialState: InitialStateType = {
  result: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    addData: (state, action) => {
      state.result = action.payload;
    },
    updateData: (state, action) => {
      state.result[action.payload?.id - 1] = action.payload;
    },
  },
});

export const homeReducer = homeSlice.reducer;
export const homeActions = homeSlice.actions;
