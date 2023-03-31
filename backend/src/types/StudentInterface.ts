export interface StudentLoginInterface {
    _id: string;
    name: string;
    Reg_No: string;
    email: string;
    password: string;
    department: string;
    Joining_Year: Date;
    Contact_No: number;
}

export interface StudentInterface {
    name: string;
    email: string;
    department: string,
    year: string,
    dob?: string,
    contact_no?: number,
    Reg_No?: string,
    gender: string,
}

export interface EditStudentInterface {
    name?: string,
    Reg_No?: string,
    email?: string,
    department?: string,
    year?: Date,
    registration_No?: string,
    contact_No?: number,
}

export interface SubjectInterface {
    name: string,
    code: string,
    department: string,
    total: number,
}