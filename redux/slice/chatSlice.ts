
import { createSlice } from "@reduxjs/toolkit";

interface IState {
    name: Record<string, any>;
    chat: Record<string, any>;
    messages: Record<string, any>[];
    loading: boolean
}

const initialState: IState = {
    name:{},
    chat: {},
    messages: [],
    loading: false
};

const chatSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {
        SET_USER_NAME: (state, action) => {
            return {
                ...state,
                name: action.payload,
            };
        },
        SET_CURRENT_CHAT: (state, action) => {
            return {
                ...state,
                chat: action.payload,
            };
        },
        SET_MESSAGES: (state, action) => {
            return {
                ...state,
                messages: action.payload,
            };
        },
        SET_LOADING: (state, action) => {
            return {
                ...state,
                loading: action.payload
            };
        },

        CLEAR_CURREMT_CHAT: (state, action) => {
            return {
                ...state,
                chat: {},
            };
        },
        CLEAR_MESSAGES: (state) => {
            return {
                ...state,
                messages: [],

            };
        },
        
       
    },
});

export default chatSlice.reducer;
export const {
    SET_USER_NAME,
    SET_CURRENT_CHAT,
    SET_MESSAGES,
    CLEAR_CURREMT_CHAT,
    CLEAR_MESSAGES,
} = chatSlice.actions;
