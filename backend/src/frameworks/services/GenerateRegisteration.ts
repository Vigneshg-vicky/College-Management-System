

export const RegistrationNumber = () => {
    const GenerateStudentNo = (students: number|string) => {
        students = '00'+students;
        let date = new Date();
        const year = date.getFullYear()
        console.log(year)
        const reg_no = 'ADM_' + `${year}_` + `${students}`
        console.log(typeof reg_no)
        console.log('this is reg no',reg_no)
        return reg_no;
    }

    const GenerateFacultyNo = (faculty: number) => {

        let date = new Date();
        const year = date.getFullYear()
        console.log(year)
        const reg_no = 'FAC_' + `${year}_` + `${++faculty}`
        return reg_no;
    }

    return {
        GenerateStudentNo,
        GenerateFacultyNo,

    }
}


export type RegistrationNumber = typeof RegistrationNumber;
export type RegistrationNumberReturn = ReturnType<RegistrationNumber>
