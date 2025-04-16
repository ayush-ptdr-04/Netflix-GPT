import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});

// userSlice ke actions hain, dispatch karne ke liye use hote hain, unhe bahar (export) kar rahe hain taaki hum component ya kahin aur (dispatch) use kar saken.
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
