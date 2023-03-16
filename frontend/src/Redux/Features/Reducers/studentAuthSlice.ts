import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Root } from "react-dom/client";
import { RootState } from "../../app/store";

const data = localStorage.getItem('studentToken') ?? '';
const parsedData: { token: string } = data ? JSON.parse(data) : null;
const initialState = {
    data: parsedData ?? {
        token: '',
    }
}

const studentAuthSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setStudentToken(state, action: PayloadAction<{ token: string }>) {
            localStorage.setItem(
                'studentToken',
                JSON.stringify({
                    token: action.payload.token,
                })
            )
            state.data = { token: action.payload.token }
        },
        deleteStudentToken(state) {
            state.data = {
                token: '',
            },
                localStorage.removeItem('studentToken')

        }
    }
})

export const {setStudentToken,deleteStudentToken} = studentAuthSlice.actions;
export const selectStudentAuth = (state:RootState) => state.studentAuth.data;
export const studentAuthReducer = studentAuthSlice.reducer;