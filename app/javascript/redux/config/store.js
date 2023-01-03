import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer  from "../reducer";

const rootReducer = combineReducers({
    greetings: reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});