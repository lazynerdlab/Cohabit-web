import { createSlice } from "@reduxjs/toolkit";

interface IState {
  property: Record<string, any>;
  host: Record<string, any>;
}

const initialState: IState = {
  property: {},
  host: {},
};

const propertySlice = createSlice({
  name: "propertyData",
  initialState,
  reducers: {
    SET_PROPERTY: (state, action) => {
      return {
        ...state,
        property: action.payload,
      };
    },
    SET_HOST: (state, action) => {
      return {
        ...state,
        host: action.payload,
      };
    },
    CLEAR_PROPERTY: (state) => {
      return {
        ...state,
        property: {},
      };
    },
    CLEAR_HOST: (state) => {
      return {
        ...state,
        host: {},
      };
    },
  },
});

export default propertySlice.reducer;
export const { SET_PROPERTY, CLEAR_PROPERTY, SET_HOST, CLEAR_HOST } =
  propertySlice.actions;
