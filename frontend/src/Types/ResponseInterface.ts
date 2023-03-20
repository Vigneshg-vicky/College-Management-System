export interface ILoginResponse {
    status: string,
    message: string,
    token: string,
}

export interface IBasicResponse {
    status: string,
    message: string,
}

export interface IDepartmentResponse {
    status: string,
    message: string,
    Departments: [{ _id: string, department: string }]
}