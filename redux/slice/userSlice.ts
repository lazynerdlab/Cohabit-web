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
    UPDATE_USER_IMAGE: (state, action) => {
      return {
        ...state,
        user: {
          data: {
            user: {
              ...state.user.data.user,
              image: action.payload.image,
            },
          },
        },
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
export const { SET_USER, CLEAR_USER,UPDATE_USER_IMAGE } = userSlice.actions;
