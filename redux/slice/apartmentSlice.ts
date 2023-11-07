import { createSlice } from "@reduxjs/toolkit";

interface IState {
  step1: Record<string, any>;
  step2: Record<string, any>;
  step3: Record<string, any>;
}

const initialState: IState = {
  step1: {},
  step2: {},
  step3: {},
};

const onboardingSlice = createSlice({
  name: "postApartment",
  initialState,
  reducers: {
    SET_APARTMENT_FORM_ONE: (state, action) => {
      return {
        ...state,
        step1: action.payload,
      };
    },
    SET_APARTMENT_FORM_TWO: (state, action) => {
      return {
        ...state,
        step2: action.payload,
      };
    },
    SET_APARTMENT_FORM_THREE: (state, action) => {
      return {
        ...state,
        step3: action.payload,
      };
    },
    CLEAR_APARTMENT_FORM: (state) => {
      // Reset all steps to empty objects
      return {
        ...state,
        step1: {},
        step2: {},
        step3: {},
      };
    },
  },
});

export default onboardingSlice.reducer;
export const {
  SET_APARTMENT_FORM_ONE,
  SET_APARTMENT_FORM_TWO,
  SET_APARTMENT_FORM_THREE,
  CLEAR_APARTMENT_FORM,
} = onboardingSlice.actions;
