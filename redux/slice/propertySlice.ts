import { createSlice } from "@reduxjs/toolkit";

interface IState {
  loading: boolean;
  property: Record<string, any>;
  host: Record<string, any>;
}

const initialState: IState = {
  loading: false,
  property: {},
  host: {},
};

const propertySlice = createSlice({
  name: "propertyData",
  initialState,
  reducers: {
    SET_PROPERTY_LOADING: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
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
export const {
  SET_PROPERTY,
  CLEAR_PROPERTY,
  SET_HOST,
  CLEAR_HOST,
  SET_PROPERTY_LOADING,
} = propertySlice.actions;
