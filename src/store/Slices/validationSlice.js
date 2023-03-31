import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputText: '',
  hasError: false,
};

const mySlice = createSlice({
  name: 'myReducer',
  initialState,
  reducers: {
    setInputText(state, action) {
      state.inputText = action.payload;
    },
    setHasError(state, action) {
      state.hasError = action.payload;
    },
  },
});

export const { setInputText, setHasError } = mySlice.actions;

export default mySlice.reducer;