import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { adminLoginPayload, departmentPayload } from '../../../Types/payloadInterface';
import { ILoginResponse, IBasicResponse } from '../../../Types/ResponseInterface';

const baseUrl = "http://localhost:8000/api"

const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }: { getState: any }) => {
        const { token: studentToken } = getState()?.studentAuth.data;
        const { token: adminToken } = getState()?.adminAuth.data;
        const { token: facultyToken } = getState()?.facultyAuth.data;
        if (window.location.href.includes('admin')) {
            headers.set('authorization', `Bearer ${adminToken}`)
        } else if (window.location.href.includes('student')) {
            headers.set('authorization', `Bearer ${studentToken}`)
        } else {
            headers.set('authorization', `Bearer ${facultyToken}`)
        }
        return headers;
    }
})

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery,
    tagTypes: ['student', 'admin', 'faculty'],
    endpoints: (builder) => ({
        adminLogin: builder.mutation<ILoginResponse, adminLoginPayload>({
            query: (data) => ({
                url: '/auth/admin-login',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['admin'],
        }),
        adminAddDepartment: builder.mutation<IBasicResponse, departmentPayload>({
            query: (data) => ({
                url: '/admin/add-department',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['admin'],
        })
    })
})

export const {
    useAdminLoginMutation,
    useAdminAddDepartmentMutation,
} = apiSlice;