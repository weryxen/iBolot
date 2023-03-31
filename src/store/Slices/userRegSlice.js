import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const regUser = createAsyncThunk(
  "regUser",
  async function (userInfo, { dispatch, rejectWithValue }) {
    dispatch(clearMassage());
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      };

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        options
      );
      if (response.status >= 200 && response.status <= 204) {
        Swal.fire("Отлично!", "Вы успешно зарегистрировались!", "success");
      } else if (response.status === 404) {
        Swal.fire("Ошибка", "Вы не зарегистрировались", "error");
      }
    } catch (e) {
      Swal.fire("Ошибка", "Вы не зарегистрировались", "error");

      // return rejectWithValue(e.message);
    }
  }
);

const userRegSlice = createSlice({
  name: "userRegSlice",
  initialState: {
  },
  reducers: {
    clearMassage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(regUser.fulfilled, (state, action) => {
      state.message = action.payload;
    });
    builder.addCase(regUser.rejected, (state, action) => {
      state.message = action.payload;
    });
  },
});

export const { clearMassage } = userRegSlice.actions;
export default userRegSlice.reducer;
