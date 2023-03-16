import { configureStore } from "@reduxjs/toolkit";
import { adminAuthReducer } from "../Features/Reducers/adminAuthSlice";
import { studentAuthReducer } from "../Features/Reducers/studentAuthSlice";
import { facultyAuthReducer } from "../Features/Reducers/facultyAuthSlice";
import logger from 'redux-logger'
import { apiSlice } from "../Features/Api/apiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]:apiSlice.reducer,
        adminAuth:adminAuthReducer,
        studentAuth:studentAuthReducer,
        facultyAuth:facultyAuthReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export type State = typeof store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;