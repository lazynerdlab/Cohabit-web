import { createSlice } from "@reduxjs/toolkit";

interface IState {
  user: Record<string, any>;
}

const initialState: IState = {
  user: {},
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    SET_USER: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },

    CLEAR_USER: (state) => {
      return {
        ...state,
        user: {},
      };
    },
  },
});

export default userSlice.reducer;
export const { SET_USER, CLEAR_USER } = userSlice.actions;
