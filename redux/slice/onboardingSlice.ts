import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
  step1: Record<string, any>;
  step2: Record<string, any>;
}

const initialState: IState = {
  step1: {},
  step2: {},
};

const onboardingSlice = createSlice({
  name: "onboardingProcess",
  initialState,
  reducers: {
    SET_FORM_ONE: (state, action) => {
      return {
        ...state,
        step1: action.payload,
      };
    },
    SET_FORM_TWO: (state, action) => {
      return {
        ...state,
        step2: action.payload,
      };
    },
    CLEAR_FORM: (state) => {
      return {
        ...state,
        step1: {},
        step2: {},
      };
    },
  },
});

export default onboardingSlice.reducer;
export const { SET_FORM_ONE, SET_FORM_TWO, CLEAR_FORM } =
  onboardingSlice.actions;
