export interface adminLoginPayload {
    email:string,
    password:string,
}

export interface studentLoginPayload {
    Reg_No?:string,
    email?:string,
    password:string,
}

export interface FacultyLoginPayload {
    Reg_No?:string,
    email?:string,
    password:string,
}