let i = 100;
let date = new Date();
const year = date.getFullYear()
console.log(year)
let reg_no = 'FAC'+`${year}`+`${++i}`
console.log(reg_no)