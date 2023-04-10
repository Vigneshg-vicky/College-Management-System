import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { RootState } from "../../app/store";

const data = localStorage.getItem('facultyToken') ?? '';
const parsedData: { token: string } = data ? JSON.parse(data) : null;
const initialState = {
    data: parsedData ?? {
        token: '',
    }
}

const facultyAuthSlice = createSlice({
    name: 'faculty',
    initialState,
    reducers: {
        setFacultyToken(state, action: PayloadAction<{ token: string }>) {
            localStorage.setItem(
                'facultyToken',
                JSON.stringify({
                    token: action.payload.token,
                })
            )
            state.data = { token: action.payload.token }
        },

        deleteFacultyToken(state) {
            localStorage.removeItem('facultyToken'),
                state.data = {
                    token: ''
                }
        }
    }
})

export const { setFacultyToken, deleteFacultyToken } = facultyAuthSlice.actions;
export const selectFacultyAuth = (state: RootState) => state.facultyAuth.data;
export const facultyAuthReducer = facultyAuthSlice.reducer;