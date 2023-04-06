import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { adminLoginPayload, departmentPayload, FormTablePayload } from '../../../Types/payloadInterface';
import { ILoginResponse, IBasicResponse, IDepartmentResponse, IAdminResponse } from '../../../Types/ResponseInterface';

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
    tagTypes: ['student', 'admin', 'faculty', 'department'],
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
        }),

        getAdminHome: builder.query<IAdminResponse, void>({
            query: () => '/admin/home',
            providesTags: ['admin', 'department', 'faculty', 'student']
        }),

        getDepartment: builder.query<IDepartmentResponse, void>({
            query: () => '/admin/departments',
            providesTags: ['admin', 'department']
        }),
        AddStudent: builder.mutation<IBasicResponse, FormTablePayload>({
            query: (data) => ({
                url: '/admin/add-student',
                method: 'POST',
                body: data
            })
        }),
        addFaculty: builder.mutation({
            query: (data) => ({
                url: '/admin/add-faculty',
                method: 'POST',
                body: data,
            })
        }),
        addSubject: builder.mutation({
            query: (data) => ({
                url: '/admin/add-subject',
                method: 'POST',
                body: data,
            })
        }),
        studentLogin: builder.mutation({
            query: (data) => ({
                url: '/auth/student-login',
                method: 'POST',
                body: data
            })
        }),

        facultyLogin: builder.mutation({
            query: (data) => ({
                url: '/auth/faculty-login',
                method: 'POST',
                body: data,
            })
        }),
        EditStudent: builder.mutation({
            query: (data) => ({
                url: '/student/edit-student',
                method: 'PATCH',
                body: data,
            })
        }),

        getStudentWithDept: builder.query({
            query: (data) => `/admin/students/${data._id}`,
            providesTags: ['admin', 'student'],
        }),
        getStudentData: builder.query<IStudentResponse, void>({
            query: () => '/student/details',
            providesTags: ['student'],
        })



    })
})

export const {
    useAdminLoginMutation,
    useAdminAddDepartmentMutation,
    useGetDepartmentQuery,
    useGetAdminHomeQuery,
    useAddStudentMutation,
    useAddFacultyMutation,
    useAddSubjectMutation,
    useFacultyLoginMutation,
    useStudentLoginMutation,
    useGetStudentWithDeptQuery,
    useGetStudentDataQuery,
    useEditStudentMutation,

} = apiSlice;