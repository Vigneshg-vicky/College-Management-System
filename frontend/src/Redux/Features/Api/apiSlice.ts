import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { adminLoginPayload, departmentPayload, FormTablePayload } from '../../../Types/payloadInterface';
import { ILoginResponse, IBasicResponse, IDepartmentResponse, IAdminResponse, IStudentResponse } from '../../../Types/ResponseInterface';

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
    tagTypes: ['student', 'admin', 'faculty', 'department', 'subject', 'exam'],
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
            }),
            invalidatesTags: ['admin', 'student'],
        }),
        addFaculty: builder.mutation({
            query: (data) => ({
                url: '/admin/add-faculty',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['admin', 'faculty'],
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
            }),
            invalidatesTags: ['faculty']
        }),
        EditStudent: builder.mutation({
            query: (data) => ({
                url: '/student/edit-student',
                method: 'PATCH',
                body: data,
            })
        }),
        UploadStudentImage: builder.mutation({
            query: (data) => ({
                url: '/student/profile-pic',
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['student']
        }),

        getStudentWithDept: builder.query({
            query: (data) => `/admin/students/${data._id}`,
            providesTags: ['admin', 'student'],
        }),
        GetSubjectWithDept: builder.query({
            query: (id) => `/admin/subjects/${id}`,
            providesTags: ['admin', 'subject']
        }),
        getStudentData: builder.query<any, void>({
            query: () => '/student/details',
            providesTags: ['student'],
        }),
        EditFaculty: builder.mutation({
            query: (data) => ({
                url: '/faculty/edit',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['faculty'],
        }),
        GetFaculty: builder.query<IStudentResponse, void>({
            query: () => '/faculty/details',
            providesTags: ['faculty']
        }),
        GetSubjects: builder.query<IStudentResponse, void>({
            query: () => '/faculty/subjects',
            providesTags: ['faculty', 'subject']
        }),
        AddExams: builder.mutation({
            query: (data) => ({
                url: '/faculty/add-exam',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['exam']
        }),
        EditSubject: builder.mutation({
            query: (data) => ({
                url: '/admin/edit-subject',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['admin', 'subject']
        }),
        GetAdminFaculty: builder.query({
            query: () => '/admin/faculty',
            providesTags: ['faculty'],
        }),
        GetExams: builder.query<IStudentResponse, void>({
            query: () => '/faculty/exams',
            providesTags: ['exam']
        }),
        GetStudentExam: builder.query<IStudentResponse, void>({
            query: () => '/student/exams',
            providesTags: ['student', 'exam'],
        }),
        GetExamWithId: builder.query({
            query: (id) => `/faculty/exams/:${id}`,
            providesTags: ['exam']
        }),
        SetStudentPassword: builder.mutation({
            query: (data) => ({
                url: '/student/password',
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['student']
        }),
        // GenerateStudentOTP:builder.query

        DeleteFaculty: builder.mutation({
            query: (id: string) => ({
                url: `/admin/faculty/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['admin', 'faculty']
        }),
        EditAdminFaculty: builder.mutation({
            query: (data) => ({
                url: '/admin/edit-faculty',
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['admin', 'faculty']
        }),


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
    useEditFacultyMutation,
    useGetFacultyQuery,
    useGetSubjectsQuery,
    useGetExamsQuery,
    useAddExamsMutation,
    useGetAdminFacultyQuery,
    useGetStudentExamQuery,
    useUploadStudentImageMutation,
    useSetStudentPasswordMutation,
    useGetExamWithIdQuery,
    useGetSubjectWithDeptQuery,
    useEditSubjectMutation,
    useDeleteFacultyMutation,
    useEditAdminFacultyMutation,

} = apiSlice;