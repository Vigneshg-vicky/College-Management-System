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
    year: Date,
    dob?: string,
    contact_No?: number,
    Reg_No?: string,
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