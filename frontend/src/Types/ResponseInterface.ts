export interface ILoginResponse {
    status: string,
    message: string,
    token: string,
}

export interface IBasicResponse {
    status: string,
    message: string,
}

export interface IStudentResponse {
    status: string,
    message: string,
    student?: {}
}

export interface IDepartmentResponse {
    status: string,
    message: string,
    Departments: [{ _id: string, department: string }]
}

export interface IStudentResponse {
    name: string,
    email: string,
    department: string,
    Joining_Year: string,
    Reg_No: string,
    Contact_No: string,
    gender: string,
}

export interface IFacultyResponse {
    name: string,
    email: string,
    department: string,
    designation: string,
    password?: string,
}


export interface IAdminResponse {
    status: string,
    message: string,
    departments: [{ _id: string, department: string }],
    adminData: { name?: string, email: string, password: string, url?: string },
    students: IStudentResponse,
    faculty: IFacultyResponse,
}