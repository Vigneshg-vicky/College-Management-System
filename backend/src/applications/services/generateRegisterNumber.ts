import { RegistrationNumberReturn } from "../../frameworks/services/GenerateRegisteration";

export const RegisterNumber = (service: RegistrationNumberReturn) => {
    const StudentRegisteration = (students: number) => service.GenerateStudentNo(students)
    
    const FacultyRegistration = (faculties: number) => service.GenerateFacultyNo(faculties);

    return {
        StudentRegisteration,
        FacultyRegistration,
    }
}

export type RegisterNumberInterface = typeof RegisterNumber;